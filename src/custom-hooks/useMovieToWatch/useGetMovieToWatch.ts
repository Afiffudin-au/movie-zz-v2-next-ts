import Axios from 'axios'
import { addMovieToWatch } from '../../redux/movieSlice'
import { useAppDispatch } from '../../store/store'
export function useGetMovieToWatch() {
  const dispatch = useAppDispatch()
  const getMovieTopRated = () => {
    dispatch(
      addMovieToWatch({
        loading: true,
        dataMovieToWatch: [],
        url: '',
      })
    )
    Axios({
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}`,
      params: { page: 1 },
    })
      .then((res: any) => {
        dispatch(
          addMovieToWatch({
            loading: false,
            dataMovieToWatch: res.data,
            url: res.config.url,
          })
        )
      })
      .catch((err) => {
        dispatch(
          addMovieToWatch({
            loading: false,
            dataMovieToWatch: [],
            url: '',
          })
        )
        alert(err)
      })
  }
  const getMovieUpComing = () => {
    dispatch(
      addMovieToWatch({
        loading: true,
        dataMovieToWatch: [],
        url: '',
      })
    )
    Axios({
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.API_KEY}`,
      params: { page: 1 },
    })
      .then((res: any) => {
        dispatch(
          addMovieToWatch({
            loading: false,
            dataMovieToWatch: res.data,
            url: res.config.url,
          })
        )
      })
      .catch((err) => {
        dispatch(
          addMovieToWatch({
            loading: false,
            dataMovieToWatch: [],
            url: '',
          })
        )
        alert(err)
      })
  }
  return {
    getMovieTopRated,
    getMovieUpComing,
  }
}
