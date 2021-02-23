import { makeStyles } from '@material-ui/core'
import { Pagination } from '@material-ui/lab'
import React, { useState } from 'react'
import Card, { CardOption } from '../../components/Card/Card'
import GridLayout from '../../components/GridLayout/GridLayout'
import Navigation from '../../components/Navigation/Navigation'
import { MovieCardItems } from '../../interfaces/movieCardItem'
import { PaginationItem } from '@material-ui/lab'
import styles from './MovieSearch.module.scss'
import { useRouter } from 'next/router'
function MovieSearch({ resultMovies }: any) {
  const router = useRouter()
  const [pages, setPages] = useState<number>(1)
  const handleChange = (event: any, value: any) => {
    setPages(value)
    const path = router.pathname
    const query = router.query
    query.page = value
    router.push({
      pathname: path,
      query: query,
    })
  }
  const useStyles = makeStyles((theme: any) => ({
    root: {
      '& .Mui-selected': {
        backgroundColor: 'transparent',
        color: '#19D5C6',
      },
    },
  }))
  const classes = useStyles()
  return (
    <>
      <Navigation />
      <div className={styles.movieSearch}>
        <GridLayout>
          {resultMovies &&
            resultMovies?.results?.map(
              (item: MovieCardItems, index: number) => (
                <MemoizedChildComponent
                  key={item.id}
                  mediaType={item.media_type}
                  styleProps={{ display: 'block', width: '100%' }}
                  id={item.id}
                  releaseDate={item.release_date || item.first_air_date}
                  originalTitle={item.original_title || item.original_name}
                  posterPath={`${process.env.REACT_APP_POSTER_URL}${item.poster_path}`}
                  voteAverage={item.vote_average || 0}
                />
              )
            )}
        </GridLayout>
        <div className={styles.pagenation}>
          <Pagination
            count={2}
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
function ChildComponent({
  url,
  mediaType,
  styleProps,
  id,
  releaseDate,
  originalTitle,
  posterPath,
  voteAverage,
}: Partial<CardOption>) {
  return (
    <Card
      url={url}
      mediaType={mediaType}
      styleProps={styleProps}
      id={id}
      releaseDate={releaseDate}
      originalTitle={originalTitle}
      posterPath={posterPath}
      voteAverage={voteAverage}
    />
  )
}
function compare(prevProps: any, nextProps: any) {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps)
}
const MemoizedChildComponent = React.memo(ChildComponent, compare)
export const getServerSideProps = async (context: any) => {
  const { params } = context
  const page = context.query.page
  const res = await fetch(
    `https://api.themoviedb.org/3/search/multi?api_key=${process.env.API_KEY}&query=${params.query}&page=${page}`
  )
  const resultMovies = await res.json()
  return {
    props: {
      resultMovies,
    },
  }
}
export default MovieSearch
