import React from 'react'
import { useState } from 'react'
import LazyLoad from 'react-lazyload'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import Card from '../../components/Card/Card'
import CardPeople from '../../components/CardPeople/CardPeople'
import GridLayout from '../../components/GridLayout/GridLayout'
import styles from './DetailPage.module.scss'
import { MovieCardItems } from '../../interfaces/movieCardItem'
import { useRouter } from 'next/router'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Link from '@material-ui/core/Link'
import Head from 'next/head'
interface DetailPageProps {
  dataDetail: Required<any>
  dataPeople: Required<any>
  similars: Required<any>
  dataVideos: Required<any>
  id: Required<any>
}
interface PeopleCastItem {
  name: string
  profile_path: string
  id: string
  job: string
  character: string
}
function DetailPage({ dataDetail, dataPeople, similars, id }: DetailPageProps) {
  const router = useRouter()
  const { dataSimilar, mediaType } = similars
  const [imageLoad, setImageLoad] = useState<boolean>(false)
  const [display, setDisplay] = useState<string>('none')
  const sliceCast = dataPeople?.cast?.slice(0, 20)
  const sliceCrew = dataPeople?.crew?.slice(0, 20)
  const handleImageLoad = () => {
    setDisplay('block')
    setImageLoad(true)
  }
  const handleClick = (e: any) => {
    e.preventDefault()
    if (e.target.innerText === 'Home') {
      router.push('/')
    }
    if (e.target.innerText === 'Detail') {
      router.push(router.asPath)
    }
  }
  return (
    <div className={styles.detailPageRoot}>
      <Head>
        <title>Movie Detail</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          name='description'
          content='Movie-zz provides details of various movies, tv, and peoples from around the world'
        />
        <meta
          property='og:title'
          content='Awesome movies, tv, and peoples - MovieZzNextTs'
        />
        <meta
          property='og:url'
          content={`${process.env.BASE_PATH}/detail/${id}`}
        />
        <meta property='og:site_name' content='MovieZzNextTs' />
        <meta
          property='og:image'
          content={`${process.env.REACT_APP_BIG_POSTER_URL}${dataDetail.poster_path}`}
        />
        <meta property='og:image:alt' content='image poster' />
        <meta property='og:type' content='website' />
        <meta
          name='og:description'
          content='Movie-zz provides details of various movies, tv, and peoples from around the world'
        />
      </Head>
      <div className={styles.breadcrumb}>
        <Breadcrumbs aria-label='breadcrumb'>
          <Link onClick={handleClick}>Home</Link>
          <Link onClick={handleClick}>Detail</Link>
        </Breadcrumbs>
      </div>

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
                    <Skeleton
                      count={1}
                      height={400}
                      width={280}
                      duration={1.1}
                    />
                  </div>
                </SkeletonTheme>
              )}

              <img
                style={{ display: display }}
                src={`${process.env.REACT_APP_BIG_POSTER_URL}${dataDetail.poster_path}`}
                alt={dataDetail.title}
                onLoad={handleImageLoad}
              />
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
      <div className={styles.combinedContent}>
        <h2>Cast</h2>
        <GridLayout>
          {sliceCast?.map((item: PeopleCastItem, index: number) => (
            <CardPeople
              url={process.env.REACT_APP_PEOPLE_DETAIL}
              id={item.id}
              name={item.name}
              image={`${process.env.REACT_APP_POSTER_URL}${item.profile_path}`}
              role={item.character}
              key={item.id}
            />
          ))}
        </GridLayout>
        <h2>Crew</h2>
        <GridLayout>
          {sliceCrew?.map((item: PeopleCastItem, index: number) => (
            <CardPeople
              url={process.env.REACT_APP_PEOPLE_DETAIL}
              id={item.id}
              name={item.name}
              image={`${process.env.REACT_APP_POSTER_URL}${item.profile_path}`}
              role={item.job}
              key={index}
            />
          ))}
        </GridLayout>
        <h2>Similar Movies</h2>
        <GridLayout>
          {dataSimilar?.results?.map((item: MovieCardItems, index: number) => (
            <Card
              mediaType={mediaType}
              styleProps={{
                display: 'block',
                width: '100%',
                backgroundColor: 'transparent',
              }}
              id={item.id}
              releaseDate={item.release_date || item.first_air_date}
              originalTitle={item.original_title || item.original_name}
              posterPath={`${process.env.REACT_APP_POSTER_URL}${item.poster_path}`}
              voteAverage={item.vote_average || 0}
              key={item.id}
            />
          ))}
        </GridLayout>
      </div>
    </div>
  )
}

export default DetailPage
export const getServerSideProps = async (context: any) => {
  const url = context.query.url
  const id = context.query.id
  const key = id
  const [res, resPeople, resSimilar] = await Promise.all([
    fetch(`${url}${id}?api_key=${process.env.API_KEY}`),
    fetch(`${url}${id}/credits?api_key=${process.env.API_KEY}`),
    fetch(`${url}${id}/similar?api_key=${process.env.API_KEY}`),
  ])
  //for movie
  const dataDetail = await res.json()
  const dataPeople = await resPeople.json()
  const dataSimilar = await resSimilar.json()
  const similars = {
    dataSimilar,
    mediaType: '',
  }
  if (`${url}` === process.env.REACT_APP_MOVIE_DETAIL) {
    similars.mediaType = 'movie'
  }
  //for tv
  if (`${url}` === process.env.REACT_APP_TV_DETAIL) {
    similars.mediaType = 'tv'
  }

  return {
    props: {
      key,
      dataDetail,
      dataPeople,
      similars,
      id,
    },
  }
}
