import React from 'react'
import Link from 'next/link'
const Name = ({ text, link }) => {
    return (
        <Link href={link}><div className=' w-auto h-10 p-2 rounded-lg  hover:bg-gray-800 hover:text-white transition-all cursor-pointer'>
            <h1>{text}</h1></div></Link>
    )
}

export default Name