import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import movieReducer from '../redux/movieSlice'
const store = configureStore({
  reducer: {
    movies: movieReducer,
  },
})
export default store
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
