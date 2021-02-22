import Axios from "axios"
import { addTvToWatch } from '../../redux/movieSlice'
import {useAppDispatch} from '../../store/store'
export function useTvToWatch(){
  const dispatch = useAppDispatch()
  const getTvTopRated = ()=>{
    dispatch(addTvToWatch({
      loading : true,
      datatvToWatch : [],
      url : ''
    }))
    Axios({
      method : 'GET',
      url : 'https://api.themoviedb.org/3/tv/top_rated?api_key=f59a67c847f06eb38cff7065821c1fd9',
      params: {page : 1}
    }).then((res:any)=>{
      dispatch(addTvToWatch({
        loading : false,
        datatvToWatch : res.data,
        url : res.config.url
      }))
    }).catch(err=>{
      dispatch(addTvToWatch({
        loading : false,
        datatvToWatch : [],
        url : ''
      }))
      alert(err)
    })
  }
  const getTvAiringToday = ()=>{
    dispatch(addTvToWatch({
      loading : true,
      datatvToWatch : [],
      url : ''
    }))
    Axios({
      method : 'GET',
      url : 'https://api.themoviedb.org/3/tv/airing_today?api_key=f59a67c847f06eb38cff7065821c1fd9',
      params: {page : 1}
    }).then((res:any)=>{
      dispatch(addTvToWatch({
        loading : false,
        datatvToWatch : res.data,
        url : res.config.url
      }))
    }).catch(err=>{
      dispatch(addTvToWatch({
        loading : false,
        datatvToWatch : [],
        url : ''
      }))
      alert(err)
    })
  }
  return{
    getTvTopRated,getTvAiringToday
  }
}