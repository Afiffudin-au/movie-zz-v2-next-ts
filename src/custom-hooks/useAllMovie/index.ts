import { useState } from 'react'
import { getPopularMovieAPI } from '../../api-calls/client-side/movie'
import { SuccessResConfig } from '../../api-datatypes'
export default function useGetAllMovie() {
  const [dataMovies, setDataMovies] = useState<any>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [url, setUrl] = useState<string>('')
  const getAllMovie = async (showMore: number) => {
    setLoading(true)
    setDataMovies([])
    const params = {
      page : showMore
    }
    const res:Partial<SuccessResConfig> = await getPopularMovieAPI(params)
    if(res.error){
      setLoading(false)
    }else{
      setLoading(false)
      setDataMovies(res.data)
      setUrl(res.url!)
    }
  }
  return {
    getAllMovie,
    loading,
    dataMovies,
    url,
  }
}
