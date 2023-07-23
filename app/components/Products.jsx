'use client'
import React from 'react'
import ProductCard from './ProductCard'
import { motion } from 'framer-motion'
const Products = () => {
    return (
        <motion.div initial={{color:'white'}}
        whileInView={{color:'black'}}
        animate={{animation:'ease'}} className='w-full h-auto py-10'>
            <div className='grid grid-cols-2 px-20'>
                <ProductCard src={'/keyboard.jpg'} text={'Keyboard'} />
                <ProductCard src={'/keyboard.jpg'} text={'Keyboard'} />
                <ProductCard src={'/keyboard.jpg'} text={'Keyboard'} />
                <ProductCard src={'/keyboard.jpg'} text={'Keyboard'} />
                <ProductCard src={'/keyboard.jpg'} text={'Keyboard'} />

            </div>
        </motion.div>
    )
}

export default Products