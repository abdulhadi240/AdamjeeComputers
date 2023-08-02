import './globals.css'
import ChatwoptWidget from './components/ChatWoot'
import { Manrope } from 'next/font/google'
import FooterBar from './components/FooterBar'
import { Analytics } from '@vercel/analytics/react';

const inter = Manrope({ 
  subsets: ['latin'],
  weight:['400']
})


export const metadata = {
  title: 'Adamjee Computers',
  description: 'Your one-stop computer shop',

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <ChatwoptWidget/>
        <FooterBar/>
        <Analytics />
        </body>
    </html>
  )
}
