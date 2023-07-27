'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import { AiFillCaretDown } from 'react-icons/ai'
const SubMenuName = ({ Text, border, background, hover, TextHover, active, submenu }) => {


    const [show, setShow] = useState(false);
    return (
        <div onClick={() => setShow(!show)}>
            {submenu ? (
                <div className={`flex flex-col mt-4 group w-full text-center   h-[40px]  pt-2 border-white  font-bold ${hover ? 'hover:bg-secondary-100 text-white' : ''}  ${TextHover ? 'hover:text-secondary-100' : ''} cursor-pointer transition`}>
                    {Text}
                    <AiFillCaretDown className='mt-[2px] block' size={20} />

                </div>
            ) : (
                <div className={` group w-full mt-4 text-center ${border ? 'border-r-[0px]' : 'border-r-[0px]'}  h-[40px]  pt-2 border-white  font-bold ${hover ? 'hover:bg-secondary-100 text-white' : ''}  ${TextHover ? 'hover:text-secondary-100' : ''} cursor-pointer transition`}>
                    {Text}



                </div>
            )}


        </div>

    )
}

export default SubMenuName