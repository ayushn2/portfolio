"use client"

import navLinks from "@/app/constants"
import "../app/styles.css"
import {AlignRight} from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"



const Navbar = () => {

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar lg:h-[108px] fixed top-0 mt-0 z-[100] sm:h-[9px] bg-background shadow-xl">
        <h1 className="text-6xl font-semi-bold ml-6">
          <span className="text-ring">{"<A"}</span>yush<span>{"/>"}</span>
        </h1>
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

        <div className='sm:hidden flex flex-1 justify-end mr-5 items-center'>
        <Sheet>
  <SheetTrigger className="group -m-2 flex items-center p-2">
    <AlignRight 
    aria-hidden='true' 
    className="h-8 w-8 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
    />
  </SheetTrigger>
  <SheetContent side="bottom" className="flex justify-center items-center">
  <ul className="list-none justify-center items-center flex-1">
        
        {navLinks.map((nav,index)=>(
          <li
            key={nav.id}
            className={`font-poppins
            font-normal
            text-center
            cursor-pointer
            text-white
            text-[16px] ${index === navLinks.length - 1 ? 'mb-5':'mb-10'}`}
            >
              <a href={`#${nav.id}`}>
                {nav.title}
              </a>
             
          </li>
        ))}
        </ul>
  </SheetContent>
</Sheet>

          </div>
    </nav>
  )
}

export default Navbar
