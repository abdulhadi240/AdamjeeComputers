import React from 'react'
import AboutInfo from '../components/AboutInfo'
import Navbar from '../components/NAVBAR/Navbar'
import FooterBar from '../components/FooterBar'

const page = () => {
  return (
    <div>
        <Navbar/>
        <AboutInfo/>
        {/* <FooterBar/> */}
    </div>
  )
}

export default page