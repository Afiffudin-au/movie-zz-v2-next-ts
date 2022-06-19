import { getTvAiringTodayAPI, getTvTopRatedAPI } from '../../api-calls/client-side/tv'
import { SuccessResConfig } from '../../api-datatypes'
import { addTvToWatch } from '../../redux/movieSlice'
import { useAppDispatch } from '../../store/store'
export default function useTvToWatch() {
  const dispatch = useAppDispatch()
  const getTvTopRated = async () => {
    dispatch(
      addTvToWatch({
        loading: true,
      })
    )
    const res:Partial<SuccessResConfig> = await getTvTopRatedAPI()
    if(res.error){
      dispatch(
        addTvToWatch({
          loading : false
        })
      )
    }else{
      dispatch(
        addTvToWatch({
          loading: false,
          datatvToWatch: res.data,
          url: res.url,
        })
      )
    }
  }
  const getTvPopular = async () => {
    dispatch(
      addTvToWatch({
        loading: true,
      })
    )
    const res:Partial<SuccessResConfig> = await getTvTopRatedAPI()
    if(res.error){
      dispatch(
        addTvToWatch({
          loading : false
        })
      )
    }else{
      dispatch(
        addTvToWatch({
          loading: false,
          datatvToWatch: res.data,
          url: res.url,
        })
      )
    }
  }
  const getTvAiringToday = async () => {
    dispatch(
      addTvToWatch({
        loading: true,
      })
    )
    const res:Partial<SuccessResConfig> = await getTvAiringTodayAPI()
    if(res.error){
      dispatch(
        addTvToWatch({
          loading : false
        })
      )
    }else{
      dispatch(
        addTvToWatch({
          loading: false,
          datatvToWatch: res.data,
          url: res.url,
        })
      )
    }
  }
  return {
    getTvTopRated,
    getTvPopular,
    getTvAiringToday,
  }
}
