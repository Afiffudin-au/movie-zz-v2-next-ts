import React from 'react'
import HorizontalContainer from '../HorizontalContainer/HorizontalContainer'
import Card from '../Card/Card'
import { MovieCardItems } from '../../interfaces/movieCardItem'
import { selectPopularBlocks } from '../../redux/movieSlice'
import { useSelector } from 'react-redux'
import { PopularBlockItems } from '../../redux/movieSliceInterface'
import { StyledLinearProgress } from '../Mui-custom/LoadingProgress/LoadingProgress'
function PopularContainer({ popularsSSR }: { popularsSSR: Required<any> }) {
  const { url, loading, populars }: Partial<PopularBlockItems> = useSelector(
    selectPopularBlocks
  )
  return (
    <>
      {loading && (
        <div className='loading'>
          <StyledLinearProgress />
        </div>
      )}
      <HorizontalContainer>
        {populars?.results?.map((item: MovieCardItems, index: number) => (
          <Card
            url={url}
            id={item.id}
            releaseDate={item.release_date || item.first_air_date}
            originalTitle={item.original_title || item.original_name}
            posterPath={`${process.env.REACT_APP_POSTER_URL}${item.poster_path}`}
            voteAverage={item.vote_average || 0}
            key={item.id}
          />
        )) ||
          popularsSSR?.results?.map((item: MovieCardItems, index: number) => (
            <Card
              url={url}
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
