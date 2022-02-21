import { BottomNavigation } from '@material-ui/core'
import { BottomNavigationStyled } from '../Mui-custom/BottomNavigation/BottomNavigation'
import React, { useState } from 'react'
import StarIcon from '@material-ui/icons/Star'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import styles from './MovieToWatchGroup.module.scss'
import MovieToWatchContainer from '../MovieToWatchContainer/MovieToWatchContainer'
import useGetMovieToWatch from '../../custom-hooks/useMovieToWatch/useGetMovieToWatch'
function MovieToWatchGroup({ movieToWatchSSR }: { movieToWatchSSR: any }) {
  const [data, setData] = useState<any>(movieToWatchSSR)
  const [value, setValue] = React.useState<number>(0)
  const { getMovieTopRated, getMovieUpComing } = useGetMovieToWatch()

  return (
    <div className={styles.movieToWatchGroup}>
      <div className={styles.movieToWatchGroupWrap}>
        <h1>Movies to watch</h1>
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue)
          }}
          showLabels
          style={{ width: '320px' }}>
          <BottomNavigationStyled
            label='Top Rated'
            onClick={() => {
              setData(false)
              getMovieTopRated()
            }}
            icon={<StarIcon />}
          />
          <BottomNavigationStyled
            label='Upcoming'
            onClick={() => {
              setData(false)
              getMovieUpComing()
            }}
            icon={<AccessTimeIcon />}
          />
        </BottomNavigation>
      </div>
      <MovieToWatchContainer movieToWatchSSR={data} />
    </div>
  )
}
export default MovieToWatchGroup
