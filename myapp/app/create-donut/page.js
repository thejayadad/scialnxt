'use client'

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { AiOutlineFileImage } from 'react-icons/ai'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useSession } from 'next-auth/react'


const CreateDonut = () => {
    
    const [desc, setDesc] = useState('')
    const [photo, setPhoto] = useState('')

    const { data: session, status } = useSession()
    const router = useRouter()


    if (status === 'loading') {
        return <p>Loading...</p>
    }

    if (status === 'unauthenticated') {
        return <p >
            Access Denied
        </p>
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!photo || !desc) {
          toast.error('All fields are required');
          return;
        }
    
        try {
          const res = await fetch('http://localhost:3000/api/donut', {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${session?.user?.accessToken}`,
            },
            method: 'POST',
            body: JSON.stringify({ desc, imageUrl: photo, userId: session.id}), // Use 'desc' and 'photo' state variables here
          });
    
          if (!res.ok) {
            throw new Error('Error occurred');
          }
    
          const donut = await res.json();
    
          router.push('/');
        } catch (error) {
          console.log(error);
        }
      };



  return (
    <section>
        <h2>Create Donut</h2>
        <div>
        <form onSubmit={handleSubmit}>
                    <input placeholder='Description...' onChange={(e) => setDesc(e.target.value)} />
                    <input  type="text"  onChange={(e) => setPhoto(e.target.value)} />
                  <button type='submit'>Create</button>
                </form>
        </div>
        <ToastContainer />

    </section>
  )
}

export default CreateDonut