import Head from 'next/head'
import React from 'react'
import AllMovies from '../components/AllMovies/AllMovies'
import Banner from '../components/Banner/Banner'
import MovieToWatchGroup from '../components/MovieToWatchGroup/MovieToWatchGroup'
import Navigation from '../components/Navigation/Navigation'
import PopularGroup from '../components/PopularGroup/PopularGroup'
import TvToWatchGroup from '../components/TvToWatchGroup/TvToWatchGroup'
export default function Home({ populars, movieToWatch, tvToWatch }: any) {
  return (
    <div className='home'>
      <Head>
        <title>Movie-zz-v2-next-ts</title>
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
          content={
            process.env.REACT_APP_POSTER_URL2 + populars.results[0].poster_path
          }
        />
        <meta property='og:image:alt' content='image poster' />
        <meta property='og:type' content='website' />
        <meta
          name='og:description'
          content='Movie-zz provides various movies, tv and peoples from all over the world'
        />
        <meta name="google-site-verification" content="Gy8DecfJhmdkMec5xQrsKKV6mriP35Ynkhxl1_eX3oU" />
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
  const [populars, movieToWatch, tvToWatch] = await Promise.all([
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.API_KEY}&page=1`
    ),
  ])
  return {
    props: {
      populars: await populars.json(),
      movieToWatch: await movieToWatch.json(),
      tvToWatch: await tvToWatch.json(),
    },
  }
}
