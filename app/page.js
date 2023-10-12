"use client"

import Image from 'next/image'
import Navbar from './components/Navbar'
import About from './components/About';
import { useClient } from 'react';
import Hero from './components/Hero';


export default function Home() {
  return (
  <div>
    <Navbar/>
    <div className='lg:h-[1px] h-[108px]' />
    <About/>
    <Hero/>
  </div>
  
  )
}
