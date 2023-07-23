'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const ProductCard = ({src , text}) => {
  return (
    <motion.div
    initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1}} className='relative w-72 h-56 overflow-hidden group'>
        <div className='overflow-hidden '>
            <Image src={'/p.png'} height={300} width={300} className='overflow-hidden' alt='border'/>
        </div>
        <div className='mb-1'>
            <img src={src} className='w-full h-[210px] group-hover:scale-105 transition-all absolute top-0 left-1 object-fill  inset-6  -z-50 overflow-hidden' alt='products'/>
        </div>
        <div className='absolute top-1 right-6'>
            <h1 className='font-bold text-sm'>{text}</h1>
        </div>
    </motion.div>
  )
}

export default ProductCard