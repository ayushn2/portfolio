import React from 'react'
import Noxt from './icons/Noxt'
import { skills } from '@/app/constants'
import StylizedLogoMark from './StylizedLogoMark'
import { useRef } from 'react'
import gsap from 'gsap'
import {useGSAP} from "@gsap/react"
import clsx from 'clsx'
import usePrefersReducedMotion from './usePrefersReducedMotion'
import Rect from './icons/Rect'
import Tailwind from './icons/Tailwind'
import Mangod from './icons/Mangod'
import JavaScript from './icons/JavaScript'
import Typescript from './icons/Typescript'

const AnimatedContent = () => {

  const container = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  gsap.registerPlugin(useGSAP);

  const icons={
    next:<Noxt/>,
    react:<Rect/>,
    tailwind:<Tailwind/>,
    mangod:<Mangod/>,
    javascript:<JavaScript/>,
    typescript:<Typescript/>,
  }

  useGSAP(
    () => {
      const tl = gsap.timeline({
        repeat: -1,
        defaults: { ease: "power2.inOut" },
      });

      tl.to(".pulsing-logo", {
        keyframes: [
          {
            filter: "brightness(2)",
            opacity: 1,
            duration: 1.3,
            ease: "power2.in",
          },
          {
            filter: "brightness(1)",
            opacity: 0.7,
            duration: 0.9
          },
        ],
      });
      tl.to(".signal-line",{
        keyframes:[
            {backgroundPosition:"0% 0%"},
            {backgroundPosition:"100% 100%",
            stagger:{from:"center",each:0.5},
            duration:1.2
        }
        ]
      },"-=1.4",
    )
    tl.to(
        ".pulsing-icon",
        {
          keyframes: [
            {
              opacity: 0.4,
              stagger: {
                from: "center",
                each: 0.3,
              },
              duration: 1,
            },
            {
              opacity: 1,
              duration: 1.1,
              stagger: {
                from: "center",
                each: 0.3,
              },
            },
          ],
        },
        "-=5",
      )
      
     
    },
    { scope: container },
  );



  return (
    <div className="mx-auto mt-20 flex flex-col items-center justify-center md:flex-row" ref={container}>
          {skills.map((item,index)=>{
            return(
              <React.Fragment key={index}>
                {index === Math.floor(skills.length/2)&& (
                  <>
                    <StylizedLogoMark/>
                    <div className="signal-line rotate-180 bg-gradient-to-t"/>

                   
                  </>
                )}
                <div className="pulsing-icon flex aspect-square shrink-0 items-center justify-center rounded-full  border-blue-50/30 bg-blue-50/25 p-3 text-blue-100 opacity-90 h-[90px] w-[90px] md:h-[75px] md:w-[75px] lg:h-[90px] lg:w-[90px] ">

                {icons[item.title]}
                 
                </div>
                {index !== skills.length - 1 && (
                  <div className={clsx("signal-line",index>=Math.floor(skills.length/2)?"rotate-180":"rotate-0")}/>
                )}
                
              </React.Fragment>
            )
          })}
       </div>
  )
}

export default AnimatedContent