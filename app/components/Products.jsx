import React from 'react'
import ProductCard from './ProductCard'
const Products = () => {
    return (
        <div className='w-full h-auto bg-black '>
            <div className='flex justify-center text-3xl pt-10 font-bold text-white'>CATEGORY</div>
            <div className='flex justify-center text-sm mt-1 text-center text-white'>WE have products in these categories !</div>
            <div className='flex justify-center mt-20 p-10 mb-10'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20'>
                <ProductCard src={'/work.jpg'} text={'Work Station'} />
                    <ProductCard src={'/gaming.jpg'} text={'Custom Built'} />
                    <ProductCard src={'/card.jpeg'} text={'Graphics Card'} />
                    <ProductCard src={'/headphone.jpg'} text={'Headphone'} />
                    <ProductCard src={'/mouse.jpg'} text={'Mouse'} />
                    <ProductCard src={'/keyboard.jpg'} text={'Keyboard'} />

                </div>
            </div>
        </div>
    )
}

export default Products