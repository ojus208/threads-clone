import Searchres from '@/app/components/searchres'
import React from 'react'
import { search } from '@/app/asset/icon'
import Image from 'next/image'

const Page = () => {
  var user = {"profile_img": "", "username":"Prosche_club._." , "name":"offical prosche club", "following":false, 'follower':"197k"}
  return (
    <div>
      <div className='my-4 p-2 rounded-xl border border-gray-t-l flex gap-2 items-center'>
        <Image src={search} alt='search icon' width={16}  />
        <input type="text" placeholder='Search..'  className='placeholder:text-gray-t bg-transparent outline-none py-1 w-full'/>
      </div>
      <Searchres user={user}  />
    </div>
  )
}

export default Page