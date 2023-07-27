'use client'
import React , {useState} from 'react'
import {BsLightbulb} from 'react-icons/bs'

const ChooseCard = ({heading , text , Ricons}) => {
    const [color1 , setColor1] =useState('black')
    return (
        <div>
            <div className='border-[1px] shadow-xl w-96 h-72 p-3 group hover:bg-black transition-all'onMouseEnter={()=>setColor1('white')}  onMouseLeave={()=>setColor1('black')}>
                <div className='w-9 h-auto p-1 rounded-lg border-[1px] transition-all ml-4'>
                    <BsLightbulb size={24} color={`${color1}`}  />
                </div>
                <div className='flex flex-col gap-1 mt-10 group-hover:text-white transition-all ml-4'>
                    <div className='text-lg font-bold '>{heading}</div>
                    <div className='text-sm mt-1 tracking-wider'>{text}</div>
                </div>
            </div>
        </div>
    )
}

export default ChooseCard