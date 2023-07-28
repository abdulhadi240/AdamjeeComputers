import React, { useState } from 'react'
import { BsPlus } from 'react-icons/bs'
import { AiOutlineMinus } from 'react-icons/ai'
const QnA = ({heading , text}) => {
    const [full, setFull] = useState(false)
    return (
        <div className='flex justify-center cursor-pointer'>
            <div className={`group flex justify-between rounded-lg max-w-[700px]  border-[1px] shadow-lg overflow-hidden  ${full ? 'h-auto p-2 transition-all' : 'h-16 sm:h-12 p-2 transition-all'}`} onClick={() => { setFull(!full) }}>

                <div className='mt-1'>
                    <h1 className='font-semibold '>{heading}</h1>
                    <p className='tracking-wider text-sm mt-3'>{text}</p>
                </div>
                <div className='mt-1'>
                    {full ? (
                        <AiOutlineMinus size={20} />
                    ) : (
                        <BsPlus size={20} />

                    )}
                </div>
            </div>
        </div>
    )
}

export default QnA