import React from 'react'
import Navbar from '../components/NAVBAR/Navbar'
import dynamic from 'next/dynamic'


const Contracts = dynamic(() => import('../components/Contracts'))
const QnASection = dynamic(() => import('../components/QnASection'))

export const metadata = {
  title: 'Contact Adamjee Computers: IT Solutions & Labs ',
  description: 'Reach out to us for top-notch IT solutions, services, and advanced lab facilities. Experience innovation with Adamjee Computers today!',
}
const page = () => {
  return (
    <div>
      <Navbar />
      <div className='mt-16'>
        <div></div>
        <div className='flex justify-center text-center text-4xl'>Contact our friendly team</div>
        <div className='flex justify-center text-center'>Let us know how we can help</div>
      </div>
      <Contracts/>
      <QnASection/>
      {/* <FooterBar/> */}
    </div>
  )
}

export default page