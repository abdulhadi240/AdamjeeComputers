
import React from 'react'
import Link from 'next/link'
const ContactCard = ({Ricons , Heading , text, link , label}) => {
  
  return (
    <Link href={link} target='_blank'><div className='border-[1px] shadow-lg w-64 h-64 p-3 group hover:bg-black transition-all'>  
        <div className='w-9 h-auto p-1 rounded-lg border-[1px] transition-all ml-4'>
        <Ricons size={24} color='black'/>
        </div>
        <div className='flex flex-col gap-1 mt-20 group-hover:text-white transition-all ml-4'>
            <div className='text-lg font-bold '>{Heading}</div>
            <div className='text-xs mt-1'>{text}</div>
            <div>
            <div className='underline mt-6 text-sm font-semibold'>{label}</div>
            </div>
        </div>
    </div></Link>
  )
}

export default ContactCard