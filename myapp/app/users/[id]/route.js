"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { BsFillPencilFill } from 'react-icons/bs'
import { AiFillDelete, AiFillLike, AiOutlineLike } from 'react-icons/ai'
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useRouter } from 'next/navigation'


const UserPage = (ctx) => {
    const [userDetails, setUserDetails] = useState("")
    
    const { data: session } = useSession()
    const router = useRouter()

    useEffect(() => {
        async function fetchUser() {
            const res = await fetch(`http://localhost:3000/api/user/${ctx.params.id}`, { cache: 'no-store' })
            const user = await res.json()

            setUserDetails(user)
        }
        session && fetchUser()
    }, [session])
  return (
    <section>
        <div className=''>
            <p>{userDetails.username}</p>
            <p>{userDetails.email}</p>

        </div>
    </section>
  )
}

export default UserPage
