import React from 'react'
import Image from 'next/image'
const MainInfo = () => {
  return (
    <div className='relative'>
        <div >
            <img src={'/home.jpg'} className='w-full lg:h-full h-[400px] blur-[1px] ' alt='image'/>
        </div>
        <div className='flex justify-center text-center'>
        <div className='absolute top-[25%] '>
        <div className='flex flex-col gap-2'>
            <h1 className='text-3xl font-bold text-center w-auto'>WE MAKE YOUR LIFE EASIER</h1>
            <p className='text-sm text-center max-w-[900px]'>We understand the amount of choices and options out there when it comes to buying a computer. Let us make your choice easier by providing you with expert advice and up-to-date product information - so you can pick the right system for your needs.</p>
        </div>
        </div>
        </div>
    </div>
  )
}

export default MainInfo