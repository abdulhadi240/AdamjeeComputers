import React from 'react'
import { TfiFacebook } from 'react-icons/ti'
import { AiOutlineWhatsApp, AiOutlineMail } from 'react-icons/ai'
const FooterIcons = () => {
  return (
    <div>
        <div className='border-r-[1px] flex'>
            
            <TfiFacebook size={24} />
            <AiOutlineWhatsApp size={24}/>
            <AiOutlineMail size={24}/>
        </div>
    </div>
  )
}

export default FooterIcons