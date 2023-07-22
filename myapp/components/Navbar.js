'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import {signIn, signOut, useSession} from 'next-auth/react'


const Navbar = () => {
    const {data: session} = useSession()

  return (
    <header className='navbar bg-base-100'>
    <div className='flex-1'>
      <Link href={'/'} className='btn btn-ghost normal-case text-xl'>Donut Spot</Link>
    </div>
    <div className='flex-none'>
      {session ? (
        // Display the profile link when user is logged in
        <Link href={`/api/user/${session.id}`}>
          <div className='btn btn-ghost btn-circle avatar'>
            <div className='w-10 rounded-full'>
              <img src={session.user.image} alt='User Avatar' />
            </div>
          </div>
        </Link>
      ) : (
        // Show the login button when user is not logged in
        <button onClick={() => signIn()}>Log in</button>
      )}
    </div>
  </header>
  )
}

export default Navbar