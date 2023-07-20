'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'


const UserCard = ({ id }) => {
    const { data: session } = useSession();
    const [isFollowed, setIsFollowed] = useState(false); // Initialize to false initially
    const [profileDetails, setProfileDetails] = useState({});

    useEffect(() => {
        const fetchUserData = async () => {
          try {
            const user = await request(`/user/${id}`, 'GET');
            setProfileDetails(user);
            // Check if the current user is following the profile user
            setIsFollowed(user.followers.includes(session?.user?.id));
          } catch (error) {
            console.error(error);
          }
        };
        fetchUserData();
      }, [id, session]);


    const handleFollow = async () => {
    try {
      const headers = {
        'Authorization': `Bearer ${session?.accessToken}`,
      };

      // Toggle the follow status based on the current state (isFollowed)
      if (isFollowed) {
        await request(`/user/${id}/follow`, 'PUT', headers);
      } else {
        await request(`/user/${id}/follow`, 'PUT', headers);
      }

      setIsFollowed((prev) => !prev); // Toggle the follow status in the state
    } catch (error) {
      console.error(error);
    }
  };


  return (
  <section>
      <div>
        <div>
          <div>
            {/* Display the cover picture if available, otherwise display a placeholder */}
            <img
              style={{height: "100px"}}
              src={
                profileDetails?.coverPic
                  ? BACKEND_URL + profileDetails?.coverPic
                  : 'https://images.pexels.com/photos/17530670/pexels-photo-17530670/free-photo-of-light-city-dawn-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' // Replace with the actual path to your default cover picture
              }
            />
            {/* Display the profile picture if available, otherwise display a placeholder */}
            <img
            style={{height: "100px"}}
              src={
                profileDetails?.profilePic
                  ? BACKEND_URL + profileDetails?.profilePic
                  : 'https://images.pexels.com/photos/17530670/pexels-photo-17530670/free-photo-of-light-city-dawn-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' // Replace with the actual path to your default profile picture
              }
            />
            <div>
              <h2>{profileDetails?.username}</h2>
              {id !== session?.user?.id && (
                <button onClick={handleFollow}>
                  {isFollowed ? 'Followed' : 'Follow'}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
  </section>
  )
}

export default UserCard