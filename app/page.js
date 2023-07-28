import FooterBar from './components/FooterBar'
import MainInfo from './components/MainInfo'
import Navbar from './components/NAVBAR/Navbar'
import dynamic from 'next/dynamic'
import Contact from './components/Contact'

const Service = dynamic(() => import('./components/Service'))
const Products = dynamic(() => import('./components/Products'))
const Lab = dynamic(() => import('./components/Lab'))



export default function Home() {
  return (
    <div className=''>
      <Navbar />
      <div className=''>
      <MainInfo />
      </div>
      <Service />
      <Products />
      <Lab/>
      <Contact/>
      <FooterBar/>

      
      
    </div>
  )
}
