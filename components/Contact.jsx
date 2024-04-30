"use client"
import { useState } from 'react';
import { motion } from 'framer-motion'
import ContactForm from './ContactForm';
import AvatarContact from './Avatar_Contact';
import { fadeIn } from '@/variants';

const Contact = () => {

 

  return (
    <main id='contact' className='flex flex-col justify-center items-center gradient'>
        <motion.h2
         variants={fadeIn('up',0.3)}
         initial='hidden'
         whileInView={'show'}
         viewport={{once:false,amount:0.6}} 
        className='lg:text-6xl px-2 text-center font-bold text-gray-300 mt-[460px] text-5xl sm:mb-[22px] lg:mb-[82px]'
        >
          Wanna get in touch?
        </motion.h2>
        <div
          
          className='flex flex-row w-full overflow-hidden'>
          <motion.div 
          variants={fadeIn('right',0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false,amount:0.6}} 
          className='flex-1 hidden lg:flex justify-center items-center'>
                <AvatarContact/>
          </motion.div>
          <motion.div 
          variants={fadeIn('left',0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false,amount:0.6}} 
          
          className='flex-1 w-full flex justify-center items-center'>
            <ContactForm/> 
          </motion.div>
        </div>

       
    </main>
  )
}

export default Contact