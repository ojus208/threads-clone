'use client'

import Image from 'next/image'
import { useState } from 'react'
import { hashtag, gallery, cross } from '../asset/icon'
import {user} from '@/app/asset/images'
import { addPost } from '../actions/addpostAction'
import { useFormState, useFormStatus } from 'react-dom'

const AddPost = ({isopen, setisopen}) => {

    const { pending } = useFormStatus()
    const initialState = {
        redir:false,
        message:""
      }
    
      const [state, formAction] = useFormState(addPost, initialState)
    
    const [file, setfile] = useState()
    const handleChnage = (e)=>{
        console.log("clicking")
        e.preventDefault()
        if (e.target.files && e.target.files[0]) {
            setfile(URL.createObjectURL(e.target.files[0]));
          }
    }
  return (
    <div className='fixed w-screen top-0 min-h-screen bg-[rgba(16,16,16,0.85)] flex items-center justify-center text-white'>
        <div className=' flex flex-col items-end gap-2'>
            <div>
                <button onClick={()=>setisopen(!isopen)} className='rounded-full p-2 border border-white'>
                <Image src={cross} alt='close add post button' width={26} />
                </button>
            </div>
            {(state?.message != "") ?  <div class="flex w-full items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                        <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                        </svg>
                        <span class="sr-only">Info</span>
                        <div>
                            <span class="font-medium">Invalid credential provided !</span>
                        </div>
                    </div> : "" }
            <form action={formAction} className='p-10 border min-w-[500px] border-gray-t-l rounded-[16px] bg-bg-black-1 flex gap-3'>
                <div>
                    <Image src={user} alt='user profile image' width={36} height={36} className='rounded-full'/>
                </div>
                <div className='flex flex-col gap-2 w-full'>
                    <span className='font-bold text-lg'>
                        ojus_208
                    </span>
                    <input type="text" name='text' placeholder='Start a Thread' className='bg-transparent outline-none p-2 placeholder:text-gray-t border-b border-gray-t-l font-sm' />
                    {file? <div className='flex justify-start'>
                        <div className='flex flex-col items-end gap-1 w-fit'>
                        <button type='button' className='bg-black p-1 rounded-full' onClick={()=>setfile()}>
                            <Image src={cross} alt='close btn img' width={16} />
                        </button>
                        <Image src={file} width={200} height={0} className='h-auto' />
                    </div>
                    </div> : <span className='text-sm text-gray-t-l '>select an image..</span>}
                    <div className='flex gap-2'>
                        <label htmlFor="image" className="cursor-pointer">
                            <Image src={ gallery} width={26} height={26} />
                        </label>
                        <input type="file" id='image' name='image' className='hidden' onChange={(e)=>handleChnage(e)} />
                        <button type='button'>
                            <Image src={ hashtag} width={26} height={26} />
                        </button>
                    </div>
                    <div className='w-full justify-end flex'>
                        <button className='font-bold text-black bg-white py-2 px-4 rounded-[16px] outline-none hover:text-white hover:bg-black transition-all'>
                            Post
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddPost