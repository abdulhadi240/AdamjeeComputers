import React from 'react'
import Navbar from '../components/NAVBAR/Navbar'
import dynamic from 'next/dynamic'


const Contracts = dynamic(() => import('../components/Contracts'))
const QnASection = dynamic(() => import('../components/QnASection'))

export const metadata = {
  title: 'Contact Us ',
  description: 'We are available 24/7',
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