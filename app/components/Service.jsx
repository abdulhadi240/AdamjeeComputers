import React from 'react'
import Services from './Services'

const Service = () => {
    return (
        <div>
            <div className='flex justify-center text-3xl mt-10 font-bold'>OUR SERVICES</div>
            <div className='flex justify-center text-sm mt-1 text-center'>All the services are available for you at the moment</div>
            <div className='flex justify-center'>
                <div className='mt-16 grid grid-cols-1 sm:grid-cols-2 gap-20 lg:grid-cols-3'>
                    <Services src={'/pack.png'} heading={'DATA BACKUP'} text={'Our secure data backup service ensures all customer information is safely and reliably stored.'} />
                    <Services src={'/repair.png'} heading={'COMPUTER REPAIR'} text={'Computer store offers fast and reliable repair services for all types of computers and devices.'} />
                    <Services src={'/networking.png'} heading={'NETWORKING'} text={'Our website provides a network installation service to help customers configure their computers quickly and easily.'} />
                    <Services src={'/custom.png'} heading={'CUSTOM BUILTS'} text={'Our custom builds service provides clients with tailored computer systems based on their specifications and needs.'} />
                    <Services src={'/software.png'} heading={'SOFTWARE UPDATES'} text={'Our software upgrades service offers quick and easy solutions to keep your computer running smoothly.'} />
                    <Services src={'/virus.png'} heading={'VIRUS REMOVAL'} text={'Our virus removal service quickly and safely eliminates malware from your computer, allowing you to shop for new hardware with peace of mind.'} />

                </div>
            </div>
        </div>
    )
}

export default Service