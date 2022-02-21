import React, { useState } from 'react'
import { Form, FormControl } from 'react-bootstrap'
import styles from './Search.module.scss'
import { useRouter } from 'next/router'
import AutoSearch from '../../AutoSearch/AutoSearch'
function Search() {
  const router = useRouter()
  const [query, setQuery] = useState<string>('')
  const handleSearch = (e: any) => {
    e.preventDefault()
    const userText = query.replace(/^\s+/, '').replace(/\s+$/, '')
    if (userText === '') {
      return
    }
    router.push(`/multi-search/${query}`)
  }
  return (
    <>
      <Form className={styles.form}>
        <div>
          <FormControl
            className={`mr-sm-2 ${styles.inputControl}`}
            type='text'
            placeholder='Search'
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={handleSearch} style={{ display: 'none' }} />
        </div>

        <AutoSearch query={query} />
      </Form>
    </>

  )
}

export default Search
