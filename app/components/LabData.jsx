'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Button from './Button'
import {BsFillLightningChargeFill} from 'react-icons/bs'
const LabData = ({heading , text ,src , position , reverse , content}) => {
  return (
    <div className='sm:px-20 overflow-hidden'>
        <div className={`flex ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} flex-col gap-10 justify-between mt-16  sm:mt-32 lg:mt-64`}>
            <div className='lg:w-[700px] w-auto tracking-wider'>
                <motion.h1 initial={{scale:0}} whileInView={{scale:1}} transition={{duration:1}} className='font-bold text-3xl '>{heading}</motion.h1>
                <p className=' mt-10 lg:text-xl'>{text}</p>
                <div className='flex gap-10 justify-center mt-14'>
                </div>
                <div>
                <Button Icons={BsFillLightningChargeFill} text={content} color1={true}/>
                </div>
            </div>
            {position ? (
            <motion.div initial={{x:200}} whileInView={{x:0}} transition={{duration:1}}><Image src={src} width={500} height={500} alt='lab'/></motion.div>

            ):
            (
                <motion.div initial={{x:-200}} whileInView={{x:0}} transition={{duration:1}}><Image src={src} width={500} height={500} alt='lab'/></motion.div>
              
            )}

        </div>
    </div>
  )
}

export default LabData