import { BottomNavigation } from '@material-ui/core'
import { BottomNavigationStyled } from '../Mui-custom/BottomNavigation/BottomNavigation'
import React, { useEffect } from 'react'
import StarIcon from '@material-ui/icons/Star'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import styles from './MovieToWatchGroup.module.scss'
import MovieToWatchContainer from '../MovieToWatchContainer/MovieToWatchContainer'
function MovieToWatchGroup({ movieToWatch }: any) {
  const [value, setValue] = React.useState(0)
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
          <BottomNavigationStyled label='Top Rated' icon={<StarIcon />} />
          <BottomNavigationStyled label='Upcoming' icon={<AccessTimeIcon />} />
        </BottomNavigation>
      </div>
      <MovieToWatchContainer movieToWatch={movieToWatch} />
    </div>
  )
}
export default MovieToWatchGroup
