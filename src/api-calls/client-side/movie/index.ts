import callAPI from '../..'
import { api_config } from '../../../api-config'

export const getPopularMovieAPI = async (params?:{page : number}) => {
  const url = `${api_config.BASE_URL}/${api_config.API_VERSION}/movie/popular`
  const res = await callAPI({
    url : `${url}?api_key=${api_config.API_KEY}`,
    method: 'GET',
    params
  })
  return res
}
export const getMovieNowPlayingAPI = async ()=>{
  const url = `${api_config.BASE_URL}/${api_config.API_VERSION}/movie/now_playing`
  const res = await callAPI({
    url : `${url}?api_key=${api_config.API_KEY}`,
    method : 'GET',
  })
  return res
}
export const getMovieTopRatedAPI = async  ()=>{
  const url = `${api_config.BASE_URL}/${api_config.API_VERSION}/movie/top_rated`
  const res = await callAPI({
    url : `${url}?api_key=${api_config.API_KEY}`,
    method : 'GET',
  })
  return res
}
export const getMovieUpComingAPI =  async ()=>{
  const url = `${api_config.BASE_URL}/${api_config.API_VERSION}/movie/upcoming`
  const res = await callAPI({
    url : `${url}?api_key=${api_config.API_KEY}`,
    method : 'GET',
  })
  return res
}