import { BottomNavigation } from '@material-ui/core'
import React, { useState } from 'react'
import StarIcon from '@material-ui/icons/Star'
import TodayIcon from '@material-ui/icons/Today'
import styles from './TvToWatchGroup.module.scss'
import TvToWatchContainer from '../TvToWatchContainer'
import useTvToWatch from '../../custom-hooks/useTvToWatch'
import LiveTvIcon from '@material-ui/icons/LiveTv'
import { BottomNavigationStyled } from '../Mui-custom/BottomNavigation/BottomNavigation'
function TvToWatchGroup({ tvToWatchSSR }: { tvToWatchSSR: any }) {
  const [data, setData] = useState<any>(tvToWatchSSR)
  const [value, setValue] = React.useState<number>(0)
  const { getTvTopRated, getTvPopular, getTvAiringToday } = useTvToWatch()
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
          <BottomNavigationStyled
            onClick={() => {
              setData(false)
              getTvTopRated()
            }}
            label='Top Rated'
            icon={<StarIcon />}
          />
          <BottomNavigationStyled
            onClick={() => {
              setData(false)
              getTvPopular()
            }}
            label='Popular'
            icon={<LiveTvIcon />}
          />
          <BottomNavigationStyled
            label='Airing Today'
            onClick={() => {
              setData(false)
              getTvAiringToday()
            }}
            icon={<TodayIcon />}
          />
        </BottomNavigation>
      </div>
      <TvToWatchContainer tvToWatchSSR={data} />
    </div>
  )
}

export default TvToWatchGroup
