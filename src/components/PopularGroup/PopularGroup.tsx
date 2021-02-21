import React, { useEffect } from 'react'
import { BottomNavigation } from '@material-ui/core'
import LiveTvIcon from '@material-ui/icons/LiveTv'
import MovieIcon from '@material-ui/icons/Movie'
import TheatersIcon from '@material-ui/icons/Theaters'
import styles from './PopularGroup.module.scss'
import PopularContainer from '../PopularContainer/PopularContainer'
import { BottomNavigationStyled } from '../Mui-custom/BottomNavigation/BottomNavigation'
import { useGetPopular } from '../../custom-hooks/usePopular/useGetPopular'
function PopularGroup({ popularsSSR }: any) {
  const [value, setValue] = React.useState<number>(0)
  const {
    getMoviePopular,
    getTvPopular,
    getMoviePopularInTheater,
  } = useGetPopular()
  useEffect(() => {
    getMoviePopular()
  }, [])
  return (
    <div className={styles.popularGroup}>
      <div className={styles.popularWrap}>
        <h1>What's Popular</h1>
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue)
          }}
          showLabels
          style={{ width: '320px' }}>
          <BottomNavigationStyled
            onClick={getMoviePopular}
            label='Streaming'
            icon={<MovieIcon />}
          />
          <BottomNavigationStyled
            onClick={getTvPopular}
            label='On Tv'
            icon={<LiveTvIcon />}
          />
          <BottomNavigationStyled
            onClick={getMoviePopularInTheater}
            label='In Theaters'
            icon={<TheatersIcon />}
          />
        </BottomNavigation>
      </div>
      <PopularContainer popularsSSR={popularsSSR} />
    </div>
  )
}

export default PopularGroup
