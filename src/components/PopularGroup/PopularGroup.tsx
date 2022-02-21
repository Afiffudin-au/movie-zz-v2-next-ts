import React, { useState } from 'react'
import { BottomNavigation } from '@material-ui/core'
import MovieIcon from '@material-ui/icons/Movie'
import TheatersIcon from '@material-ui/icons/Theaters'
import styles from './PopularGroup.module.scss'
import PopularContainer from '../PopularContainer/PopularContainer'
import { BottomNavigationStyled } from '../Mui-custom/BottomNavigation/BottomNavigation'
import useGetPopular from '../../custom-hooks/usePopular/useGetPopular'
function PopularGroup({ popularsSSR }: { popularsSSR: any }) {
  const [data, setData] = useState<any>(popularsSSR)
  const [value, setValue] = useState<number>(0)
  const { getMoviePopular, getMoviePopularInTheater } = useGetPopular()
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
            onClick={() => {
              setData(false)
              getMoviePopular()
            }}
            label='Streaming'
            icon={<MovieIcon />}
          />
          <BottomNavigationStyled
            onClick={() => {
              setData(false)
              getMoviePopularInTheater()
            }}
            label='In Theaters'
            icon={<TheatersIcon />}
          />
        </BottomNavigation>
      </div>
      <PopularContainer popularsSSR={data} />
    </div>
  )
}

export default PopularGroup
