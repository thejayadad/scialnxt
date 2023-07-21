import React from 'react'
import UserCard from '@/components/UserCard'


export async function fetchUsers(){
    const res = await fetch('http://localhost:3000/api/users', {cache: 'no-store'})
  
    return res.json()
  }
  

  export default async function Users() {
    const users = await fetchUsers()
  return (
    <section>
        <h2>All Users</h2>
        <div>
        {users?.length > 0 
       ? users.map((user) => (
        <UserCard key={user._id} user={user}/>
      )) : <h3 >No Users</h3>}
        </div>
    </section>
  )
}

