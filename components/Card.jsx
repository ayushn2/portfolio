import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from 'next/link';
import Image  from 'next/image'
import { projectSS } from "./Projects"



export function CardWithForm({item}) {
  return (
    <Card className="w-[350px] lg:hidden">
      <CardHeader>
        <CardTitle>{item.title}</CardTitle>
        {/* <CardDescription>Deploy your new project in one-click.</CardDescription> */}
        
      </CardHeader>
      <CardContent>
            <div className=' w-full text-center items-center justify-center cursor-pointer border-2 transform transition-transform hover:scale-105'>
                        <Link href={projectSS[item.id]} target="_blank" rel="noopener noreferrer" passHref>
                            <Image src={projectSS[item.id]} width={990} height={540} alt=""/>
                            
                        </Link>
            </div>
            <div className="flex gap-5 flex-wrap mt-3">
            {item.teckStack.map((tech,index)=>(
                    <p className='bg-input font-[8px] rounded-full text-gray-300 py-1 px-2' key={index}>{tech}</p>
            ))}
            </div>
      </CardContent>
      <CardFooter className="flex justify-between">
     
                              
             <Link href={projectSS[item.id]} target="_blank" rel="noopener noreferrer" passHref>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
            </Link>
            <Link href={'https://github.com/ayushn2/ScrollVoyage'} target="_blank" rel="noopener noreferrer" passHref>
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </Link>
                        
      </CardFooter>
    </Card>
  )
}
