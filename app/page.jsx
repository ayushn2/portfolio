"use client"

import Image from 'next/image'

import About from '@/components/About';
import { useClient } from 'react';
import Hero from '@/components/Hero';
import ParticleContainer from '@/components/ParticleContainer';
import Particles from 'react-tsparticles';
import {loadFull} from "tsparticles"
import { useCallback } from 'react';
import Footer from '@/components/Footer';


export default function Home() {
  const particlesLoaded = useCallback(async ()=>{},[])
  const particlesInit = useCallback(async(engine)=>{
    await loadFull(engine)
},[]);
  return (
  <div>
  
    <div className='lg:h-[14px] h-[118px] md:[188px]' />
    <Particles 
    className='w-full h-full absolute translate-z-0 z-6'
    id='tsparticles' 
    init={particlesInit} 
    loaded={particlesLoaded} 
    options={{
        fullScreen:{enable:false},
        background:{
            color:{
                value:''
            },
        },
        fpsLimit:120,
        interactivity:{
            events:{
                onClick:{
                    enable:false,
                    mode:'push',
                },
                onHover:{
                    enable:true,
                    mode:'repulse'
                },
                resize:true,
            },
            mode:{
                push:{
                    quantity:90
                },
                repulse:{
                    distance:200,
                    duration:0.4,
                },
            },
        },
        particles:{
            color:{
                value:'#7393B3'
            },
            links:{
                color:'#7393B3',
                distance:150,
                enable:true,
                opacity:0.5,
                width:1
            },
            collisions:{
                enable:true,
            },
            move:{
                directions:'none',
                enable:true,
                outModes:{
                    default:'bounce'
                },
                random:false,
                speed:1,
                straight:false
            },
            number:{
                density:{
                    enable:true,
                    area:800
                },
                value:80
            },
            opacity:{
                value:0.5,
            },
            shape:{
                type:'circle'
            },
            size:{
                value:{min :1,max:5}
            },
        },
        detectRetina:true,
    }}
    />
    <About/>
    <Hero/>
    <Footer/>
   </div>
  
  )
}
