import React, { useState } from 'react'
import { Jumbotron } from 'react-bootstrap'
import styles from './Banner.module.scss'
function Banner() {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const handleSubmit = (e: any) => {
    e.preventDefault()
  }
  return (
    <Jumbotron fluid className={styles.jumbotron}>
      <div className={styles.banner_wrapper}>
        <h1 className={styles.welcome}>Welcome.</h1>
        <p className={styles.desc}>
          Millions of movies, TV shows and people to discover. Explore now.
        </p>
      </div>
      <div className={styles.banner_search}>
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
    </Jumbotron>
  )
}

export default Banner
