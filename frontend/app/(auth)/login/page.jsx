'use client'

import Link from 'next/link'
import { loginAction } from '@/app/actions/login'
import { useFormState } from 'react-dom'
import { useFormStatus } from 'react-dom'
import { redirect } from 'next/navigation'

const Page = () => {

  const { pending } = useFormStatus()

  const initialState = {
    redir:false,
    message:""
  }

  const [state, formAction] = useFormState(loginAction, initialState)

  if(state?.redir){
    redirect('/')
  }
  return (
    <div className='max-w-[350px] flex flex-col gap-5 items-center justify-center z-10 w-full'>
      
      <div className='w-full text-center'>
        <span className='font-bold text-lg '>
          Login On Threads
        </span>
      </div>
      <form action={formAction} className='w-full flex flex-col gap-5' >
      {(state?.message != "") ?  <div class="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                        <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                        </svg>
                        <span class="sr-only">Info</span>
                        <div>
                            <span class="font-medium">Invalid credential provided !</span>
                        </div>
                    </div> : "" }
        <div className='w-full'>
          <input type="text" name='email' id='email' placeholder='Enter Your Email' className='py-4 px-3 rounded-[16px] w-full placeholder:text-gray-t bg-bg-black-1 outline-none' />
        </div>
        <div className='w-full'>
          <input type="password" name='password' id='password' placeholder='Password' className='py-4 px-3 rounded-[16px] w-full placeholder:text-gray-t bg-bg-black-1 outline-none' />
        </div>
        <div className='w-full'>
          <button type='submit' className='rounded-[16px] bg-white py-3 flex justify-center w-full font-bold text-black'>
            {pending ? "wait...": "Login"}
          </button>
        </div>
      </form>
      <div className='w-full text-center cursor-pointer'>
        <span className='text-gray-t-l '>
          Forget Password ?
        </span>
      </div>
      <div className='flex w-full items-center '>
        <hr className='bg-gray-t-l text-gray-t-l w-full border-none h-[1px]' />
        <span className='text-gray-t-l mx-2'>or</span>
        <hr className='bg-gray-t-l text-gray-t-l w-full border-none h-[1px]' />
      </div>
      <div className='w-full'>
          <Link href="/signup" className='rounded-[16px] bg-white py-3 flex justify-center w-full font-bold text-black'>
            Signup
          </Link>
        </div>
    </div>
  )
}

export default Page