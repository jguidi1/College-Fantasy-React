import Logo from '../images/Logo.png'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mantine/core';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Nav() {
    const nav = useNavigate()
    const [loggedIn, setLoggedIn] = useState(false)
    const [user, setUser] = useState(null)

    useEffect(() => {
        verifyToken()


        const verifyToken = async () => {
            var token = localStorage.getItem("token")

            if (!token) {
                return
            }

            var response = await axios.get("http://localhost:8000/verify?token="+token)

            if (response.code != 200) {
                setLoggedIn(false)
                return
            }

            console.log(response.data)
        }


    }, [])

    return (<>
        <div className='grid grid-cols-12 p-5'>
        
                <div className='col-span-6 md:col-span-3 cursor-pointer' onClick={() => {nav("/")} }>
                    <img src={Logo} alt="Logo" className='' />
                </div>
   

            <div className='col-span-6 md:col-span-9'>
                <div className='flex gap-x-5 h-full justify-end'>
                    <Button variant="filled" color="rgba(0, 0, 0, 1)" onClick={() => nav("/sign-in")}>Sign In</Button>
                    <Button variant="filled" color="rgba(0, 0, 0, 1)" onClick={() => nav("/sign-up")}>Sign Up</Button>
                </div>
            </div>
        </div>
     

            </>)
}