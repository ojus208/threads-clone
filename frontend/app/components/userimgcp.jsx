import Image from 'next/image'

const Userimgcp = (params) => {
  return (
        <Image src={params.src} width={36} height={36} className='rounded-full border border-gray-t-l' />
  )
}

export default Userimgcp