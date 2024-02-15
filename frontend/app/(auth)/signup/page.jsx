'use client'

import Image from 'next/image'
import { logo } from '@/app/asset/images'
import { user } from '@/app/asset/icon'
import { useState } from 'react';
import Link from 'next/link'

import { redirect } from 'next/navigation';
import  {signupAction}  from '@/app/actions/Signup';
import { useTransition } from 'react';
import { useFormState } from 'react-dom'

const initialState = {
    redir: false,
    message: ""
}

const Page = () => {

    const [state, formAction] = useFormState(signupAction, initialState)
    // const [isPending, startTransition] = useTransition()
    const [file, setFile] = useState(user);
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    if (state.redir) {
        redirect('/verify')
    }
    else {
        return (
            <div className=' max-w-[500px] w-full z-10 flex flex-col gap-5'>
                <div className='w-full text-center'>
                    <span className='font-bold text-lg '>
                        Signup On Threads
                    </span>
                </div>
                <form className='w-full flex flex-col gap-2 bg-bg-black-1 rounded-[16px] border border-gray-t-l py-4 px-3' action={formAction }>
                    {(state.message != "") ?  <div class="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                        <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                        </svg>
                        <span class="sr-only">Info</span>
                        <div>
                            <span class="font-medium">Error while submitting</span> please check data.
                        </div>
                    </div> : "" }
                    <div className="w-full">
                        <label htmlFor="username" className='font-bold'>Username</label>
                        <div className='flex gap-1 items-center justify-between w-full '>
                            <div className='flex items-center justify-between w-full'>
                                <Image src={logo} width={26} height={26} className='rounded-full' />
                                <input type="text" name='username' id='username' placeholder='username' className='py-4 px-3 w-full placeholder:text-gray-t bg-[rgba(0,0,0,0)]  outline-none border-b border-gray-t-l' />
                            </div>
                            <div>
                                <label htmlFor="profileimg">
                                    <div className=' rounded-full border border-gray-t p-3'>
                                        <Image src={file} width={48} height={48} className='rounded-full' />
                                    </div>
                                </label>
                                <input type="file" name="profileimg" id="profileimg" className='hidden' onChange={handleChange} />
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex gap-2'>
                        <div className='w-full' >
                            <label htmlFor="fname" className='font-bold'>First Name</label>
                            <input type="text" name='fname' id='fname' placeholder='First Name' className='py-4 px-3 w-full placeholder:text-gray-t bg-[rgba(0,0,0,0)]  outline-none border-b border-gray-t-l' />
                        </div>
                        <div className='w-full'>
                            <label htmlFor="lname" className='font-bold'>Last Name</label>
                            <input type="text" name='lname' id='lanem' placeholder='Last Name' className='py-4 px-3 w-full placeholder:text-gray-t bg-[rgba(0,0,0,0)]  outline-none border-b border-gray-t-l' />
                        </div>
                    </div>
                    <div className='w-full '>
                        <label htmlFor="email" className='font-bold'>Email</label>
                        <input type="email" name='email' id='email' placeholder='example@example.com' className='py-4 px-3 w-full placeholder:text-gray-t bg-[rgba(0,0,0,0)]  outline-none border-b border-gray-t-l' />
                    </div>
                    <div className='w-full '>
                        <label htmlFor="password" className='font-bold'>Bio</label>
                        <input type="password" name='password' id='password' placeholder='Enter password' className='py-4 px-3 w-full placeholder:text-gray-t bg-[rgba(0,0,0,0)]  outline-none border-b border-gray-t-l' />
                    </div>

                    <div className='w-full'>
                        <button className='rounded-[16px] bg-white py-3 flex justify-center w-full font-bold text-black'>
                            {/* {isPending ? "wait..." :"Signup"} */}
                            Signup
                        </button>
                    </div>
                </form>
                <div className='flex w-full items-center '>
                    <hr className='bg-gray-t-l text-gray-t-l w-full border-none h-[1px]' />
                    <span className='text-gray-t-l mx-2'>or</span>
                    <hr className='bg-gray-t-l text-gray-t-l w-full border-none h-[1px]' />
                </div>
                <div className='w-full'>
                    <Link href="/login" className='rounded-[16px] bg-white py-3 flex justify-center w-full font-bold text-black'>
                        Login
                    </Link>
                </div>
            </div>)
    }
}

export default Page