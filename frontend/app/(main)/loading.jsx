import Image from 'next/image'
import { loading } from '../asset/icon'

const Loading = () => {
  return (
    <div className='fixed min-h-screen w-screen flex justify-center items-center mx-auto bg-[rgba(0,0,0,0.5)]'>
        <Image src={loading} width={36} alt='loading image' className='animate-spin' />
    </div>
  )
}

export default Loading