import React from 'react'
import {BsChat} from 'react-icons/bs'
import {PiWechatLogoBold} from 'react-icons/pi'
import ContactCard from './ContactCard'
import {LiaMapMarkerAltSolid} from 'react-icons/lia'
import {BiPhoneCall} from 'react-icons/bi'
import ContactCard1 from './ContactCard1'

const Contracts = () => {
  return (
    <div>
        <div className='flex justify-center mt-10 sm:mt-20'>
        <div className='sm:px-16 px-4 lg:px-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          <ContactCard label={'adamjeecomputers@live.com'} Ricons={BsChat} Heading={'Chat to sales'} text={'Speak to our friendly team.'} link={'https://mail.google.com/mail/?view=cm&to=adamjeecomputers@live.com&su=Your%20Subject&body=Your%20Message'} />
          <ContactCard label={'Live chat at right corner'} Ricons={PiWechatLogoBold} Heading={'Live chat '} text={'Mon-Sat 24/7'} link={'./'} />
          <ContactCard label={'Visit our shop'} Ricons={LiaMapMarkerAltSolid} Heading={'Visit us !'} text={'Bhayani shopping center Block M Karachi, 74700 Pakistan'} link={'https://www.google.com/maps/dir//Adamjee+Computers/@24.9482301,66.9836023,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3eb341ea5536e569:0xba96bdb057ea6ad1!2m2!1d67.0536426!2d24.9482465?entry=ttu'} />
          <ContactCard1  Ricons={BiPhoneCall} Heading={'Call us'} text={'We are 24/7 available'} link={'./'} />

        </div>
      </div>
    </div>
  )
}

export default Contracts