import React from 'react'
import Image  from 'next/image'
import { projects } from '@/app/constants'
import Link from 'next/link';
import link from "lucide-react"
import { CardWithForm } from './Card';
import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';

export const projectSS = [
    "/project_assets/scrollVoyage.png",
     "/project_assets/zingle.png",
     "/project_assets/artistPage.png",
     "/project_assets/prometeo.png",
 ]

 export const projectLinks = [
    "https://scroll-voyage.vercel.app/",
    "https://zingle.vercel.app/",
    "https://mia-reynolds-xi.vercel.app/",
    "https://prometeo.in",
 ]

 export const projectGitHub=[
    "https://github.com/ayushn2/ScrollVoyage",
    "https://github.com/ayushn2/zingle",
    "https://github.com/ayushn2/music_app",
   
    "/",
 ]

const Projects = () => {



  return (
    <section id='work' className='mt-[1500px] lg:flex flex-col justify-center items-center text-center w-full lg:mt-[200px] my_work'>
        <motion.h2
        variants={fadeIn('up',0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.6}} 
        className='text-6xl font-bold text-gray-300 my-[42px]'>Projects</motion.h2>
        {projects.map((item)=>(
            <div key={item.id} className='flex justify-center items-center'>
                <motion.div
                variants={fadeIn('up',0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once:false,amount:0.6}} 
                className='mb-[48px]'>
                    <CardWithForm item={item}/>
                </motion.div>
            
        
            <motion.div
            variants={fadeIn('up',0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false,amount:0.6}}
            className='hidden lg:flex flex-col lg:flex-row items-center justify-center w-[80%] h-[350px] bg-background mt-7 rounded-xl mb-8 border-solid border-input border-[1px] ' key={item.title}>
                        <div className='flex-[0.8] flex justify-center '>
                        <div className='bg-gray-500 w-[80%] text-center items-center cursor-pointer border-2 transform transition-transform hover:scale-105'>
                            <Link href={projectLinks[item.id]} target="_blank" rel="noopener noreferrer" passHref>
                                <Image src={projectSS[item.id]} width={990} height={540} alt=""/>
                            </Link>
                        </div>
                        </div>
                        <div className='flex-1 flex flex-col gap-6 items-start w-[80%]'>
                            <div className='flex flex-col gap-3 mr-6 my-4 text-[18px] text-left'>
                                {item.description.map((elem)=>(
                                    <p key={elem} className='text-gray-300'>{elem}</p>
                                ))}
                            </div>
                        <div className='hidden lg:flex gap-5'>
                                {item.teckStack.map((tech,index)=>(
                                    <div className='bg-input rounded-full text-gray-300 px-3 py-1' key={index}>{tech}
                                    </div>
                                ))}
                                <Link href={projectLinks[item.id]} target="_blank" rel="noopener noreferrer" passHref>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                                </Link>
                                <Link href={projectGitHub[item.id]} target="_blank" rel="noopener noreferrer" passHref>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                            </Link>
                        </div>
                            <div className='flex flex-row gap-4'>
                                
                            
                            </div>
                        </div>
            </motion.div>
            </div>
                
            )
        )
    
        }
        
    </section>
  )
}

export default Projects