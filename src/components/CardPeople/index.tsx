import React from 'react'
import { LightTooltip } from '../Mui-custom/LightTooltip/LightTooltip'
import styles from './CardPeople.module.scss'
import Image from 'next/image'
interface CardPeopleOption {
  name?: string
  url: Required<string | undefined>
  image?: any
  id: Required<string>
  role?: string
}
function CardPeople({ name, url, image, id, role }: CardPeopleOption) {
  return (
    <div className={styles.cardPeople}>
      <div className={styles.content}>
        <LightTooltip enterDelay={10} title={name || ''} placement='top' arrow>
          <div>
            <Image
              src={image}
              alt={name}
              width={100}
              height={150}
              placeholder='blur'
              blurDataURL='/150x100.png'
              quality={100}
              objectFit='fill'
            />
          </div>
        </LightTooltip>
        <div className={styles.subTitle}>
          <p className={styles.name}>{name}</p>
          {role && <p className={styles.role}>{role}</p>}
        </div>
      </div>
    </div>
  )
}

export default CardPeople
