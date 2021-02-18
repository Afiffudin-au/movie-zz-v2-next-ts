import React, { useEffect, useState } from 'react'
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import LiveTvIcon from '@material-ui/icons/LiveTv'
import MovieIcon from '@material-ui/icons/Movie'
import TheatersIcon from '@material-ui/icons/Theaters'
import styles from './PopularGroup.module.scss'
import PopularContainer from '../PopularContainer/PopularContainer'
function PopularGroup() {
  const [value, setValue] = React.useState(0)
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
          <BottomNavigationAction label='Streaming' icon={<MovieIcon />} />
          <BottomNavigationAction label='On Tv' icon={<LiveTvIcon />} />
          <BottomNavigationAction label='In Theaters' icon={<TheatersIcon />} />
        </BottomNavigation>
      </div>
      {/* <PopularContainer /> */}
    </div>
  )
}

export default PopularGroup
