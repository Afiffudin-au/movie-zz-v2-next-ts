import Axios from 'axios'
import { useState } from 'react'

export function useGetAllMovie() {
  const [dataMovies, setDataMovies] = useState<any>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [url, setUrl] = useState<string>('')
  const getAllMovie = (showMore: number) => {
    setLoading(true)
    //for fresh array
    setDataMovies([])
    Axios({
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`,
      params: { page: showMore },
    })
      .then((res: any) => {
        setLoading(false)
        setDataMovies(res.data)
        setUrl(res.config.url)
      })
      .catch((err) => {
        setLoading(false)
        alert(err)
      })
  }
  return {
    getAllMovie,
    loading,
    dataMovies,
    url,
  }
}
