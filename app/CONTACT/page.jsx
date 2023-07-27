'use client'
import React from 'react'
import Navbar from '../components/NAVBAR/Navbar'
import ContactCard from '../components/ContactCard'
import { BsChat } from 'react-icons/bs'
import Contracts from '../components/Contracts'
import QnA from '../components/QnA'
import QnASection from '../components/QnASection'
import FooterBar from '../components/FooterBar'

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
      <FooterBar/>
    </div>
  )
}

export default page