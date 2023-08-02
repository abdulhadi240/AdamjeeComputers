import MainInfo from './components/MainInfo'
import Navbar from './components/NAVBAR/Navbar'
import dynamic from 'next/dynamic'
import Contact from './components/Contact'
const Service = dynamic(() => import('./components/Service'))
const Products = dynamic(() => import('./components/Products'))
const Lab = dynamic(() => import('./components/Lab'))

export const metadata = {
  title: 'Adamjee Computers: Your IT Solution',
  description: 'Get top-notch computers, expert services, and advanced lab solutions at Adamjee Computers. Elevate your tech journey with us today!',
}
 

export default function Home() {
  
  return (
    <div className=''>
      <Navbar />
      <MainInfo />
      <Service />
      <div id='products'>
      <Products />
      </div>
      <Lab/>
      <Contact/>
    
    </div>
  )
}

