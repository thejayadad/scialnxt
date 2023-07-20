'use client'

import React, { useState } from 'react'
import { signIn } from 'next-auth/react'
import { ToastContainer, toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

import 'react-toastify/dist/ReactToastify.css'


const Auth = () => {
    const [isRegister, setIsRegister] = useState(false)
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()

    const handleSubmit = async(e) => {
        e.preventDefault()
    
    
        try{
    
            if(isRegister){
                if(username === '' || email === '' || password === '') {
                   toast.error("Fill all fields")
                    return
                }
                
                const res = await fetch('http://localhost:3000/api/register', {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    method: 'POST',
                    body: JSON.stringify({username, email, password})
                })
                console.log(await res.json())
                if(res.ok){
                    toast.success("Successfully registered the user")
                    setTimeout(() => {
                        signIn()
                    }, 1500)
                    return        
            } else {
                if (password === '' || email === '') {
                    toast.error("Fill all fields!")
                    return
                }
        
                if (password.length < 6) {
                    toast.error("Password must be at least 6 characters long")
                    return
                }
        
                try {
                    const res = await signIn('credentials', { email, password, redirect: false })
        
                    if (res?.error == null) {
                        router.push("/")
                    } else {
                        toast.error("Error occured while logging")
                    }
                } catch (error) {
                    console.log(error)
                }
               
                }
                
           }
        } catch(error){
            console.error(error)
        }
      }

  return (
    <section>
        <h2>Hi There</h2>
        <div>
        <form onSubmit={handleSubmit}>
                {isRegister && <input type="text" placeholder='Type username...' onChange={(e) =>setUsername(e.target.value)}/>}
                <input type="email" placeholder='Type email...' onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder='Type password...' onChange={(e) => setPassword(e.target.value)}/>
                <button  type="submit">
                    {isRegister ? 'Register' : 'Login'}
                </button>
                {
                 isRegister 
                   ? <p onClick={() => setIsRegister(prev => !prev)}>Already have an account? Login</p> 
                   : <p onClick={() => setIsRegister(prev => !prev)}>Don't have an account? Register</p>
                }
            </form>

        <ToastContainer />

        </div>
    </section>
  )
}

export default Auth