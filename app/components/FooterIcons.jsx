import React from 'react'
import { AiOutlineWhatsApp, AiOutlineMail, AiOutlineFacebook } from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'
const FooterIcons = () => {
  return (
    <div>
        <div className='flex gap-6 mt-1 justify-center sm:justify-normal'>
            
            <AiOutlineWhatsApp size={32}/>
            <AiOutlineMail size={32}/>
            <FaFacebookF size={32}/>
        </div>
    </div>
  )
}

export default FooterIcons