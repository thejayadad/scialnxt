'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import {signIn, signOut, useSession} from 'next-auth/react'


const Navbar = () => {
    const {data: session} = useSession()

  return (
    <header>
        <div>
            <Link href={'/'}>Logo</Link>
        </div>
        <nav>
            <ul>
                {
                       session?.user
                       ? (
                        <>
                        <Link href={'/create-donut'}>Create</Link>
                        <button onClick={() => {signOut()}}>Logout</button>

                        </>


                        )
                        : (
                          <>
                 <button onClick={() => {signIn()}}>Log in</button>
                  <Link href='/auth'>Register</Link>


                        </>
                    )
                }
                    
            </ul>
        </nav>

    </header>
  )
}

export default Navbar