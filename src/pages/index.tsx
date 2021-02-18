import Head from 'next/head'
import React from 'react'
import Banner from '../components/Banner/Banner'
import Navigation from '../components/Navigation/Navigation'
export default function Home() {
  return (
    <div className='home'>
      <Head>
        <title>Movie-zz-v2-next-ts</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navigation />
      <Banner />
    </div>
  )
}
