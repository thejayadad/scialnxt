'use client'

import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useSession } from 'next-auth/react'


const Friends = () => {
    const [friends, setFriends] = useState([])
    const { data: session } = useSession()

   
  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const response = await fetch(`/api/user/${id}/friends`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${session?.accessToken}`,
          },
        });

        if (!response.ok) {
          // Handle error if the request was not successful
          throw new Error('Failed to fetch friends.');
        }

        const friendsData = await response.json();
        setFriends(friendsData.friends);
      } catch (error) {
        console.error(error);
        toast.error('Failed to fetch friends.');
      }
    };

    if (session) {
      fetchFriends();
    }
  }, [session]);

  return (
    <section>
  <div>
        {friends?.length > 0 ? (
          friends.map((friend) => (
            <div key={friend._id} className={classes.friend}>
              <img
                src={friend?.profilePic || '/default-profile-pic.jpg'}
                className={classes.friendImg}
                alt="profile"
              />
              <span>{friend.username}</span>
            </div>
          ))
        ) : (
          <h3 style={{ textAlign: 'center' }}>You currently have no friends</h3>
        )}
      </div>
    </section>
  )
}

export default Friends