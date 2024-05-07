import Logo from '../images/Logo.png'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mantine/core';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Nav({loggedIn, setLoggedIn}) {
    const nav = useNavigate()
    const [user, setUser] = useState(null)

    useEffect(() => {
        const verifyToken = async () => {
            var token = localStorage.getItem("token")

            if (!token) {
                setLoggedIn(false)
                return
            }

            try {
                var response = await axios.get("http://localhost:8000/verify?token=" + token)
                console.log(response.status)

                if (response.status !== 200) {
                    setLoggedIn(false)
                    return
                }
          
                setLoggedIn(true)
                setUser(response.data.user_data)
                return
            } catch {
                setLoggedIn(false)
            }
            
            setLoggedIn(true)
        }

         verifyToken()
    }, [])

    

    function logout() {
        localStorage.removeItem("token")
        setLoggedIn(false)
        nav("/")
    }

    useEffect(() => {console.log(loggedIn)})

    return (<>
        <div className='grid grid-cols-12 p-5'>
        
                <div className='col-span-6 md:col-span-3 cursor-pointer' onClick={() => {nav("/")} }>
                    <img src={Logo} alt="Logo" className='' />
                </div>
   
            {
                loggedIn ? 
                <>
                <div className='col-span-6 md:col-span-9'>
                <div className='flex gap-x-5 h-full justify-end'>
                    <Button variant="filled" color="rgba(0, 0, 0, 1)" onClick={() => nav("/scoring")}>Scoring</Button>
                    <Button variant="filled" color="rgba(0, 0, 0, 1)" onClick={() => nav("/select-team")}>My Teams</Button>
                    <Button variant="filled" color="rgba(0, 0, 0, 1)" onClick={() => {logout()}}>Log Out</Button>
                </div>
                </div>
                </>
                :
                <>
                <div className='col-span-6 md:col-span-9'>
                <div className='flex gap-x-5 h-full justify-end'>
                    <Button variant="filled" color="rgba(0, 0, 0, 1)" onClick={() => nav("/sign-in")}>Sign In</Button>
                    <Button variant="filled" color="rgba(0, 0, 0, 1)" onClick={() => nav("/sign-up")}>Sign Up</Button>
                </div>
                </div>
            </>
            }
         
        </div>
     

            </>)
}