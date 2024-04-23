"use client"
import { useState } from 'react';
import { motion } from 'framer-motion'
import ContactForm from './ContactForm';

const Contact = () => {

 

  return (
    <main id='contact' className='flex flex-col justify-center items-center'>
        <motion.h2
        className='text-6xl font-bold text-gray-300 my-[120px]'
        >Wanna get in touch?</motion.h2>
       <ContactForm/> 
    </main>
  )
}

export default Contact