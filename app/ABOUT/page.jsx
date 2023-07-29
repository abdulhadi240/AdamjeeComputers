import React from 'react'
import AboutInfo from '../components/AboutInfo'
import Navbar from '../components/NAVBAR/Navbar'
import FooterBar from '../components/FooterBar'
import Choose from '../components/Choose'
import Counter from '../components/Counter'
import Slider from '../components/ImageSlider/Slider'
import LabData from '../components/LabData'

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