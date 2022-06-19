import axios, { AxiosRequestConfig } from 'axios'
import { SuccessResConfig } from '../api-datatypes'
interface AxiosRequestConfigCustom extends AxiosRequestConfig{
  controller? : any
}
const callAPI = async ({ url, method, data,params,controller }:AxiosRequestConfigCustom)=>{
  const res = await axios({
    method: method,
    url: url,
    data :data,
    signal : controller ? controller.signal : false,
    params
  }).catch((err) => err.response)
  if(res === undefined || res.data === undefined){
    return {
      error : true,
      message: `Unknown Error`,
      data : null,
    }
  }
  if(res?.status === 404){
    return {
      error : true,
      message: `${res.status} ${res.statusText}`,
      data : null,
    }
  }
  if (res.status > 300) {
    return {
      error: true,
      message: res.data?.message,
      data: null,
    }
  }
  const successRes:Partial<SuccessResConfig> = {
    error: false,
    message: 'Success',
    data: res.data,
    url : res.config.url || ''
  }
  return successRes
}
export default callAPI