import React from 'react'
import { useState } from 'react'
import LazyLoad from 'react-lazyload'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import styles from './DetailPage.module.scss'
function DetailPage({ dataDetail }: any) {
  const [imageLoad, setImageLoad] = useState<boolean>(false)
  const [display, setDisplay] = useState<string>('none')
  const handleImageLoad = () => {
    setDisplay('block')
    setImageLoad(true)
  }
  return (
    <div
      className={styles.detailPage}
      style={{
        backgroundImage: `url(${process.env.REACT_APP_POSTER_URL}${dataDetail.backdrop_path})`,
      }}>
      <div className={styles.detailPage__customBg}>
        <div className={styles.detailPage__content}>
          <div className={styles.detailPage__img}>
            {!imageLoad && (
              <SkeletonTheme color='#455a64' highlightColor='#78909c'>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <Skeleton count={1} height={400} width={280} duration={1.1} />
                </div>
              </SkeletonTheme>
            )}
            <LazyLoad>
              <img
                style={{ display: display }}
                src={`${process.env.REACT_APP_BIG_POSTER_URL}${dataDetail.poster_path}`}
                alt={dataDetail.title}
                onLoad={handleImageLoad}
              />
            </LazyLoad>
          </div>
          <div className={styles.detailPage__contentText}>
            <h1>{dataDetail.title}</h1>
            <div className={styles.detailPage__genre}>
              {dataDetail?.genres?.map(
                (genre: { id: string; name: string }, index: number) => (
                  <p key={genre.id}>{genre.name}</p>
                )
              )}
            </div>
            <strong>Overview</strong>
            <p>{dataDetail.overview}</p>
            <strong>Budget</strong>
            <p>$ {dataDetail.budget}</p>
            <strong>Vote Average</strong>
            <p>
              {dataDetail.vote_average} of {dataDetail.vote_count} people
            </p>
            <strong>Language</strong>
            {dataDetail?.spoken_languages?.map(
              (item: { name: string }, index: number) => (
                <p key={index}>{item.name}</p>
              )
            )}
            <strong>Release Date</strong>
            <p>{dataDetail.release_date}</p>
            {dataDetail?.homepage && (
              <a
                href={dataDetail.homepage}
                target='_blank'
                rel='noopener noreferrer'
                className={styles.watchButton}>
                Watch Now
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailPage
export const getServerSideProps = async (context: any) => {
  const url = context.query.url
  const id = context.query.id
  const res = await fetch(`${url}${id}?api_key=${process.env.API_KEY}`)
  const dataDetail = await res.json()
  return {
    props: {
      dataDetail,
    },
  }
}
