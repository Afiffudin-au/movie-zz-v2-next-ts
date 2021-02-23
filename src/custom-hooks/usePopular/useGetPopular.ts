import Axios from 'axios'
import { addPopular } from '../../redux/movieSlice'
import { useAppDispatch } from '../../store/store'
export function useGetPopular(){
  const dispatch = useAppDispatch()
  const getMoviePopular = ()=>{
    dispatch(addPopular({
      loading : true,
      dataPopulars : [],
      url : ''
    }))
    Axios({
      method : 'GET',
      url : `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`,
      params: {page : 1}
    }).then((res:any)=>{
      dispatch(addPopular({
        loading : false,
        dataPopulars : res.data,
        url : res.config.url
      }))
    }).catch(err=>{
      dispatch(addPopular({
        loading : false,
        dataPopulars : [],
        url : ''
      }))
      alert(err)
    })
  }
  const getMoviePopularInTheater = ()=>{
    dispatch(addPopular({
      loading : true,
      url : '',
      dataPopulars : []
    }))
    Axios({
      method : 'GET',
      url : `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}`,
      params: {page : 1}
    }).then((res:any)=>{
      dispatch(addPopular({
        loading : false,
        dataPopulars : res.data,
        url : res.config.url
      }))
    }).catch(err=>{
      dispatch(addPopular({
        loading : false,
        url : '',
        dataPopulars : []
      }))
      alert(err)
    })
  }
  return{
    getMoviePopular,
    getMoviePopularInTheater
  }
}