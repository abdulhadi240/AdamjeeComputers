import Image from 'next/image'
import MainInfo from './components/MainInfo'
import ProductCard from './components/ProductCard'
import Services from './components/Services'
import Lab from './components/Lab'
import Slider from './components/ImageSlider/Slider'
import Products from './components/Products'

export default function Home() {
  return (
    <div className='mt-16'>
      <MainInfo/>
      <Services src={'/pack.png'} heading={'DATA BACKUP'} text={'ur secure data backup service ensures all the customer information is safely restored'}/>
      <Lab/>
      <Products/>

      <Slider/>
    </div>
  )
}
