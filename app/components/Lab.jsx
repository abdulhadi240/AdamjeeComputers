'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Button from './Button'
import {BsFillLightningChargeFill} from 'react-icons/bs'
const Lab = () => {
  return (
    <div className='px-32 tracking-widest mt-32 mb-32 overflow-hidden'>
        <div className='flex lg:flex-row flex-col gap-10 justify-between mt-32'>
            <div className='lg:w-[700px]'>
                <motion.h1 initial={{scale:0}} whileInView={{scale:1}} transition={{duration:1}} className='font-bold text-3xl '>Transforming Education with Art of Computer Labs</motion.h1>
                <p className=' mt-10'>At Adamjee Computers, we take great pride in our 24-year journey of revolutionizing education through our contract-based computer lab establishment services. As a dedicated and experienced team, we have been empowering schools, libraries, companies, and organizations with cutting-edge computer labs, paving the way for a brighter future for students and professionals alike.</p>
                <div className='flex gap-10 justify-center mt-14'>
                <Button Icons={BsFillLightningChargeFill} text={'Experienced'}/>
                <Button Icons={BsFillLightningChargeFill} text={'Guidance'}/>

                </div>
            </div>
            <motion.div initial={{x:200}} whileInView={{x:0}} transition={{duration:1}}><Image src={'/lab1.jpg'} width={500} height={500} alt='lab'/></motion.div>
        </div>

        <div className='flex lg:flex-row-reverse flex-col gap-10 justify-between mt-48'>
            <div className='lg:w-[700px]'>
                <motion.h1 initial={{scale:0}} whileInView={{scale:1}} transition={{duration:1}}   className='font-bold text-3xl '>Empowering Learning Environments for the Digital Age</motion.h1>
                <p className='mt-10'>Our mission at Adamjee Computers is to empower learning environments for the digital age. We understand that technology plays a pivotal role in shaping the future, and with our contract-based services, we bring the latest and most advanced computer systems to educational institutions, corporations, and organizations. By providing comprehensive computer lab solutions, we enable seamless integration of technology into their day-to-day operations, equipping learners and professionals with the necessary digital skills.</p>
                <div className='flex gap-10 justify-center mt-14'>
                <Button Icons={BsFillLightningChargeFill} text={'Technology'}/>
                <Button Icons={BsFillLightningChargeFill} text={'Softwares'}/>

                </div>
            </div>
            <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1}}><Image src={'/lab2.jpg'} width={500} height={500} alt='lab'/></motion.div>
        </div>

        <div className='flex lg:flex-row flex-col gap-10 justify-between mt-48'>
            <div className='lg:w-[700px]'>
                <motion.h1 initial={{scale:0}} whileInView={{scale:1}} transition={{duration:1}} className='font-bold text-3xl '>Unmatched Expertise and Tailored Solutions</motion.h1>
                <p className=' mt-10'>With nearly a quarter-century of experience, Adamjee Computers boasts unmatched expertise in designing and implementing tailored computer lab solutions. We work closely with our clients to understand their unique requirements and objectives. Our team of skilled professionals ensures the successful installation and maintenance of the computer labs, allowing our clients to focus on their core activities while reaping the benefits of a technologically advanced workspace or educational facility.</p>
                <div className='flex gap-10 justify-center mt-14'>
                <Button Icons={BsFillLightningChargeFill} text={'Networking'}/>
                <Button Icons={BsFillLightningChargeFill} text={'Professionals'}/>

                </div>
            </div>
            <motion.div initial={{x:200}} whileInView={{x:0}} transition={{duration:1}}><Image src={'/lab3.avif'} width={500} height={500} alt='lab'/></motion.div>

        </div>

        
    </div>
  )
}

export default Lab