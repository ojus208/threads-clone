import Image from 'next/image'
import {user} from '@/app/asset/images'

const Searchres = (params) => {
  return (
    <div className='flex gap-2 w-full'>
        <div className='pt-2 pr-2'>
            <Image src={user} className='rounded-full' width={36} height={36} alt='user profile image' />
        </div>
        <div className='w-full gap-3'>
            <div className='flex justify-between items-center w-full'>
                <div className='flex flex-col justify-start'>
                    <h3 className='font-bold text-lg'>
                        {params.user.username}
                    </h3>
                    <span className='text-sm text-gray-t'>
                        {params.user.name}
                    </span>
                </div>
                <div>
                    {params.user.following? <button className='py-2 px-4 rounded-lg border border-gray-t-l'>unfollow</button>: <button className='py-2 px-4 rounded-lg border border-gray-t-l'>follow</button>}
                </div>
            </div>
            <div>
                <span className='text-gray-t'>
                    {params.user.follower} follower
                </span>
            </div>
            <hr />
        </div>

    </div>
  )
}

export default Searchres