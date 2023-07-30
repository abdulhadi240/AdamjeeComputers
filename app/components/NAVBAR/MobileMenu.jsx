import React from 'react'
import SubMenuName from './SubMenuName'
import Link from 'next/link'
import {AiOutlineClose} from 'react-icons/ai'
import { BsWhatsapp } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
const MobileMenu = ({setMobileMenu,border , background , color , hover , margin , active,hide}) => {
  return (
    <div className='h-screen w-screen  z-50 pt-24 bg-black  text-xl '>
    <div className={` flex flex-col overflow-hidden`}>
        <Link  href={'/'}><SubMenuName Text={'Home'} border={border} hover={border}  TextHover={hover}  submenu={false}/></Link>
        <Link href={'/LABS'}><SubMenuName Text={'Computer Labs'} border={border} hover={border} TextHover={hover} active={active} submenu={false}/></Link>
        <Link href={'/ABOUT'}><SubMenuName Text={'About Us'} border={border} hover={border} TextHover={hover} active={active} submenu={false}/></Link>
        <Link href={'/CONTACT'}><SubMenuName Text={'Contact Us'} border={border} hover={border} TextHover={hover} active={active} submenu={false}/></Link>
    </div>
    <div className='absolute top-5 right-10 transition-all' onClick={()=>{setMobileMenu(true)}}>
    <AiOutlineClose size={24} color='white'/>
    </div>

    <div className='z-50 mt-32 flex justify-center gap-4 '>
      <Link href={'https://mail.google.com/mail/?view=cm&to=adamjeecomputers@live.com&su=Your%20Subject&body=Your%20Message'} target='_blank'><MdEmail size={40} color='white'/></Link>
      <Link href={'https://api.whatsapp.com/send/?phone=%2B923052108020&text&type=phone_number&app_absent=0'} target='_blank'><BsWhatsapp size={40} color='white'/></Link>
      <Link href={'/'}><FaFacebook size={40} color='white'/></Link>
    </div>
</div>
  )
}

export default MobileMenu