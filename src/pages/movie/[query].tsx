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
function MoviePage({ movies }: any) {
  console.log(movies)
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
      <Navigation />
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
            count={5}
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
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${params.query}?api_key=${process.env.API_KEY}&page=${page}`
  )
  const movies = await res.json()
  return {
    props: {
      movies,
    },
  }
}
export default MoviePage
