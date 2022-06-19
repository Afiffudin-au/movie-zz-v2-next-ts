import React from 'react'
import { useEffect } from 'react'
import useLiveSearch from '../../custom-hooks/useSuggestion'
import styles from './AutoSuggest.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'
function AutoSearch({ query }: any) {
  const router = useRouter()
  const { getSuggestion, keywords, reset } = useLiveSearch()
  useEffect(() => {
    const userText = query?.replace(/^\s+/, '').replace(/\s+$/, '')
    let controller = new AbortController()
    getSuggestion(controller, query, userText)
    return () => {
      controller.abort()
    }
  }, [query])
  useEffect(() => {
    reset()
  }, [router.asPath])
  return (
    <>
      {keywords?.length > 0 && (
        <article className={styles.suggest}>
          {keywords?.slice(0, 10).map((item: any, index: number) => (
            <div key={item} className={styles.keywordItem}>
              <Link href={`/multi-search/${item}`}>
                <a>
                  <p className={styles.title}>{item}</p>
                </a>
              </Link>
            </div>
          ))}
        </article>
      )}
    </>
  )
}

export default AutoSearch
