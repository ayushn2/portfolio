import React from 'react'
import "../styles.css"
import test from "../assets/test.png"
import Image from 'next/image'
import { styles } from '../style'
const About = () => {
  return (
    <div className='lg:mx-20 lg:my-20 sm:m-10 flex lg:flex-row flex-col h-[500px]lg:items-start items-center'>
      <div className='flex-1.2 items-center justify-center'>
      <h2 className={`${styles.grad_background} font-bold text-4xl lg:text-6xl md:text-6xl m-10 lg:m-20`}>Hey It's Ayush <br/>I'm a<span style={{color:"#98B22E"}}>Frontend Developer</span></h2>
      </div>
      <div className='flex-1 items-center justify-center'>
      </div>
      
    </div>
  )
}

export default About
