import React, { useEffect } from 'react'
import Pagination from '@material-ui/lab/Pagination'
import styles from './AllMovies.module.scss'
import Card from '../Card/Card'
import { CardOption } from '../Card/Card'
import { MovieCardItems } from '../../interfaces/movieCardItem'
import { StyledLinearProgress } from '../Mui-custom/LoadingProgress/LoadingProgress'
function AllMovies({ dataMovies }: { dataMovies: Required<any> }) {
  const [pages, setPages] = React.useState(1)
  return (
    <div className={styles.allMovies}>
      {/* {
        loading && <StyledLinearProgress/>
      } */}
      <div className={styles.title}>
        <h1>All movies to watch</h1>
      </div>
      <div className={styles.allMoviesGrid}>
        {dataMovies?.results?.map((item: MovieCardItems, index: number) => (
          <MemoizedChildComponent
            // url={url}
            styleProps={{ display: 'block', width: '100%' }}
            id={item.id}
            releaseDate={item.release_date || item.first_air_date}
            originalTitle={item.original_title || item.original_name}
            posterPath={`${process.env.REACT_APP_POSTER_URL}${item.poster_path}`}
            voteAverage={item.vote_average || 0}
            key={item.id}
          />
        ))}
      </div>
      <div className={styles.allMoviespagenation}>
        {/* <Pagination
          count={total_pages}
          page={pages}
          onChange={handleChange}
          color='primary'
        /> */}
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
