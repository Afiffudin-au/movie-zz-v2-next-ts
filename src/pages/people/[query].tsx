import { makeStyles } from '@material-ui/core'
import { Pagination, PaginationItem } from '@material-ui/lab'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import CardPeople from '../../components/CardPeople/CardPeople'
import GridLayout from '../../components/GridLayout/GridLayout'
import Navigation from '../../components/Navigation/Navigation'
import styles from './PeoplePage.module.scss'
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
      <Navigation />
      <div className={styles.peoplePage}>
        <GridLayout>
          {peoples?.results?.map((item: PeopleItem, index: number) => (
            <CardPeople
              url={process.env.REACT_APP_PEOPLE_DETAIL}
              id={item.id}
              key={item.id}
              name={item.name}
              image={`${process.env.REACT_APP_POSTER_URL}${item.profile_path}`}
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
  const page = context.query.page || 1
  const res = await fetch(
    `${process.env.REACT_APP_POPULAR_PEOPLE}?api_key=${process.env.API_KEY}&page=${page}`
  )
  const peoples = await res.json()
  return {
    props: {
      peoples,
    },
  }
}
