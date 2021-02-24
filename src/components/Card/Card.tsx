import React, { useState } from 'react'
import StarRateIcon from '@material-ui/icons/StarRate'
import { amber } from '@material-ui/core/colors'
import styles from './Card.module.scss'
import { LightTooltip } from '../Mui-custom/LightTooltip/LightTooltip'
import LazyLoad from 'react-lazyload'
import { useRouter } from 'next/router'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
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
  const [imageLoad, setImageLoad] = useState<boolean>(false)
  const [display, setDisplay] = useState<string>('none')
  const router = useRouter()
  const handleDetail = () => {
    const query = router.query
    query.url = url
    router.push({
      pathname: `/detail/${id}`,
      query: query,
    })
  }
  const handleImageLoad = () => {
    setDisplay('block')
    setImageLoad(true)
  }
  return (
    <div className={styles.Card} style={styleProps}>
      <div onClick={handleDetail} className={styles.CardContent}>
        {!imageLoad && (
          <SkeletonTheme color='#455a64' highlightColor='#78909c'>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <Skeleton count={1} height={150} width={100} duration={1.1} />
              <Skeleton count={1} width={100} duration={1.1} />
              <Skeleton count={1} width={100} duration={1.1} />
            </div>
          </SkeletonTheme>
        )}
        <LazyLoad>
          <LightTooltip
            enterDelay={10}
            title={originalTitle || ''}
            placement='top'
            arrow>
            <img
              style={{ display: display }}
              src={posterPath}
              alt={originalTitle}
              onLoad={handleImageLoad}
            />
          </LightTooltip>
        </LazyLoad>
        {imageLoad && (
          <>
            <div className={styles.Card_desc}>
              <h1>{originalTitle}</h1>
              <p>{releaseDate}</p>
            </div>
            <div className={styles.CardStarRate}>
              <StarRateIcon style={{ color: amber[600] }} />
              <span>{voteAverage}</span>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Card
