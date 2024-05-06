import { TextInput, PasswordInput, Checkbox, Button, Group, Box } from '@mantine/core';
import { useForm } from "@mantine/form";
import { useNavigate } from 'react-router-dom';


export default function SignUp() {
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


    return (
        <div className='grid grid-cols-12'>
            <div className='col-span-3'></div>
            <div className='col-span-6'>
            <div className='flex items-center justify-center'>
            <div className='bg-slate-300 shadow-lg p-5 rounded-lg'>
            <h1 className='font-bold'>Sign Up</h1>

                <form onSubmit={form.onSubmit((values) => console.log(values))}>
                <TextInput
                        withAsterisk
                        label="First Name"
                        placeholder="your@email.com"
                        {...form.getInputProps('email')}
                />
                       <TextInput
                    withAsterisk
                    label="Last Name"
                    placeholder="your@email.com"
                    {...form.getInputProps('email')}
                    />
                       <TextInput
                    withAsterisk
                    label="Email"
                    placeholder="your@email.com"
                    {...form.getInputProps('email')}
                    />
                <PasswordInput
                    withAsterisk
                    label="Confirm Password"
                    placeholder="********"
                    {...form.getInputProps('password')}
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
                            <Button type="submit" variant="filled" color="rgba(0, 0, 0, 1)">Create Account</Button>
                        </div>    
                    </div>
                    <div className='col-span-12'>
                        <div className='flex justify-center'>
        
                        </div>
                    </div>
                    <div className='col-span-12 text-center'>
                     <h5 className='pt-5'>Already have an account?<Button onClick={() => {nav("/sign-in")}}>Sign In</Button></h5>
                    </div>
                </div>
              
            </form>
                </div>
            
        </div>


            </div>
            <div className='col-span-3'></div>
           

        </div>
       
    )
}