'use client'

import Image from 'next/image'
import { logo, user } from '@/app/asset/images'
import { useState } from 'react'

const Page = ({pageprops}) => {
  const [pshow, setpshow] = useState('Threads')
    console.log(pageprops)
  return (
    <div className='flex flex-col gap-5'>
        <div className='flex w-full justify-between items-center'>
          <div className='flex flex-col items-start'>
            <h1 className='text-3xl font-bold'>
              Ojus Soni
            </h1>
            <span className='flex items-center justify-start'>
              <Image src={logo} width={19} className='rounded-full' />
              ojus_208
            </span>
          </div>
          <div>
            <Image src={user} width={100} className='rounded-full' />
          </div>
        </div>
        <div>
        <p>
          still finding a bug....
        </p>
        </div>
        <div className='flex items-center justify-start gap-3'>
        <div className='flex justify-between items-center'>
          <Image src={user} width={20} height={20} className='rounded-full' />
          <Image src={user} width={20} height={20} className='rounded-full' />
        </div>
        <div>
          <span className='text-gray-t text-sm'>
            19 follower
          </span>
        </div>
        </div>
        <div className='w-full'>
          <button className='w-full border border-gray-t-l font-bold text-center py-2 rounded-lg'>
            Edit Profile
          </button>
        </div>


        <div className='w-full'>
          <div className='w-full flex'>

                <button className={`font-bold py-3 text-center w-full border-b  ${ pshow=='Threads'? " text-white border-white":"text-gray-t border-gray-t-l" }`} onClick={()=>setpshow('Threads')} >
                    Threads
                </button>
          
                <button className={`font-bold py-3 text-center w-full border-b  ${ pshow=='Follower'? " text-white border-white":"text-gray-t border-gray-t-l"}`} onClick={()=>setpshow('Follower')}>
                    Follower
                </button>

          </div>
          <div className='w-full h-full text-center my-5'>
            <span className='text-gray-t'>
              No Threads yet
            </span>
          </div>
        </div>
    </div>
  )
}

export default Page