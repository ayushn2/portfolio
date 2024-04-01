import React from "react"
import StarBackground from "./StarBackground"
import { skills } from "@/app/constants"
import StylizedLogoMark from "./StylizedLogoMark"
import Image from "next/image"
import {AlignRight} from "lucide-react"
import Noxt from "./icons/Noxt"
import clsx from "clsx"
import AnimatedContent from "./AnimatedContent"


const Hero = () => {
  return (
    <div className='flex flex-col items-center text-center w-full sm:mt-[40px] lg:pt-[600px] md:pt-[600px] relative'>
      
      <StarBackground/>
       <div className="absolute top-1/4 translate-x-[-1/2]">
      
       <h2 className="mx-auto text-gray-300 text-6xl font-bold">
        Skills
       </h2>
       <AnimatedContent/>
       </div>
       
    </div>
  )
}

export default Hero
