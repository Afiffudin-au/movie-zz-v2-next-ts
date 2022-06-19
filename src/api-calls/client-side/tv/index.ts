import callAPI from '../..'
import { api_config } from '../../../api-config'

export const getTvTopRatedAPI = async (params?:{page : number}) => {
  const url = `${api_config.BASE_URL}/${api_config.API_VERSION}/tv/top_rated`
  const res = await callAPI({
    url : `${url}?api_key=${api_config.API_KEY}`,
    method: 'GET',
    params
  })
  return res
}
export const getTvPopularAPI = async (params?:{page : number}) => {
  const url = `${api_config.BASE_URL}/${api_config.API_VERSION}/tv/popular`
  const res = await callAPI({
    url : `${url}?api_key=${api_config.API_KEY}`,
    method: 'GET',
    params
  })
  return res
}
export const getTvAiringTodayAPI = async (params?:{page : number}) => {
  const url = `${api_config.BASE_URL}/${api_config.API_VERSION}/tv/airing_today`
  const res = await callAPI({
    url : `${url}?api_key=${api_config.API_KEY}`,
    method: 'GET',
    params
  })
  return res
}