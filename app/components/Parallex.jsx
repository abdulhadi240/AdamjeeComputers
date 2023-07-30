'use client'
import React from 'react'
import { Parallax } from 'react-parallax';
import Navbar from './NAVBAR/Navbar';
import { motion } from 'framer-motion';
const Parallex = () => {
  return (
    <div>
        
        <Parallax  className='image brightness-50' bgImage="/lab4.webp" bgImageAlt="the cat" strength={200}>
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} className='sm:mt-24 lg:mt-32 mt-6 text-3xl  sm:text-5xl lg:text-7xl font-black  flex justify-center my-auto'>
        Establishment <br/>of Computer Labs
        </motion.div>
    </Parallax>
    </div>
  )
}

export default Parallex