import Head from 'next/head'
import React from 'react'
import { api_config } from '../api-config'
import AllMovies from '../components/AllMovies'
import Banner from '../components/Banner'
import MovieToWatchGroup from '../components/MovieToWatchGroup'
import Navigation from '../components/Navigation'
import PopularGroup from '../components/PopularGroup'
import TvToWatchGroup from '../components/TvToWatchGroup'
export default function Home({ populars, movieToWatch, tvToWatch }: any) {
  return (
    <div className='home'>
      <Head>
        <title>Movie-zz-v2-next-ts</title>
        <meta name="turboviplay" content="NxnRYfw8U3-turboviplay" />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          name='description'
          content='Movie-zz provides various movies, tv and peoples from all over the world'
        />
        <meta
          property='og:title'
          content='Awesome movies, tv, and peoples - MovieZzNextTs'
        />
        <meta property='og:url' content={process.env.BASE_PATH} />
        <meta property='og:site_name' content='MovieZzNextTs' />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/dblvavqbv/image/upload/v1641540725/portfolio-images/Screenshot_63_coux2t.png'
        />
        <meta property='og:image:alt' content='image poster' />
        <meta property='og:type' content='website' />
        <meta
          name='og:description'
          content='Movie-zz provides various movies, tv and peoples from all over the world'
        />
        <meta
          name='google-site-verification'
          content='Gy8DecfJhmdkMec5xQrsKKV6mriP35Ynkhxl1_eX3oU'
        />
      </Head>
      <Navigation />
      <Banner />
      <PopularGroup popularsSSR={populars} />
      <MovieToWatchGroup movieToWatchSSR={movieToWatch} />
      <TvToWatchGroup tvToWatchSSR={tvToWatch} />
      <AllMovies />
    </div>
  )
}
export async function getStaticProps() {
  const url = `${api_config.BASE_URL}/${api_config.API_VERSION}`
  const [populars, movieToWatch, tvToWatch] = await Promise.all([
    fetch(`${url}/movie/popular?api_key=${api_config.API_KEY}&page=1`),
    fetch(`${url}/movie/top_rated?api_key=${api_config.API_KEY}&page=1`),
    fetch(`${url}/tv/top_rated?api_key=${api_config.API_KEY}&page=1`),
  ])
  return {
    props: {
      populars: await populars.json(),
      movieToWatch: await movieToWatch.json(),
      tvToWatch: await tvToWatch.json(),
    },
  }
}
