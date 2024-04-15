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
import Link from "next/link"



const Navbar = () => {

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar lg:h-[108px] fixed top-0 mt-0 z-[100] sm:h-[9px] bg-background shadow-xl">
        <h1 className="text-6xl font-semi-bold ml-6">
          <span className="text-ring">{"<A"}</span>yush<span>{"/>"}</span>
        </h1>

   
          <ul className="list-none sm:flex hidden justify-center items-center flex-1">
          
          {navLinks.map((nav,index)=>(
            <li
              key={nav.id}
              className={`font-poppins
              font-normal
              cursor-pointer
              text-white
              text-[16px] ${index === navLinks.length - 1 ? 'mr-5':'mr-10'}
              hover:text-ring transition-all`}
              >
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              
            </li>
          ))}
          </ul>
         
          <ul className="lg:flex hidden flex-[0.1] justify-around mr-8">
            <li className="cursor-pointer hover:bg-black">
              <Link href={"https://www.linkedin.com/in/ayush-nainwal-070ba9255/"} target="_blank" rel="noopener noreferrer" passHref>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </Link>
           
            </li>
            <li className="cursor-pointer">
              <Link href={"https://github.com/ayushn2"} target="_blank" rel="noopener noreferrer" passHref>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </Link>
           
            </li>
          </ul>
        
        


        <div className='sm:hidden flex flex-1 justify-end mr-5 items-center'>
        <Sheet>
          <SheetTrigger className="group -m-2 flex items-center p-2">
            <AlignRight 
            aria-hidden='true' 
            className="h-8 w-8 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
            />
           </SheetTrigger>
          <SheetContent side="bottom" className="flex flex-col justify-center items-center">
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
                <ul className="flex justify-around w-full">
                  <li className="cursor-pointer hover:bg-black">
                    <Link href={"https://www.linkedin.com/in/ayush-nainwal-070ba9255/"} target="_blank" rel="noopener noreferrer" passHref>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                    </Link>
                
                  </li>
              <li className="cursor-pointer">
                <Link href={"https://github.com/ayushn2"} target="_blank" rel="noopener noreferrer" passHref>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                </Link>
            
              </li>
          </ul>
          </SheetContent>
</Sheet>

          </div>
    </nav>
  )
}

export default Navbar
