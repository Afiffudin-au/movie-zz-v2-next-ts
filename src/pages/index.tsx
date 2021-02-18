import Head from 'next/head'
import React from 'react'
import Banner from '../components/Banner/Banner'
import Navigation from '../components/Navigation/Navigation'
import PopularGroup from '../components/PopularGroup/PopularGroup'
export default function Home({ populars }: any) {
  return (
    <div className='home'>
      <Head>
        <title>Movie-zz-v2-next-ts</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navigation />
      <Banner />
      <PopularGroup populars={populars} />
    </div>
  )
}
export async function getStaticProps() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&page=1`
  )
  if (!res.ok) {
    throw new Error('Fetching Error')
  }
  const data = await res.json()
  if (!data) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      populars: data,
    },
  }
}
