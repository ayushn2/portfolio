import React from 'react'
import { skills } from '../constants'
const Hero = () => {
  return (
    <div className='flex flex-col items-center text-center lg:mx-20'>
      <h2 className='flex text-center  text-4xl my-10'>GET TO KNOW ME</h2>
       <section className='flex lg:flex-row flex-col w-full m-0 justify-center lg:mx-20'>
        <div className='flex-1 flex border-dotted border-2 border-grey p-5 items-center'>
        I am an undergraduate student at the Indian Institute of Technology Jodhpur, skilled in React and Tailwind CSS with Next.js for web development and proficient in Python for machine learning. A quick learner, I am passionate about my work and known for my relentless work ethic.
        </div>
        <div className='flex-1 text-center border-dotted border-2 border-grey p-5'>
          <p className='mb-5 text-2xl'>My Skills</p>
          <ul className='text-center'>
          {skills.map((item)=>(
            <li key={item.id}>{item.title}</li>
          ))}
          </ul>
          
        </div>
      
      </section>
      
    </div>
  )
}

export default Hero
