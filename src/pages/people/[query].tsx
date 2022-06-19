import { makeStyles } from '@material-ui/core'
import { Pagination, PaginationItem } from '@material-ui/lab'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import CardPeople from '../../components/CardPeople'
import GridLayout from '../../components/GridLayout'
import Navigation from '../../components/Navigation'
import styles from './PeoplePage.module.scss'
import Head from 'next/head'
import { api_config } from '../../api-config'
interface PeopleItem {
  name: string
  profile_path: string
  id: string
}
function PeoplePage({ peoples }: { peoples: Required<any> }) {
  const router = useRouter()
  const [pages, setPages] = useState<number>(1)
  const useStyles = makeStyles((theme: any) => ({
    root: {
      '& .Mui-selected': {
        backgroundColor: 'transparent',
        color: '#19D5C6',
      },
    },
  }))
  const classes = useStyles()
  const handleChange = (event: any, value: any) => {
    setPages(value)
    const path = router.pathname
    const query = router.query
    query.page = value
    router.push({
      pathname: path,
      query: query,
    })
  }
  return (
    <>
      <Head>
        <title>Popular Peoples</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          name='description'
          content='Movie-zz provides various peoples from all over the world'
        />
        <meta
          property='og:title'
          content='Awesome movies, tv, and peoples - MovieZzNextTs'
        />
        <meta
          property='og:url'
          content={`${process.env.BASE_PATH}/people/popular`}
        />
        <meta property='og:site_name' content='MovieZzNextTs' />
        <meta
          property='og:image'
          content={
            process.env.NEXT_APP_POSTER_URL2 + peoples.results[0].profile_path
          }
        />
        <meta property='og:image:alt' content='image poster' />
        <meta property='og:type' content='website' />
        <meta
          name='og:description'
          content='Movie-zz provides various peoples from all over the world'
        />
      </Head>
      <Navigation homeBack={true} />
      <div className={styles.peoplePage}>
        <GridLayout>
          {peoples?.results?.map((item: PeopleItem, index: number) => (
            <CardPeople
              url={process.env.NEXT_APP_PEOPLE_DETAIL}
              id={item.id}
              key={item.id}
              name={item.name}
              image={`${process.env.NEXT_APP_POSTER_URL}${item.profile_path}`}
            />
          ))}
        </GridLayout>
        <div className={styles.pagenation}>
          <Pagination
            count={40}
            page={pages}
            onChange={handleChange}
            className={classes.root}
            renderItem={(item) => <PaginationItem {...item} />}
          />
        </div>
      </div>
    </>
  )
}

export default PeoplePage
export const getServerSideProps = async (context: any) => {
  const url = `${api_config.BASE_URL}/${api_config.API_VERSION}`
  const page = context.query.page || 1
  const res = await fetch(
    `${url}/person/popular?api_key=${api_config.API_KEY}&page=${page}`
  )
  const peoples = await res.json()
  return {
    props: {
      peoples,
    },
  }
}
