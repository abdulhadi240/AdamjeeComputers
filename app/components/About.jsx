'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
const About = () => {
  return (
    <div>
        <motion.div >
            <Image src={'/info.jsx'} height={500} width={500} alt='info'/>
        </motion.div>
    </div>
  )
}

export default About