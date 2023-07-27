import React from 'react'
import ChooseCard from './ChooseCard'
import {MdOutlineVerified} from 'react-icons/md'
import {IoCallOutline} from 'react-icons/io'
const Choose = () => {
  return (
    <div className='mb-4'>
        <div className='mt-32'>
            <h1 className='flex justify-center text-3xl font-bold text-center'>Why Choose Us !</h1>
            <p className='flex justify-center text-xs mt-1 text-center'>Welcome to Adamjee Computers - Your Trusted Source for High-Quality Computers</p>
        </div>
        <div className='flex justify-center'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>
            <ChooseCard  heading={'Unparalleled Expertise'} text={'Our team of passionate computer enthusiasts and tech-savvy professionals has accumulated extensive knowledge over the years, ensuring you get expert advice and top-notch products.'}/>
            <ChooseCard  heading={'Premium Quality Products'} text={'Quality is our hallmark. We meticulously source the finest components and conduct rigorous testing to guarantee reliable, high-performing computers that stand the test of time.'}/>
            <ChooseCard  heading={'Exceptional Customer Experience'} text={'Our relationship with you extends far beyond the purchase. Count on our dedicated support team to assist you with any queries, technical issues, or upgrades, providing an exceptional customer experience.'}/>

        </div>
        </div>
    </div>
  )
}

export default Choose