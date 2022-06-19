import callAPI from '..'
import { api_config } from '../../../api-config'
export const getSuggestionAPI = async (query:string,controller:any)=>{
  const url = `${api_config.BASE_URL}/${api_config.API_VERSION}/search/keyword`
  const res = await callAPI({
    url : `${url}?api_key=${api_config.API_KEY}&query=${query}`,
    method : 'GET',
    controller
  })
  return res
}