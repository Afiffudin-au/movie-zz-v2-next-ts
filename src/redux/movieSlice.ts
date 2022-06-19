import { createSlice } from '@reduxjs/toolkit'
import {
  PopularBlockItems,
  PopoularActionItems,
  MovieToWatchBlocksItems,
  MovieToWatchActionItems,
  TvToWatchBlocksItems,
  TvToWatchActionItems,
  StateMovieItems,
} from './movieSliceInterface'
export const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    popularBlocks: {
      populars: [],
      loading: null,
      url: '',
    },
    movieToWatchBlocks: {
      movieToWatch: [],
      loading: null,
      url: '',
    },
    tvToWatchBlocks: {
      tvToWatch: [],
      loading: null,
      url: '',
    },
    searchResultBlocks: {
      multiResults: [],
      loading: null,
      url: '',
      totalPages: 0,
    },
    urlParamsBlock: {
      query: '',
    },
    detailBlocks: {
      details: {},
      loading: null,
    },
    movieBlocks: {
      movies: [],
      loading: null,
      url: '',
    },
    tvShowBlocks: {
      tvShows: [],
      loading: null,
      url: '',
    },
  },
  reducers: {
    addPopular: (
      state: { popularBlocks: Partial<PopularBlockItems> },
      action: { payload: Partial<PopoularActionItems> }
    ) => {
      state.popularBlocks.loading = action.payload.loading
      state.popularBlocks.url = action.payload.url
      state.popularBlocks.populars = action.payload.dataPopulars || []
    },
    addMovieToWatch: (
      state: { movieToWatchBlocks: Partial<MovieToWatchBlocksItems> },
      action: { payload: Partial<MovieToWatchActionItems> }
    ) => {
      state.movieToWatchBlocks.loading = action.payload.loading
      state.movieToWatchBlocks.url = action.payload.url
      state.movieToWatchBlocks.movieToWatch =
        action.payload.dataMovieToWatch || []
    },
    addTvToWatch: (
      state: { tvToWatchBlocks: Partial<TvToWatchBlocksItems> },
      action: { payload: Partial<TvToWatchActionItems> }
    ) => {
      state.tvToWatchBlocks.loading = action.payload.loading
      state.tvToWatchBlocks.url = action.payload.url
      state.tvToWatchBlocks.tvToWatch = action.payload.datatvToWatch || []
    },
  },
})

export const { addPopular, addMovieToWatch, addTvToWatch } = movieSlice.actions
export const selectPopularBlocks = (state: { movies: StateMovieItems }) =>
  state.movies.popularBlocks
export const selectMovieToWatchBlocks = (state: { movies: StateMovieItems }) =>
  state.movies.movieToWatchBlocks
export const selectTvToWatchBlocks = (state: { movies: StateMovieItems }) =>
  state.movies.tvToWatchBlocks
export const selectSearchResultBlocks = (state: { movies: StateMovieItems }) =>
  state.movies.searchResultBlocks
export const selectUrlParamsBlock = (state: { movies: StateMovieItems }) =>
  state.movies.urlParamsBlock
export const selectDetailBlocks = (state: { movies: StateMovieItems }) =>
  state.movies.detailBlocks
export const selectMoviesBlocks = (state: { movies: StateMovieItems }) =>
  state.movies.movieBlocks
export const selectTvShowBlocks = (state: { movies: StateMovieItems }) =>
  state.movies.tvShowBlocks
export default movieSlice.reducer
