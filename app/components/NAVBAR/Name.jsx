import React from 'react'

const Name = ({ text, link }) => {
    return (
        <div className=' w-auto h-10 p-2 rounded-lg  hover:bg-gray-800 hover:text-white transition-all cursor-pointer'>
            <h1>{text}</h1></div>
    )
}

export default Name