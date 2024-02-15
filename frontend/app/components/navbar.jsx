'use client'
import { logo } from '../asset/images'
import { activity, activityfilled, home, homefilled, search, searchfilled, userfilled, user, newthread } from '../asset/icon'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import AddPost from './addPost'
import { useState } from 'react'
import { logoutAction } from '../actions/logout'
const Navbar = () => {
    const [addpostopen, setaddpostopen] = useState(false)
    const path = usePathname()
    const navilist = [['/', home, homefilled], ['/search', search, searchfilled], ['write', newthread], ['/notification', activity, activityfilled], ['/profile/@ojus_208', user, userfilled]]
    return (
        <div className="w-full flex justify-center mb-[74px]">
            {addpostopen ? <AddPost isopen={addpostopen} setisopen={setaddpostopen} /> : ""}
            <header className='max-w-[1300px] mx-auto fixed mb-[74px] h-[74px] flex justify-between items-center bg-[rgba(16,16,16,0.85)] p-4 w-full'>
                <div className='flex-1'>
                    <Image src={logo} alt="threads logo" width={36} height={36} className='rounded-full' />
                </div>
                <ol className='flex gap-5 justify-around flex-1'>
                    {
                        navilist.map((i, index) =>
                            (i[0] == 'write') ?
                                <li key={index}>
                                    <button onClick={()=>setaddpostopen(!addpostopen)}>
                                    <Image src={i[1]} width={26} alt='add post icon' />
                                </button>
                                </li>
                                : <li key={index}>
                                    <Link href={i[0]}>
                                    {(path == i[0]) ? <Image src={i[2]} width={26} alt='navigation icons' /> : <Image src={i[1]} width={26} alt='navigation active icon' />}
                                </Link>
                                </li>
                        )
                    }
                </ol>
                <div className='flex-1 flex justify-end'>
                    <button className='rounded-[16px] bg-white py-2 px-4 flex justify-center font-bold text-[rgb(255,0,0)]' onClick={()=>logoutAction()}>
                        Logout
                    </button>
                </div>

            </header>
        </div>
    )
}

export default Navbar