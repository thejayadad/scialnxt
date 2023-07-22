"use client";

import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation'
import IndividualDonut from "@/components/IndividualDonut";


import React from 'react'

const Profile = () => {
    const { data: session } = useSession();
    const [userDonut, setUserDonut] = useState([]);
    const router = useRouter(); // Use the useRouter hook
  
    useEffect(() => {
      const fetchDonuts = async () => {
        // Access the 'id' parameter from the URL query using router.query
        const response = await fetch(`/api/user/${router.query.id}`);
        const data = await response.json();
  
        setUserDonut(data);
      };
  
      if (session?.user.id) fetchDonuts();
    }, [router.query.id]); // Include router.query.id in the dependency array to re-fetch data when the 'id' parameter changes
  
    return (
      <section>
        <h2>Profile Page</h2>
        {userDonut.length < 1 ? (
          <h3>Your Prompts is empty. Click on the Create Prompt to create one</h3>
        ) : (
          userDonut.map((singleUserDonut) => <IndividualDonut {...singleUserDonut} />)
        )}
      </section>
    );
  };
  
  export default Profile;