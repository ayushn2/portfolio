import React from "react"
import StarBackground from "./StarBackground"
import { skills } from "@/app/constants"
import StylizedLogoMark from "./StylizedLogoMark"
import Image from "next/image"
import {AlignRight} from "lucide-react"
import Noxt from "./icons/Noxt"
import clsx from "clsx"
import { motion } from "framer-motion"
import { fadeIn } from "@/variants"
import AnimatedContent from "./AnimatedContent"


const Hero = () => {
  return (
    <div id="skills" className='flex flex-col items-center text-center w-full sm:mt-[70px] lg:pt-[600px] md:pt-[600px] relative'>
      
      <StarBackground/>
       <div className="absolute top-1/4 translate-x-[-1/2]">
      
       <motion.h2
        variants={fadeIn('up',0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.1}} 
       className="mx-auto text-gray-300 text-6xl font-bold">
        Skills
       </motion.h2>
       <AnimatedContent/>
       </div>
       
    </div>
  )
}

export default Hero
