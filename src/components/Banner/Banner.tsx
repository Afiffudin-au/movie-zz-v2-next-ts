import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { Container, Jumbotron } from 'react-bootstrap'
import { useAppDispatch } from '../../store/store'
import styles from './Banner.module.scss'
function Banner() {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const router = useRouter()
  const handleSubmit = (e: any) => {
    e.preventDefault()
    const userText = searchQuery.replace(/^\s+/, '').replace(/\s+$/, '')
    if (userText === '') {
      return
    }
    router.push(`/multi-search/${searchQuery}`)
  }
  return (
    <Jumbotron fluid className={styles.jumbotron}>
      <Container>
        <h1 className={styles.welcome}>Welcome.</h1>
        <p className={styles.desc}>
          Millions of movies, TV shows and people to discover. Explore now.
        </p>
        <div className={`${styles.banner_search} mt-5`}>
          <form className={styles.banner_form} onSubmit={handleSubmit}>
            <input
              aria-label='input search'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              type='text'
              placeholder='Search for movies,Tv Shows and person'
            />
            <button onClick={handleSubmit}>Search</button>
          </form>
        </div>
      </Container>
    </Jumbotron>
  )
}

export default Banner
