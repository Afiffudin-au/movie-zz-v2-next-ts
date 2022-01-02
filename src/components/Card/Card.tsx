import React from 'react'
import StarRateIcon from '@material-ui/icons/StarRate'
import { amber } from '@material-ui/core/colors'
import styles from './Card.module.scss'
import { LightTooltip } from '../Mui-custom/LightTooltip/LightTooltip'
import { useRouter } from 'next/router'
import Image from 'next/image'
export interface CardOption {
  url?: string
  mediaType?: string
  styleProps?: {}
  id: Required<number | string | undefined>
  releaseDate?: any
  originalTitle?: string
  posterPath?: any
  voteAverage?: number
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
    if (mediaType === 'movie') {
      query.url = process.env.REACT_APP_MOVIE_DETAIL
    }
    if (mediaType === 'tv') {
      query.url = process.env.REACT_APP_PEOPLE_DETAIL
    }
    if (url) {
      query.url = url
    }
    router.push({
      pathname: `/detail/${id}`,
      query: query,
    })
  }
  return (
    <div className={styles.Card} style={styleProps}>
      <div onClick={handleDetail} className={styles.CardContent}>
        <LightTooltip
          enterDelay={10}
          title={originalTitle || ''}
          placement='top'
          arrow>
          <div>
            <Image
              src={posterPath}
              alt={originalTitle}
              height={150}
              width={100}
              objectFit='fill'
              placeholder='blur'
              blurDataURL='/150x100.png'
              quality={100}
            />
          </div>
        </LightTooltip>
        <div className={styles.Card_desc}>
          <h1>{originalTitle}</h1>
          <p>{releaseDate}</p>
        </div>
        <div className={styles.CardStarRate}>
          <StarRateIcon style={{ color: amber[600] }} />
          <span>{voteAverage?.toFixed(1)}</span>
        </div>
      </div>
    </div>
  )
}

export default Card
