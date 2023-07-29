import React from 'react'
import AboutInfo from '../components/AboutInfo'
import Navbar from '../components/NAVBAR/Navbar'
import dynamic from 'next/dynamic'


const LabData = dynamic(() => import('../components/LabData'))
const Choose = dynamic(() => import('../components/Choose'))
const Counter = dynamic(() => import('../components/Counter'))
const Slider = dynamic(() => import('../components/ImageSlider/Slider'))

export const metadata = {
  title: 'Adamjee Computers: Empowering Innovation',
  description: 'Discover our passion for empowering innovation in IT solutions, services, and advanced lab establishments at Adamjee Computers.',
}

const page = () => {
  return (
    <div>
        <Navbar/>
        <AboutInfo/>
        <div className='lg:-mt-20'>
        <LabData heading={'About Us'} text={'Welcome to Adamjee Computers, where cutting-edge technology meets exceptional service. With a rich legacy spanning over 24 years, we are a leading provider of high-quality computers that empower individuals and businesses to achieve their full potential. At Adamjee Computers, our vision is to revolutionize the computing industry by delivering innovative and reliable solutions that redefine user experiences. We strive to be a trusted partner for all your technology needs, ensuring seamless integration of our products into your daily life or business operations.Our mission is simple - to provide you with the best-in-class computers that combine performance, style, and reliability. We take pride in offering a diverse range of customizable options, catering to the unique requirements of our valued customers.'} content={'"Empowering Tomorrows Possibilities Today"'} src={'/lab1.jpg'}/>
        </div>
        <Choose/>
        <Counter/>
        <Slider/>
        {/* <FooterBar/> */}
    </div>
  )
}

export default page