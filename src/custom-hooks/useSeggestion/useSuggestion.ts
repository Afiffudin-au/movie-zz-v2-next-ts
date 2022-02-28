import { useState } from 'react'

const useSuggestion = ()=>{
  const [isLoading,setIsLoading] = useState<boolean>(false)
  const [keywords,setKeywords] = useState<any>([])
  const getSuggestion = (controller:any,query:string,userText:any)=>{
    if (userText === '') {
      setKeywords([])
      return
    }
    if(keywords.length > 0){
      //reset keywords
      setKeywords([])
    }
    setIsLoading(true)
    fetch(`https://api.themoviedb.org/3/search/keyword?api_key=${process.env.API_KEY}&query=${query}`,{
      signal : controller.signal,
      method : 'GET',
      headers: {
        Accept: 'application/json',
      },
    }).then((res:any)=>{
      if (!res.ok) {
        throw new Error(res.status)
      } else {
        return res.json()
      }
    }).then(data=>{
      setIsLoading(false)
      const array = data.results.map((item: any) => item.name)
      const unique = [...new Set(array)]
      setKeywords(unique)
    }).catch(err=>{
      setIsLoading(false)
      console.error('Error', err)
    })
  }
  return{
    isLoading,
    keywords,
    getSuggestion
  }
}
export default useSuggestion