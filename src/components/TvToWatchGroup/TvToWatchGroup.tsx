import { BottomNavigation } from '@material-ui/core'
import React, { useEffect, useRef } from 'react'
import StarIcon from '@material-ui/icons/Star'
import TodayIcon from '@material-ui/icons/Today'
import styles from './TvToWatchGroup.module.scss'
import TvToWatchContainer from '../TvToWatchContainer/TvToWatchContainer'
import { BottomNavigationStyled } from '../Mui-custom/BottomNavigation/BottomNavigation'
function TvToWatchGroup({ tvToWatch }: any) {
  const [value, setValue] = React.useState<number>(0)
  return (
    <div className={styles.tvToWatchGroup}>
      <div className={styles.tvToWatchGroupWrap}>
        <h1>Tv to watch</h1>
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue)
          }}
          showLabels
          style={{ width: '320px' }}>
          <BottomNavigationStyled label='Top Rated' icon={<StarIcon />} />
          <BottomNavigationStyled label='Airing Today' icon={<TodayIcon />} />
        </BottomNavigation>
      </div>
      <TvToWatchContainer tvToWatch={tvToWatch} />
    </div>
  )
}

export default TvToWatchGroup
