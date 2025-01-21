import React, { useState } from 'react'
import {assets} from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {

    const  [visible, setVisible] = useState(false)

  return (
    <nav className='flex items-center justify-between py-5 font-medium'>
        <img src={assets.logo} alt="" className='w-36'/>

        <ul className='hidden sm:flex text-sm gap-5 text-gray-700 '>
            <NavLink to={"/"} className={"flex flex-col items-center gap-1"}>
                <p>HOME</p>
                <hr className='w-2/4 h-[1.5px] border-none bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to={"/collection"} className={"flex flex-col items-center gap-1"}>
                <p>COLLECTION</p>
                <hr className='w-2/4 h-[1.5px] border-none bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to={"/about"} className={"flex flex-col items-center gap-1"}>
                <p>ABOUT</p>
                <hr className='w-2/4 h-[1.5px] border-none bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to={"/contact"} className={"flex flex-col items-center gap-1"}>
                <p>CONTACT</p>
                <hr className='w-2/4 h-[1.5px] border-none bg-gray-700 hidden'/>
            </NavLink>
        </ul>

        <div className='flex items-center gap-6'>
            <img src={assets.search_icon} alt="" className="w-5 cursor-pointer" />

            <div className="group relative">
                <img src={assets.profile_icon} alt="" className='w-5 cursor-pointer'/>

                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                    <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded-md'>
                        <p className='cursor-pointer hover:text-black'>My Profile</p>
                        <p className='cursor-pointer hover:text-black'>Orders</p>
                        <p className='cursor-pointer hover:text-black'>Log Out</p>
                    </div>
                </div>
            </div>

            <Link to={"/cart"} className='relative'>
                <img src={assets.cart_icon} alt="" className="w-5 min-w-5" />
                <p className='absolute w-4 right-[-5px] bottom-[-5px] bg-black text-white text-[10px] text-center leading-4 aspect-square rounded-full '>10</p>
            </Link>

            <img onClick={() => setVisible(true)} src={assets.menu_icon} alt="menu_icon" className='w-5 cursor-pointer sm:hidden' />

        </div>

        {/* side bar for small device */}
        <div className={` absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all  ${visible ? 'w-full' : 'w-0' }`}>
            <div className='flex flex-col text-gray-600'>
                <div onClick={() => setVisible(false)} className='flex items-center gap-3 p-3 cursor-pointer '>
                    <img src={assets.dropdown_icon} alt="" className='w-2 rotate-180' />
                    <p>BACK</p>
                </div>
                <Link onClick={() => setVisible(false)} to={"/"} className='py-2 pl-6 border '>HOME</Link>
                <Link onClick={() => setVisible(false)} to={"/collection"} className='py-2 pl-6 border '>COLLECTION</Link>
                <Link onClick={() => setVisible(false)} to={"/about"} className='py-2 pl-6 border '>ABOUT</Link>
                <Link onClick={() => setVisible(false)} to={"/contact"} className='py-2 pl-6 border '>CONTACT</Link>
            </div> 
        </div>


    </nav>
  )
}

export default Navbar
