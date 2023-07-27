import React from 'react'
import { AiOutlineWhatsApp, AiOutlineMail } from 'react-icons/ai'
const FooterIcons = () => {
  return (
    <div>
        <div className='border-r-[1px] flex'>
            
            <AiOutlineWhatsApp size={24}/>
            <AiOutlineMail size={24}/>
        </div>
    </div>
  )
}

export default FooterIcons