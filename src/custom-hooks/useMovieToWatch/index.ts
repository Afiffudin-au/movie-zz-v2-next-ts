import { getMovieTopRatedAPI, getMovieUpComingAPI } from '../../api-calls/client-side/movie'
import { SuccessResConfig } from '../../api-datatypes'
import { addMovieToWatch } from '../../redux/movieSlice'
import { useAppDispatch } from '../../store/store'
export default function useGetMovieToWatch() {
  const dispatch = useAppDispatch()
  const getMovieTopRated = async() => {
    dispatch(
      addMovieToWatch({
        loading: true,
      })
    )
    const res:Partial<SuccessResConfig> = await getMovieTopRatedAPI()
    if(res.error){
      dispatch(
        addMovieToWatch({
          loading : false
        })
      )
    }else{
      dispatch(
        addMovieToWatch({
          loading: false,
          dataMovieToWatch: res.data,
          url: res.url,
        })
      )
    }
  }
  const getMovieUpComing =async () => {
    dispatch(
      addMovieToWatch({
        loading: true,
      })
    )
    const res:Partial<SuccessResConfig> = await getMovieUpComingAPI()
    if(res.error){
      dispatch(
        addMovieToWatch({
          loading : false
        })
      )
    }else{
      dispatch(
        addMovieToWatch({
          loading: false,
          dataMovieToWatch: res.data,
          url: res.url,
        })
      )
    }
  }
  return {
    getMovieTopRated,
    getMovieUpComing,
  }
}
