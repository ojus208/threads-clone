import React from 'react'
import Userimgcp from './userimgcp'
import { user, pimg } from '../asset/images'
import Image from 'next/image'
import { activity, rethread } from '../asset/icon'

const Post = () => {
  return (
    <div className='flex gap-2 w-full my-3'>
      <div className='flex flex-col items-center'>
        <div className='pt-2'>
          <Userimgcp src={user} />
        </div>
        <div className='w-[1px] bg-gray-t-l h-full flex flex-1'></div>
        <div className='flex justify-between items-center'>
          <Image src={user} width={20} height={20} className='rounded-full' />
          <Image src={user} width={20} height={20} className='rounded-full' />
        </div>
      </div>
      <div className='flex flex-col w-full'>
        <div className='flex justify-between items-start w-full'>
          <div>
            <h1 className='font-bold'>ojus_208</h1>
            <p className='text-sm my-2'>
              GT3 ❤️
            </p>
          </div>
          <span className='text-gray-t text-sm'>
            12h
          </span>
        </div>
        <div>
          <Image src={pimg} width={300} className='rounded-[16px]' />
        </div>
        <div className='flex gap-3 items-start my-3'>
          <button>
          <Image src={activity} width={26} />
          </button>
          <button>
            <Image src={rethread} width={26} />
          </button>
        </div>
        <div className='flex gap-3 text-sm text-gray-t'>
          <span>
            22 thred's
          </span>
          <span>
            120 like's
          </span>
        </div>

      </div>
    </div>
  )
}

export default Post