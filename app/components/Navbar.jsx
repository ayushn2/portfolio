import "../styles.css"
import navLinks  from "../constants"
import close from "../assets/close.svg";
import menu from "../assets/menu.svg"
import { useState } from "react"
import Image from 'next/image'


const Navbar = () => {
    const [toggle,setToggle]= useState(false)
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar lg:h-[108px] fixed z-[100] sm:h-[9px]">
        <h1 className="text-6xl font-semi-bold">Pride</h1>
        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        
        {navLinks.map((nav,index)=>(
          <li
            key={nav.id}
            className={`font-poppins
            font-normal
            cursor-pointer
            text-white
            text-[16px] ${index === navLinks.length - 1 ? 'mr-5':'mr-10'}`}
            >
              <a href={`#${nav.id}`}>
                {nav.title}
              </a>
             
          </li>
        ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <Image 
          src={toggle?close:menu}
          alt="menu"
          className='w-[28px] h-[28px]
          object-content mr-5'
          onClick={()=>setToggle((prev)=>!prev)} />

<div className={`${
  toggle ? "flex" : "hidden"
} p-6 bg-black-gradient absolute top-20 w-full rounded-xl sidebar mr-0`}
>
            <ul className='list-none flex flex-col justify-center items-center flex-1 h-full gap-[70px] glass'>
                  {navLinks.map((nav,index)=>(
                    <li
                        key={nav.id}
                        className={`font-poppins
                        text-[50px]
                        font-semi-bold
                        cursor-pointer
                        ${index === navLinks.length - 1 ? 'mb-0':'mb-4'}`}
                        >
                        <a href={`#${nav.id}`}>
                          {nav.title}
                        </a>
                    </li>
             ))}
            </ul>
          </div>
          </div>
    </nav>
  )
}

export default Navbar
