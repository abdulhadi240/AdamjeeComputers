import React from 'react'

const Content = ({heading , text}) => {
  return (
    <div className='flex flex-col gap-3 w-80'>
        <h1 className='text-3xl font-bold '>{heading}</h1>
        <p>{text}</p>
        </div>
  )
}

export default Content