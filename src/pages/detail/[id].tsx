import React from 'react'
import LazyLoad from 'react-lazyload'
import styles from './DetailPage.module.scss'
function DetailPage({ dataDetail }: any) {
  return (
    <div
      className={styles.detailPage}
      style={{
        backgroundImage: `url(${process.env.REACT_APP_POSTER_URL}${dataDetail.backdrop_path})`,
      }}>
      <div className={styles.detailPage__customBg}>
        <div className={styles.detailPage__content}>
          <div className={styles.detailPage__img}>
            <LazyLoad>
              <img
                src={`${process.env.REACT_APP_BIG_POSTER_URL}${dataDetail.poster_path}`}
                alt=''
              />
            </LazyLoad>
          </div>
          <div className={styles.detailPage__contentText}>
            <h1>{dataDetail.title}</h1>
            <div className={styles.detailPage__genre}>
              {dataDetail?.genres?.map(
                (genre: { id: string; name: string }, index: number) => (
                  <p key={genre.id} className='mr-2'>
                    {genre.name}
                  </p>
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
