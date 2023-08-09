'use client'
import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { motion } from 'framer-motion'
import AboutCard from './AboutCard'
import { BiArrowToBottom } from 'react-icons/bi'
import { BsArrowDownShort } from 'react-icons/bs'
const AboutInfo = () => {

    useEffect(() => {
        gsap.to('.overlay', { y: '-100vh', delay: 1.5 });
        gsap.to('.layer-1', { y: '-100vh', delay: .5 });
        gsap.to('.layer-2', { y: '-100vh', delay: .7 });
        gsap.to('.layer-3', { y: '-100vh', delay: .9 });
    }, [])
    return (
        <>
            <section className="hero  h-auto  overflow-x-hidden">
                <div className="container">
                    <div className="content flex flex-col-reverse  sm:flex sm:flex-row sm:justify-between">
                        <motion.div initial={{ x: -900 }}
                            animate={{ x: 0 }}
                            transition={{ duration: 1, delay: 1 }} className="text sm:ml-10 lg:ml-20 sm:mt-10">
                            <h1 className=' text-4xl sm:text-3xl lg:text-6xl font-black tracking-wider sm:block flex justify-center text-center sm:text-start '>WE <br /> PROVIDE <br /> EXCELLENCE</h1>
                            <div className='flex mt-10 gap-10 mb-20'>
                                <h1 className='text-xl font-semibold mt-1'>More about us</h1>
                                <div className='w-10 h-10 rounded-full bg-black'>
                                    <BsArrowDownShort color='white' size={36} className='ml-[2px] mt-[1px]'/>
                                </div>
                            </div>

                        </motion.div>
                        
                    </div>
                    <div className='flex justify-center'>
                    <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 sm:gap-3 lg:ml-4 '>
                        <AboutCard link={'/LABS'} src={'/lab.jpg'} heading={'Lab Establishment'} text={'We establish computer labs of your choice'}/>
                        <AboutCard link={'/'} src={'/computer.avif'} heading={'Ecommerce '} text={'We have all kind of computer machines'}/>
                        <AboutCard link={'/'} src={'/hardware.avif'} heading={'Hardware service'} text={'We provide all kind of Software and Hardware service'}/>

                    </div>
                    </div>
                </div>

                <div className="overlay">
                    <div className="layer layer-1"></div>
                    <div className="layer layer-2"></div>
                    <div className="layer layer-3"></div>
                </div>

                

            </section>

        </>
    )
}

export default AboutInfo