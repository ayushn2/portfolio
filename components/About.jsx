import React from 'react'
import Image from 'next/image'
import {useRef,useState} from "react"
import "../app/styles.css"
import {Canvas} from "@react-three/fiber"
import {OrbitControls,useGLTF} from "@react-three/drei"
import Avatar from "./Avatar"
import {motion} from "framer-motion"
import { fadeIn } from '@/variants'


const About = () => {
  const ref = useRef()
  return (
    <div id="about" className='lg:mx-2 lg:my-20 sm:m-0 flex lg:flex-row flex-col lg:items-center items-center overflow-hidden'>
      <motion.div 
        variants={fadeIn('right',0.4)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:true,amount:0.7}} 
        className='flex-[1.5]  items-center justify-center'>
        <h2 className={`font-bold text-4xl lg:text-6xl md:text-6xl m-10 lg:mx-20`}>Hey It&apos;s Ayush <br/> I&apos;m a  <br/>
        <span className='text-ring'>Full Stack Developer</span>
        </h2>
        <p className=' lg:mx-20 mx-10 text-[12px] lg:text-xl' style={{color:"grey"}}>
        Crafting user experiences that seamlessly blend form and function is my passion as a Software Developer.
        </p>
      <div className="button-borders lg:mx-20 mx-10 my-10">
      <a href='#work'>
          <button className="primary-button bg-primary-foreground">
            View My Work
          </button>
          </a>
          
      </div>
      </motion.div>
      <motion.div
        variants={fadeIn('left',0.4)}
        initial="hidden"
        whileInView={'show'}
        viewport={{once:true,amount:0.7}} 
        className={`flex-[1] items-center justify-center p-0 m-0` }>
        <Avatar/>
      </motion.div>
     
      
    </div>
  )
}

export default About
