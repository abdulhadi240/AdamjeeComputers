import React from 'react'
import { Parallax } from 'react-parallax';
import Navbar from './NAVBAR/Navbar';
import { motion } from 'framer-motion';
const Parallex = () => {
  return (
    <div>
        
        <Parallax  className='image brightness-90' bgImage="/lab4.webp" bgImageAlt="the cat" strength={200}>
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} className='mt-32 text-7xl font-black flex justify-center my-auto'>
        Establishment <br/>of Computer Labs
        </motion.div>
    </Parallax>
    </div>
  )
}

export default Parallex