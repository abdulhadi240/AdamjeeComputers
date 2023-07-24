import MainInfo from './components/MainInfo'
import Navbar from './components/NAVBAR/Navbar'
import dynamic from 'next/dynamic'


const Service = dynamic(() => import('./components/Service'))
const Products = dynamic(() => import('./components/Products'))
const Slider = dynamic(() => import('./components/ImageSlider/Slider'))




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
      {/* <About/> */}
      <Slider />
    </div>
  )
}
