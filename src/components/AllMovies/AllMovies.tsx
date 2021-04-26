import React, { useState, useEffect } from 'react'
import Pagination from '@material-ui/lab/Pagination'
import styles from './AllMovies.module.scss'
import { MovieCardItems } from '../../interfaces/movieCardItem'
import { StyledLinearProgress } from '../Mui-custom/LoadingProgress/LoadingProgress'
import { useGetAllMovie } from '../../custom-hooks/useAllMovie/useGetAllMovie'
import { PaginationItem } from '@material-ui/lab'
import { makeStyles } from '@material-ui/core'
import GridLayout from '../GridLayout/GridLayout'
import Card, { CardOption } from '../Card/Card'
function AllMovies() {
  const { getAllMovie, loading, dataMovies, url } = useGetAllMovie()
  const [pages, setPages] = useState<number>(1)
  const handleChange = (event: any, value: number) => {
    const AllMovies: any = document.querySelector('.allMovies-dot')
    window.scrollTo(0, AllMovies?.offsetTop - 50)
    setPages(value)
    getAllMovie(value)
  }
  useEffect(() => {
    getAllMovie(pages)
  }, [])
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
    <div className={`${styles.allMovies} allMovies-dot`}>
      {loading && <StyledLinearProgress />}
      <div className={styles.title}>
        <h1>movies to watch by populars</h1>
      </div>
      <GridLayout>
        {dataMovies &&
          dataMovies?.results?.map((item: MovieCardItems, index: number) => (
            <MemoizedChildComponent
              url={process.env.REACT_APP_MOVIE_DETAIL}
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
      <div className={styles.allMoviespagenation}>
        <Pagination
          count={40}
          page={pages}
          onChange={handleChange}
          className={classes.root}
          renderItem={(item) => <PaginationItem {...item} />}
        />
      </div>
    </div>
  )
}
function ChildComponent({
  url,
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
export default AllMovies
