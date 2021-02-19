import React, { useEffect, useState } from 'react'
import { BottomNavigation } from '@material-ui/core'
import LiveTvIcon from '@material-ui/icons/LiveTv'
import MovieIcon from '@material-ui/icons/Movie'
import TheatersIcon from '@material-ui/icons/Theaters'
import styles from './PopularGroup.module.scss'
import PopularContainer from '../PopularContainer/PopularContainer'
import { BottomNavigationStyled } from '../Mui-custom/BottomNavigation/BottomNavigation'
function PopularGroup({ populars }: any) {
  const [value, setValue] = React.useState<number>(0)
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
          <BottomNavigationStyled label='Streaming' icon={<MovieIcon />} />
          <BottomNavigationStyled label='On Tv' icon={<LiveTvIcon />} />
          <BottomNavigationStyled label='In Theaters' icon={<TheatersIcon />} />
        </BottomNavigation>
      </div>
      <PopularContainer populars={populars} />
    </div>
  )
}

export default PopularGroup
