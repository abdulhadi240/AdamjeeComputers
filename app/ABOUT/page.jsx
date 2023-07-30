import React from 'react'
import AboutInfo from '../components/AboutInfo'
import Navbar from '../components/NAVBAR/Navbar'
import dynamic from 'next/dynamic'
import Image from 'next/image'

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
      <LabData heading={'Proprietor'} text={'Meet Sohail Adamjee, the proud proprietor of Adamjee Computers, a seasoned expert in the tech industry. With a legacy dating back to 1993, he has been at the forefront of providing top-notch computer solutions and services. Sohails passion for technology and unwavering commitment to customer satisfaction have earned him a reputable name in the field. With a wealth of experience, he continues to lead Adamjee Computers to greater heights, ensuring cutting-edge offerings for clients and staying abreast of the ever-changing digital landscape.'} content={'"Registered In "'} src={'/profile.jpg'}/>

        </div>
        <div className='flex gap-10 mt-16 lg:ml-16'>
          <Image src={'/th.jpg'} height={100} width={100} alt='logo' />
          <Image src={'/kcci.png'} height={100} width={100} alt='logo' />
          <Image src={'/psw.png'} height={100} width={100} alt='logo' />


        </div>
        <Choose/>
        <Counter/>
        <Slider/>
        {/* <FooterBar/> */}
    </div>
  )
}

export default page