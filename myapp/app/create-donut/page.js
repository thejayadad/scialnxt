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
        e.preventDefault()

        if(!photo || !desc){
            toast.error("All fields are required")
            return
        }

        try {
          
          const res = await fetch(`http://localhost:3000/api/donut`, {
            headers: {
               'Content-Type': 'application/json',
               'Authorization': `Bearer ${session?.user?.accessToken}` 
            },
            method: 'POST',
            body: JSON.stringify({desc,imageUrl})
          })

          if(!res.ok){
            throw new Error("Error occured")
          }

          const blog = await res.json()

          router.push(`/blog/${blog?._id}`)
        } catch (error) {
            console.log(error)
        }
    }


  return (
    <section>
        <h2>Create Donut</h2>
        <div>
        <form onSubmit={handleSubmit}>
                    <textarea placeholder='Description...' onChange={(e) => setDesc(e.target.value)} />
                    <label htmlFor='image'>
                        Upload Image <AiOutlineFileImage />
                    </label>
                    <input id='image' type="file" style={{ display: 'none' }} onChange={(e) => setPhoto(e.target.files[0])} />
                  <button>Create</button>
                </form>
        </div>
        <ToastContainer />

    </section>
  )
}

export default CreateDonut