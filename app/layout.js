import './globals.css'
import ChatwoptWidget from './components/ChatWoot'
import { Manrope } from 'next/font/google'
import FooterBar from './components/FooterBar'
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head'
import { useRouter } from 'next/router'
import Script from 'next/script'
import { useEffect } from 'react'
import * as gtag from '../lib/gtag'
const inter = Manrope({
  subsets: ['latin'],
  weight: ['400']
})


export const metadata = {
  title: 'Adamjee Computers',
  description: 'Your one-stop computer shop',

}

export default function RootLayout({ children }) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return (
    <html lang="en">


      <Head>
        {process.env.NODE_ENV === 'production' && (
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6962541521358258"
            crossorigin="anonymous"></script>
        )}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6962541521358258"
     crossorigin="anonymous"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${gtag.GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
         <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      </Head>

      <body className={inter.className}>
        {children}
        <ChatwoptWidget />
        <FooterBar />
        <Analytics />
      </body>
    </html>
  )
}




