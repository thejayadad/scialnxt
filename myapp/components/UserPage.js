"use client";

import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import UserCard from "./UserCard";
import useSWR from "swr";


const UserPage = () => {
    const { data: session } = useSession();

    const [allUsers, setAllUsers] = useState([]);

    useEffect(() => {
      const fetchUsers = async () => {
        try {
          const response = await fetch(`/api/user/`);
          const data = await response.json();
  
          setAllUsers(data);
        } catch (error) {
          console.error("Error fetching users:", error);
        }
      };
  
      if (session?.user.id) {
        fetchUsers();
      }
    }, [session?.user.id]);


    return (
   <section>
    <div>
        {allUsers.map((user) => (
            <UserCard key={user.id} {...user} />
        ))}
    </div>
   </section>
  )
}

export default UserPage