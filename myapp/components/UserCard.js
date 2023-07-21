'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { AiFillLike, AiOutlineLike } from 'react-icons/ai'

const UserCard = ({user: {username, email, followers, following, posts, profilePic, _id}}) => {
    const { data: session } = useSession()

    return (
    <div key={_id}>
        <Link href={`/user/${_id}`}>
            <p>{username}</p>
            <h2>{email}</h2>
        </Link>
    </div>
  )
}

export default UserCard