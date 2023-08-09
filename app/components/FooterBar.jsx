import React from 'react'
import Name from './NAVBAR/Name'
import FooterIcons from './FooterIcons'

const FooterBar = () => {
    return (
        <div className='w-full h-auto flex sm:justify-between sm:flex-row flex-col justify-center text-center gap-4 bg-black text-white px-16 mt-10'>
            <div>
                <FooterIcons/>
            </div>
            <div className='flex'>
                <div className='flex justify-center sm:justify-start text-center'>
                    <Name text={'Contracts'} link={'/LABS'} />
                    <Name text={'About us'} link={'/ABOUT'} />
                    <Name text={'Contact us'} link={'/CONTACT'} />

                </div>

            </div>
            <div className='sm:mt-2 text-center'>
                @All right reserved 2023
            </div>

        </div>
    )
}

export default FooterBar