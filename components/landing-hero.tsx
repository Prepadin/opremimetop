


'use client'
import Image from 'next/image'

import Link from 'next/link'
import { useAuth } from '@clerk/nextjs'
import TypewriterComponent from 'typewriter-effect'
import Script from "next/script";
import { Button } from '@/components/ui/button'

export const LandingHero = () => {
  const { isSignedIn } = useAuth()

  return (
    <>
     <head>
      <Script
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=G-97B0VJG041`}
      />

      <Script id='' strategy='lazyOnload'>
        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-97B0VJG041', {
              page_path: window.location.pathname,
              });
          `}
      </Script>
      </head>
    <div className="text-white font-bold py-32 text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>Opremi Svoj Sanjski Dom</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          <TypewriterComponent
            options={{
              strings: [
                'Razkošno.',
                'Estetsko.',
                'Funkcionalno.',
                'Moderno.',
                'Minimalistično.',
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>

      <div className="text-sm md:text-xl font-light text-zinc-400">
      V samo dveh klikih in pomočjo umetne inteligence spremenite svoje ideje v profesionalno notranjost.
      </div>

      <div className="">
        <Button
          variant="premium"
          className="md:text-lg p-4 md:p-6 rounded-full font-semibold"
          asChild
        >
          <Link href={isSignedIn ? '/dashboard' : '/sign-up'}>
            Generiraj Brezplačno
          </Link>
        </Button>
      </div>

      {/* <div className="text-zinc-400 text-xs md:text-sm font-normal">
        No credit card required.
      </div> */}
    </div>
    {/* <Script id="next"
                async
                src={`https://www.googletagmanager.com/gtag/js?id=G-QCHQ7XGHGJ`}>
            </Script>
            <Script id="next">
                {
                    `window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'MEASUREMENT-ID');`
                }
            </Script> */}
    </>
  )
}
