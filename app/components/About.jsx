import React from 'react'
import "../styles.css"
import Image from 'next/image'
import { styles } from '../style'
import {useRef,useState} from "react"
import {Canvas} from "@react-three/fiber"
import {OrbitControls,useGLTF} from "@react-three/drei"
import Avatar from "./Avatar"

const About = () => {
  const ref = useRef()
  return (
    <div id="about" className='lg:mx-2 lg:my-20 sm:m-0 flex lg:flex-row flex-col lg:items-center items-center'>
      <div className='flex-[1.5]  items-center justify-center'>
      <h2 className={`${styles.grad_background} font-bold text-4xl lg:text-6xl md:text-6xl m-10 lg:mx-20`}>Hey It's Ayush <br/> I'm a<span style={{color:"#98B22E"}}>Frontend Developer</span></h2>
      <p className=' lg:mx-20 mx-10 text-[12px] lg:text-xl' style={{color:"grey"}}>
      Crafting user experiences that seamlessly blend form and function is my passion as a frontend developer.
      </p>
      <div className="button-borders lg:mx-20 mx-10 my-10">
          <button class="primary-button">
            View My Work
          </button>
      </div>
      </div>
      <div className={`flex-[1] items-center justify-center p-0 m-0` }>
        <Avatar/>
      </div>
     
      
    </div>
  )
}

export default About
