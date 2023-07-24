import Image from 'next/image'
import MainInfo from './components/MainInfo'
import Lab from './components/Lab'
import Slider from './components/ImageSlider/Slider'
import Products from './components/Products'
import Service from './components/Service'
import Navbar from './components/NAVBAR/Navbar'

export default function Home() {
  return (
    <div className=''>
      <Navbar />
      <div className=''>
      <MainInfo />
      </div>
      <Service />
      {/* <Lab/> */}
      <Products />
      <Slider />
    </div>
  )
}
