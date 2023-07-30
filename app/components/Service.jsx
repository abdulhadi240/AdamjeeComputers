'use client'
import React from 'react'
import Services from './Services'
import { motion } from 'framer-motion'
const Service = () => {
    return (
        <div className='overflow-x-hidden'>
            <div className='flex justify-center text-3xl mt-10 font-bold'>OUR SERVICES</div>
            <div className='flex justify-center text-sm mt-1 text-center'>All the services are available for you at the moment</div>
            <div className='flex justify-center mb-16'>
                <div className='mt-16 grid grid-cols-1 sm:grid-cols-2 gap-20 lg:grid-cols-3 overflow-x-hidden'>
                <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:2}}>
                    <Services src={'/software.png'} heading={'SALES OF COMPUTER'} text={' As businesses and individuals embrace digital transformation, our offerings cater to their evolving needs, making us a reliable partner in the ever-expanding world of technology. '} />
                    </motion.div>
                    <motion.div initial={{x:100}} whileInView={{x:0}} transition={{duration:1}}>
                    <Services src={'/pack.png'} heading={'DATA BACKUP'} text={'Our secure data backup service ensures all customer information is safely and reliably stored.'} />
                    </motion.div >
                    <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:2}}>
                    <Services src={'/repair.png'} heading={'COMPUTER REPAIR'} text={'Computer store offers fast and reliable repair services for all types of computers and devices.'} />
                    </motion.div>
                    <motion.div initial={{x:100}} whileInView={{x:0}} transition={{duration:1}}>
                    <Services src={'/networking.png'} heading={'NETWORKING'} text={'Our website provides a network installation service to help customers configure their computers quickly and easily.'} />
                    </motion.div>
                    <motion.div initial={{x:100}} whileInView={{x:0}} transition={{duration:1}}>
                    <Services src={'/custom.png'} heading={'CUSTOM BUILTS'} text={'Our custom builds service provides clients with tailored computer systems based on their specifications and needs.'} />
                    </motion.div>
                    
                    <motion.div initial={{x:100}} whileInView={{x:0}} transition={{duration:1}}>
                    <Services src={'/virus.png'} heading={'LAB ESTABLISHMENT'} text={'At Adamjee Computers, we take great pride in our 24-year journey of revolutionizing education through our contract-based computer lab establishment services.'} />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Service