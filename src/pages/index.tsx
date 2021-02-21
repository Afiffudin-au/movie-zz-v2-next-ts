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
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navigation />
      <Banner />
      <PopularGroup popularsSSR={populars} />
      {/* <MovieToWatchGroup movieToWatch={movieToWatch} /> */}
      {/* <TvToWatchGroup tvToWatch={tvToWatch} /> */}
      {/* <AllMovies dataMovies={populars} /> */}
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
