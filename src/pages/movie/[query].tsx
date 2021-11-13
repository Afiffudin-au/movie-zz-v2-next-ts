import React from 'react'
import styles from './MoviePage.module.scss'
import Navigation from '../../components/Navigation/Navigation'
import GridLayout from '../../components/GridLayout/GridLayout'
import { MovieCardItems } from '../../interfaces/movieCardItem'
import Card from '../../components/Card/Card'
import { makeStyles } from '@material-ui/core'
import { Pagination, PaginationItem } from '@material-ui/lab'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
function MoviePage({ movies, queryPath }: any) {
  const [pages, setPages] = useState<number>(1)
  const router = useRouter()
  const useStyles = makeStyles((theme: any) => ({
    root: {
      '& .Mui-selected': {
        backgroundColor: 'transparent',
        color: '#19D5C6',
      },
    },
  }))
  const classes = useStyles()
  const handleChange = (event: any, value: any) => {
    setPages(value)
    const path = router.pathname
    const query = router.query
    query.page = value
    router.push({ pathname: path, query: query })
  }
  return (
    <>
      <Head>
        <title>Movie {queryPath}</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          name='description'
          content='Movie-zz provides various movies, tv and peoples from all over the world'
        />
        <meta
          property='og:title'
          content='Awesome movies, tv, and peoples - MovieZzNextTs'
        />
        <meta
          property='og:url'
          content={`${process.env.BASE_PATH}/movie/${queryPath}`}
        />
        <meta property='og:site_name' content='MovieZzNextTs' />
        <meta
          property='og:image'
          content={
            process.env.REACT_APP_POSTER_URL2 + movies.results[0].poster_path
          }
        />
        <meta property='og:image:alt' content='image poster' />
        <meta property='og:type' content='website' />
        <meta
          name='og:description'
          content='Movie-zz provides various movies, tv and peoples from all over the world'
        />
      </Head>
      <Navigation homeBack={true} />
      <div className={styles.moviePage}>
        <GridLayout>
          {movies?.results?.map((item: MovieCardItems, index: number) => (
            <Card
              url={process.env.REACT_APP_MOVIE_DETAIL}
              mediaType={item.media_type}
              styleProps={{ display: 'block', width: '100%' }}
              id={item.id}
              releaseDate={item.release_date || item.first_air_date}
              originalTitle={item.original_title || item.original_name}
              posterPath={`${process.env.REACT_APP_POSTER_URL}${item.poster_path}`}
              voteAverage={item.vote_average || 0}
              key={item.id}
            />
          ))}
        </GridLayout>
        <div className={styles.pagenation}>
          <Pagination
            count={40}
            page={pages}
            onChange={handleChange}
            className={classes.root}
            renderItem={(item) => <PaginationItem {...item} />}
          />
        </div>
      </div>
    </>
  )
}
export const getServerSideProps = async (context: any) => {
  const { params } = context
  const page = context.query.page || 1
  const queryPath = params.query
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${params.query}?api_key=${process.env.API_KEY}&page=${page}`
  )
  const movies = await res.json()
  return {
    props: {
      movies,
      queryPath,
    },
  }
}
export default MoviePage
