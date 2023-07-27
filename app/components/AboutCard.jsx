import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
const AboutCard = ({heading , text , src}) => {
  return (
    <Link href={'/LABS'}><motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:2 , duration:1}}>
        <div className='w-[400px] sm:w-[500px] h-56 sm:h-64 lg:h-72  relative group '>
            <div className=''>
                <img src={src} alt="lab" className='brightness-[0.6] object-fill group-hover:brightness-[0.4] transition-all cursor-pointer' />
                </div>
            <div className='absolute top-20 left-8 sm:top-28 sm:left-16  z-50 font-bold text-white tracking-wider '>
                <h1 className=' text-4xl max-w-80 text-start'>{heading}</h1>
                <p className=' text-base text-start w-72 mt-2 mr-3 sm:mr-0'>{text}</p>
            </div>
        </div>
    </motion.div>
    </Link>
  )
}

export default AboutCard