import { useState } from 'react'
import { getSuggestionAPI } from '../../api-calls/client-side/suggestion'
import { SuccessResConfig } from '../../api-datatypes'
const useSuggestion = ()=>{
  const [isLoading,setIsLoading] = useState<boolean>(false)
  const [keywords,setKeywords] = useState<any>([])
  const getSuggestion = async (controller:any,query:string,userText:any)=>{
    if (userText === '') {
      setKeywords([])
      return
    }
    if(keywords.length > 0){
      //reset keywords
      setKeywords([])
    }
    setIsLoading(true)
    const res:Partial<SuccessResConfig> = await getSuggestionAPI(query,controller)
    if(res.error){
      setIsLoading(false)
    }else{
      setIsLoading(false)
      const array = res.data.results.map((item: any) => item.name)
      const unique = [...new Set(array)]
      setKeywords(unique)
    }
  }
  const reset = () => setKeywords([])
  return{
    isLoading,
    keywords,
    getSuggestion,
    reset
  }
}
export default useSuggestion