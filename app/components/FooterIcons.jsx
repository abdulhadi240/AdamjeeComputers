import React from 'react'
import { AiOutlineWhatsApp, AiOutlineMail, AiOutlineFacebook } from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'
import Link from 'next/link'
const FooterIcons = () => {
  return (
    <div>
        <div className='flex gap-6 mt-1 justify-center sm:justify-normal'>
            
            <Link href={'https://api.whatsapp.com/send/?phone=%2B923052108020&text&type=phone_number&app_absent=0'} target='_blank'><AiOutlineWhatsApp size={32}/></Link>
            <Link href={'https://mail.google.com/mail/?view=cm&to=adamjeecomputers@live.com&su=Your%20Subject&body=Your%20Message'} target='_blank'><AiOutlineMail size={32}/></Link>
            <FaFacebookF size={32}/>
        </div>
    </div>
  )
}

export default FooterIcons