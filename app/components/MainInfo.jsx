'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { motion } from 'framer-motion'
import BrandSlider from './BrandSlider'
const MainInfo = () => {

  useEffect(() => {
    gsap.to('.overlay', { y: '-100vh', delay: 1.5 });
    gsap.to('.layer-1', { y: '-100vh', delay: .5 });
    gsap.to('.layer-2', { y: '-100vh', delay: .7 });
    gsap.to('.layer-3', { y: '-100vh', delay: .9 });
  }, [])
  return (
    <>
    <section className="hero h-auto p-10 overflow-x-hidden">
      <div className="container">
        <div className="content flex flex-col-reverse  sm:flex sm:flex-row sm:justify-between">
          <motion.div initial={{x:-900}}
          animate={{x:0}}
          transition={{duration:1 , delay:1}} className="text sm:ml-10 lg:ml-20">
            <h1 className=' text-4xl sm:text-3xl lg:text-6xl font-black tracking-wider sm:block flex justify-center text-center sm:text-start '>WE <br/> PROVIDE <br/> EXCELLENCE</h1>
            <h5 className='mt-6  text-lg font-bold flex justify-center text-center sm:block sm:text-start'>Your one-stop computer shop</h5>
            <p className=' text-sm font-bold  sm:mt-16 flex justify-center text-center sm:block sm:text-start'>Make your next computer purchase a smart one with our selection of top-rated machines</p>
            <div className='flex justify-center text-center sm:block sm:text-start'><button className="w-auto h-auto  p-3 text-sm bg-gray-700 text-white  rounded-lg hover:bg-gray-900 mt-6 hover:text-white transition-all">SHOP NOW</button></div>
          </motion.div>
          <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:2 , duration:2}} className="watch-wrapper">
            <img src="/home.webp" alt="home" className='w-full h-full xl:h-[600px]'/>
          </motion.div>
        </div>
      </div>

      <div className="overlay">
        <div className="layer layer-1"></div>
        <div className="layer layer-2"></div>
        <div className="layer layer-3"></div>
      </div>

      
    </section>
    <BrandSlider/>
    </>
  )
}

export default MainInfo