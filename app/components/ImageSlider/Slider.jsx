'use client'

import React, { useState ,useRef , useEffect } from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'
import Images from './Images'

const Slider = () => {

  const [width , setWidth] = useState(0);
  const coronal = useRef();
   
  useEffect(()=>{
    // console.log(coronal.current);
    setWidth(1200)
  },[])
  return (
    <div>
    <motion.div ref={coronal} className='cursor-grab overflow-hidden  select-none  w-80 ml-12 sm:w-[600px] lg:w-[900px]'>
        <motion.div drag='x' dragConstraints={{right:0 , left:-width}} className='flex '>
            {Images.map((images)=>{
              return(
                <motion.div className=' p-[20px] ' key={images}>
                  <Image src={images} width={300} height={200} className='w-[100%] h-[100%] sm:ml-52 ml-44   rounded-2xl'/>
                </motion.div>
              )
            })}
        </motion.div>
    </motion.div>
    </div>
  )
}

export default Slider