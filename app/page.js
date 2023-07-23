import Image from 'next/image'
import MainInfo from './components/MainInfo'
import Lab from './components/Lab'
import Slider from './components/ImageSlider/Slider'
import Products from './components/Products'
import Service from './components/Service'

export default function Home() {
  return (
    <div className='mt-16'>
      <MainInfo />
      <Service/>
      <Products />
      <Slider/>
      {/* <Lab />

      <Slider /> */}
    </div>
  )
}
