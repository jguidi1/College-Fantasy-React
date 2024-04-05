import Logo from '../images/Logo.png'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mantine/core';

export default function Nav() {
    const nav = useNavigate()

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