import React from 'react'
import Navbar from '../components/navbar'

const Layout = ({ children }) => {
  return (

    <div className='bg-[rgba(16,16,16,1)] min-h-screen text-white'>
      <Navbar />
      <div className='max-w-[600px] mx-auto'>
        {children}
      </div>
    </div>

  )
}

export default Layout