import React from 'react'
import { useSelector } from 'react-redux'
import { MovieCardItems } from '../../interfaces/movieCardItem'
import { selectTvToWatchBlocks } from '../../redux/movieSlice'
import { TvToWatchBlocksItems } from '../../redux/movieSliceInterface'
import Card from '../Card/Card'
import HorizontalContainer from '../HorizontalContainer/HorizontalContainer'
import { StyledLinearProgress } from '../Mui-custom/LoadingProgress/LoadingProgress'
function TvToWatchContainer({ tvToWatchSSR }: { tvToWatchSSR: Required<any> }) {
  const {
    tvToWatch,
    loading,
    url,
  }: Partial<TvToWatchBlocksItems> = useSelector(selectTvToWatchBlocks)
  return (
    <>
      {loading && (
        <div className='loading'>
          <StyledLinearProgress />
        </div>
      )}
      <HorizontalContainer>
        {tvToWatch &&
          tvToWatch?.results?.map((item: MovieCardItems, index: number) => (
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
        {tvToWatchSSR &&
          tvToWatchSSR?.results?.map((item: MovieCardItems, index: number) => (
            <Card
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

export default TvToWatchContainer