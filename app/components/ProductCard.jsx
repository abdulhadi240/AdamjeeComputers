import React from 'react'
import Image from 'next/image'
const ProductCard = ({src , text}) => {
  return (
    <div className='relative w-72 h-56 overflow-hidden ml-44 mt-10 group'>
        <div className='overflow-hidden '>
            <Image src={'/p.png'} height={300} width={300} className='overflow-hidden' alt='border'/>
        </div>
        <div className='mb-1'>
            <img src={src} className='w-full h-[210px] group-hover:scale-105 transition-all absolute top-0 left-1 object-fill  inset-6  -z-50 overflow-hidden' alt='products'/>
        </div>
        <div className='absolute top-1 right-6'>
            <h1 className='font-bold text-lg'>{text}</h1>
        </div>
    </div>
  )
}

export default ProductCard