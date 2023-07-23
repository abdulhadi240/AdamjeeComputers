import React from 'react'
import Image from 'next/image'
const Services = ({src , text , heading}) => {
  return (
    <div className='bg-gray-100 w-72 h-auto ml-32'>
        <div className='flex justify-center'>
            <Image src={src} height={50} width={50} alt='service'/>
        </div>
        <div  className='flex flex-col'>
            <div  className='flex justify-center font-semibold mt-8'>
                <h1>{heading}</h1>
            </div>
            <div  className='flex justify-center text-center mt-3 text-sm'>
                <p>{text}</p>
            </div>
        </div>
    </div>
  )
}

export default Services