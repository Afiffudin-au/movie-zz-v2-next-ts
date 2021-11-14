import React, { useState } from 'react'
import StarRateIcon from '@material-ui/icons/StarRate'
import { amber } from '@material-ui/core/colors'
import styles from './CardInlineFlex.module.scss'
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
  voteAverage?: number | string
}
function CardInlineFlex({
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
              width={220}
              height={330}
              objectFit='fill'
              quality={100}
              placeholder='blur'
              blurDataURL='/220x330.png'
            />
          </div>
        </LightTooltip>

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

export default CardInlineFlex
