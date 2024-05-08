import { TextInput, PasswordInput, Checkbox, Button } from '@mantine/core';
import { useForm } from "@mantine/form";
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SignIn({setLoggedIn}) {
    const [example, setExample] = useState("example")
    const nav = useNavigate()

    const form = useForm({
        initialValues: {
          email: '',
          password: '',
        },
    
        validate: {
          email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        },
      });

    const signIn = async () => {
        try {
            var response = await axios.post("http://localhost:8000/sign-in", form.values)

            if (response.status !== 200) {
                setExample("not a successful fetch")
                return
            }
    
            setExample(response.data.message)
            localStorage.setItem("token", response.data.token)
            toast.success("Logging you in")
            setTimeout(() => {
                nav("/")
                setLoggedIn(true)
            }, 2500)

        } catch {
            toast.error("Unable to log you in")
        }
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <div className='bg-slate-300 shadow-lg p-5 rounded-lg'>
                <ToastContainer />
                <h1 className='font-bold text-lg'>{example}</h1>
                <h1 className='font-bold'>Sign In</h1>
                <form onSubmit={form.onSubmit((values) => console.log(values))}>
                    <TextInput
                        withAsterisk
                        label="Email"
                        placeholder="your@email.com"
                        {...form.getInputProps('email')}
                    />
                    <PasswordInput
                        withAsterisk
                        label="Password"
                        placeholder="********"
                        {...form.getInputProps('password')}
                    />
                    <div className='grid grid-cols-12'>
                        <div className='col-span-12'>
                            <div className='flex justify-center pt-5'>
                                <Button type="submit" variant="filled" color="rgba(0, 0, 0, 1)" onClick={() => signIn()}>Sign In</Button>
                            </div>    
                        </div>
                        <div className='col-span-12'>
                            <div className='flex justify-center'>
                                <Checkbox
                                    mt="md"
                                    label="Remember me?"
                                    {...form.getInputProps('termsOfService', { type: 'checkbox' })}
                                />
                            </div>
                        </div>
                        <div className='col-span-12 text-center'>
                            <h5 className='pt-5'>New to Top 25 Showdown? <Button onClick={() => {nav("/sign-up")}}>Sign Up</Button></h5>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
