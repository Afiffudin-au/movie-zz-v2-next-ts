import { getMovieNowPlayingAPI, getPopularMovieAPI } from '../../api-calls/client-side/movie';
import { SuccessResConfig } from '../../api-datatypes'
import { addPopular } from '../../redux/movieSlice'
import { useAppDispatch } from '../../store/store'
export default function useGetPopular() {
  const dispatch = useAppDispatch()
  const getMoviePopular = async () => {
    dispatch(
      addPopular({
        loading: true,
      })
    )
    const res:Partial<SuccessResConfig> = await getPopularMovieAPI()
    if(res.error){
      dispatch(
        addPopular({
          loading : false
        })
      )
    }else{
      dispatch(
        addPopular({
          loading: false,
          dataPopulars: res.data,
          url: res.url,
        })
      )
    }
  }
  const getMoviePopularInTheater = async () => {
    dispatch(
      addPopular({
        loading: true,
      })
    )
    const res:Partial<SuccessResConfig> = await getMovieNowPlayingAPI()
    if(res.error){
      dispatch(
        addPopular({
          loading : false
        })
      )
    }else{
      dispatch(
        addPopular({
          loading: false,
          dataPopulars: res.data,
          url: res.url,
        })
      )
    }
  }
  return {
    getMoviePopular,
    getMoviePopularInTheater,
  }
}
