import React from 'react'
import HorizontalContainer from '../HorizontalContainer/HorizontalContainer'
import Card from '../Card/Card'
interface MovieCardItem {
  id: string | number
  release_date: any
  first_air_date: any
  original_title: string
  original_name: string
  poster_path: string
  vote_average: number
}
function PopularContainer({ populars }: { populars: any }) {
  return (
    <>
      {/* {loading && (
        <div className='loading'>
          <StyledLinearProgress />
        </div>
      )} */}
      <HorizontalContainer>
        {populars?.results?.map((item: MovieCardItem, index: number) => (
          <Card
            // url={url}

            id={item.id}
            releaseDate={item.release_date || item.first_air_date}
            originalTitle={item.original_title || item.original_name}
            posterPath={`${process.env.REACT_APP_POSTER_URL}${item.poster_path}`}
            voteAverage={item.vote_average || 0}
            key={item.id}
          />
        ))}
      </HorizontalContainer>
    </>
  )
}

export default PopularContainer
