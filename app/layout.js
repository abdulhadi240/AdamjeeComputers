import './globals.css'
import ChatwoptWidget from './components/ChatWoot'
import { Manrope } from 'next/font/google'
import FooterBar from './components/FooterBar'

const inter = Manrope({ 
  subsets: ['latin'],
  weight:['400']
})

export const metadata = {
  title: 'google-site-verification',
  description: 'Kfp5JBmSJtONW17fAhaGFjnaPBszEi6dD6JUbXB2VEY'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <ChatwoptWidget/>
        <FooterBar/>
        </body>
        
        
     

    </html>
  )
}
