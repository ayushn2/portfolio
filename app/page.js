"use client"

import Image from 'next/image'
import Navbar from './components/Navbar'
import About from './components/About';
import { useClient } from 'react';


export default function Home() {
  return (
   <main>
    <Navbar />
    <About/>
   </main>
  )
}
