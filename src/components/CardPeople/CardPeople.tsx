import React, { useState } from 'react'
import LazyLoad from 'react-lazyload'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { LightTooltip } from '../Mui-custom/LightTooltip/LightTooltip'
import styles from './CardPeople.module.scss'
interface CardPeopleOption {
  name?: string
  url: Required<string | undefined>
  image?: string
  id: Required<string>
  role?: string
}
function CardPeople({ name, url, image, id, role }: CardPeopleOption) {
  const [imageLoad, setImageLoad] = useState<boolean>(false)
  const [display, setDisplay] = useState<string>('none')
  const handleImageLoad = () => {
    setDisplay('block')
    setImageLoad(true)
  }
  return (
    <div className={styles.cardPeople}>
      <div className={styles.content}>
        {!imageLoad && (
          <SkeletonTheme color='#455a64' highlightColor='#78909c'>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <Skeleton count={1} height={150} width={'100%'} duration={1.1} />
              <Skeleton count={1} width={'100%'} duration={1.1} />
              <Skeleton count={1} width={'100%'} duration={1.1} />
            </div>
          </SkeletonTheme>
        )}
        <LazyLoad>
          <LightTooltip
            enterDelay={10}
            title={name || ''}
            placement='top'
            arrow>
            <img
              style={{ display: display }}
              className={styles.image}
              src={image}
              alt={name}
              onLoad={handleImageLoad}
            />
          </LightTooltip>
        </LazyLoad>
        {imageLoad && (
          <div className={styles.subTitle}>
            <p className={styles.name}>{name}</p>
            {role && <p className={styles.role}>{role}</p>}
          </div>
        )}
      </div>
    </div>
  )
}

export default CardPeople
