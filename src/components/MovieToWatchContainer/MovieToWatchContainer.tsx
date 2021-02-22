import React from 'react'
import HorizontalContainer from '../HorizontalContainer/HorizontalContainer'
import Card from '../Card/Card'
import { StyledLinearProgress } from '../Mui-custom/LoadingProgress/LoadingProgress'
import { MovieCardItems } from '../../interfaces/movieCardItem'
import { selectMovieToWatchBlocks } from '../../redux/movieSlice'
import { useSelector } from 'react-redux'
import { MovieToWatchBlocksItems } from '../../redux/movieSliceInterface'
function MovieToWatchContainer({
  movieToWatchSSR,
}: {
  movieToWatchSSR: Required<any>
}) {
  const {
    loading,
    url,
    movieToWatch,
  }: Partial<MovieToWatchBlocksItems> = useSelector(selectMovieToWatchBlocks)
  return (
    <>
      {loading && (
        <div className='loading'>
          <StyledLinearProgress />
        </div>
      )}
      <HorizontalContainer>
        {movieToWatch &&
          movieToWatch?.results?.map((item: MovieCardItems, index: number) => (
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

        {movieToWatchSSR &&
          movieToWatchSSR?.results?.map(
            (item: MovieCardItems, index: number) => (
              <Card
                // url={url}
                id={item.id}
                releaseDate={item.release_date || item.first_air_date}
                originalTitle={item.original_title || item.original_name}
                posterPath={`${process.env.REACT_APP_POSTER_URL}${item.poster_path}`}
                voteAverage={item.vote_average || 0}
                key={item.id}
              />
            )
          )}
      </HorizontalContainer>
    </>
  )
}

export default MovieToWatchContainer
