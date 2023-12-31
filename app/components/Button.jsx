import React, { useState } from 'react'

const Button = ({ Icons, text, color1 }) => {
  const [color, setColor] = useState('black')
  return (
    <div>
      {color1 ? (
        <div className='w-auto h-auto p-2 border-[1px] flex gap-2 group bg-black transition-all'>
        <div className=' transition-all'>
          <Icons size={20} color='white'/>
        </div>
        <div className='text-white transition-all'>
          {text}
        </div>
      </div>
      ): (
<div className='w-auto h-auto p-2 border-[1px] flex gap-2 group hover:bg-black transition-all' onMouseEnter={() => setColor('white')} onMouseLeave={() => setColor('black')}>
        <div className=' transition-all'>
          <Icons size={20} color={`${color}`} />
        </div>
        <div className='group-hover:text-white transition-all'>
          {text}
        </div>
      </div>
      )}
      
    </div>
  )
}

export default Button