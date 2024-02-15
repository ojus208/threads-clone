import Image from 'next/image'
import {bgimg} from '@/app/asset/images'


const Layout = ({children}) => {
  return (
    <div className='flex items-center justify-center bg-[rgb(16,16,16)] min-h-screen text-white'>
        <div className='absolute top-0 z-0'>
    <Image src={bgimg} alt='backgroung image thread clone' />
        </div>
        {children}
    </div>
  )
}

export default Layout