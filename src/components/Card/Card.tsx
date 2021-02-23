import React from 'react'
import StarRateIcon from '@material-ui/icons/StarRate'
import { amber } from '@material-ui/core/colors'
import styles from './Card.module.scss'
import { LightTooltip } from '../Mui-custom/LightTooltip/LightTooltip'
import LazyLoad from 'react-lazyload'
import { useRouter } from 'next/router'
export interface CardOption {
  url?: string
  mediaType?: string
  styleProps?: {}
  id: Required<number | string | undefined>
  releaseDate?: any
  originalTitle?: string
  posterPath?: any
  voteAverage?: number | string
}
function Card({
  url,
  mediaType,
  styleProps,
  id,
  releaseDate,
  originalTitle,
  posterPath,
  voteAverage,
}: CardOption) {
  const router = useRouter()
  const handleDetail = () => {
    const query = router.query
    query.url = url
    router.push({
      pathname: `/detail/${id}`,
      query: query,
    })
  }
  return (
    <div className={styles.Card} style={styleProps}>
      <div onClick={handleDetail} className={styles.CardContent}>
        <LazyLoad>
          <LightTooltip
            enterDelay={10}
            title={originalTitle || ''}
            placement='top'
            arrow>
            <img src={posterPath} alt={originalTitle} />
          </LightTooltip>
        </LazyLoad>
        <div className={styles.Card_desc}>
          <h1>{originalTitle}</h1>
          <p>{releaseDate}</p>
        </div>
        <div className={styles.CardStarRate}>
          <StarRateIcon style={{ color: amber[600] }} />
          <span>{voteAverage}</span>
        </div>
      </div>
    </div>
  )
}

export default Card
