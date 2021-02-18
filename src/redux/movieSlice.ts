import { createSlice } from '@reduxjs/toolkit';
import { PopularBlockItems, PopoularActionItems, MovieToWatchBlocksItems, MovieToWatchActionItems, TvToWatchBlocksItems, TvToWatchActionItems, SearchResultBlocksItems, SearchResultActionItems, StateMovieItems, UrlParamsActionItems, UrlParamsBlockItems, DetailBlockActionItems, DetailBlockItems, MovieBlockAction, MovieBlockItems, TvShowBlockActionItems, TvShowBlockItems } from './movieSliceInterface';
export const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    popularBlocks : {
      populars : [],
      loading : null,
      url : ''
    },
    movieToWatchBlocks : {
      movieToWatch : [],
      loading : null,
      url : ''
    },
    tvToWatchBlocks : {
      tvToWatch : [],
      loading : null,
      url : ''
    },
    searchResultBlocks : {
      multiResults : [],
      loading  : null,
      url : '',
      totalPages : 0
    },
    urlParamsBlock : {
      query : ''
    },
    detailBlocks : {
      details : {},
      loading : null
    },
    movieBlocks : {
      movies : [],
      loading  : null,
      url : ''
    },
    tvShowBlocks : {
      tvShows : [],
      loading : null,
      url : ''
    }
   
  },
  reducers: {
    addPopular: (state:{popularBlocks : PopularBlockItems}, action:{payload : PopoularActionItems}) => {
      state.popularBlocks.loading = action.payload.loading
      state.popularBlocks.url = action.payload.url
      state.popularBlocks.populars = action.payload.dataPopulars || [];
    },
    addMovieToWatch : (state:{movieToWatchBlocks:MovieToWatchBlocksItems},action:{payload : MovieToWatchActionItems})=>{
      state.movieToWatchBlocks.loading = action.payload.loading
      state.movieToWatchBlocks.url = action.payload.url
      state.movieToWatchBlocks.movieToWatch = action.payload.dataMovieToWatch || [];
    },
    addTvToWatch : (state:{tvToWatchBlocks : TvToWatchBlocksItems},action:{payload:TvToWatchActionItems})=>{
      state.tvToWatchBlocks.loading = action.payload.loading
      state.tvToWatchBlocks.url = action.payload.url
      state.tvToWatchBlocks.tvToWatch = action.payload.datatvToWatch || [];
    },
    addSearchResult : (state:{searchResultBlocks:SearchResultBlocksItems},action:{payload : SearchResultActionItems})=>{      
      state.searchResultBlocks.loading  = action.payload.loading
      state.searchResultBlocks.url  = action.payload.url
      state.searchResultBlocks.totalPages = action.payload.dataMultiSearch?.total_pages || 0
      if(action.payload.removeCopyArray){
        state.searchResultBlocks.multiResults.length = 0
      }
      if(!action.payload.loading){
        state.searchResultBlocks.multiResults = [
          ...state.searchResultBlocks.multiResults,
          action.payload.dataMultiSearch?.results || []]    
      }
    },
    addUrlParams : (state:{urlParamsBlock:UrlParamsBlockItems},action:{payload : UrlParamsActionItems})=>{
      state.urlParamsBlock.query = action.payload.query
    },
    addDetail : (state:{detailBlocks : DetailBlockItems},action:{payload : DetailBlockActionItems})=>{
      state.detailBlocks.loading  = action.payload.loading
      state.detailBlocks.details = action.payload.dataDetails || {}
    },
    addMovie : (state:{movieBlocks:MovieBlockItems},action:{payload:MovieBlockAction})=>{
      state.movieBlocks.loading  = action.payload.loading
      state.movieBlocks.url  = action.payload.url
      state.movieBlocks.movies = action.payload.dataMovies || []
    },
    addTvShow : (state:{tvShowBlocks : TvShowBlockItems},action:{payload : TvShowBlockActionItems})=>{
      state.tvShowBlocks.loading = action.payload.loading
      state.tvShowBlocks.url = action.payload.url
      state.tvShowBlocks.tvShows = action.payload.dataTvShows || []
    }
  },
});

export const { addPopular ,addMovieToWatch,addTvToWatch,addSearchResult,addUrlParams,addDetail,addMovie,addTvShow} = movieSlice.actions;
export const selectPopularBlocks = (state:{movies : StateMovieItems}) => state.movies.popularBlocks;
export const selectMovieToWatchBlocks= (state:{movies : StateMovieItems})  => state.movies.movieToWatchBlocks;
export const selectTvToWatchBlocks= (state:{movies : StateMovieItems})  => state.movies.tvToWatchBlocks;
export const selectSearchResultBlocks= (state:{movies : StateMovieItems})  => state.movies.searchResultBlocks;
export const selectUrlParamsBlock= (state:{movies : StateMovieItems})  => state.movies.urlParamsBlock;
export const selectDetailBlocks = (state:{movies : StateMovieItems})  => state.movies.detailBlocks;
export const selectMoviesBlocks = (state:{movies : StateMovieItems})  => state.movies.movieBlocks;
export const selectTvShowBlocks = (state:{movies : StateMovieItems})  => state.movies.tvShowBlocks;
export default movieSlice.reducer;
