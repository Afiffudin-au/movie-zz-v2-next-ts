export interface StateMovieItems{
  popularBlocks : {}
  movieToWatchBlocks : {}
  tvToWatchBlocks : {}
  searchResultBlocks : {}
  urlParamsBlock : {}
  detailBlocks : {}
  movieBlocks : {}
  tvShowBlocks : {}
}

//addPopular Section
export interface PopoularActionItems{
  dataPopulars : any
  url : string
  loading : boolean
}

export interface PopularBlockItems{
  loading : boolean | null
  url : string,
  populars : Array<any>
}

//AddMovieToWatchBlock
export interface MovieToWatchActionItems{
  dataMovieToWatch :any
  url : string
  loading : boolean
}
export interface MovieToWatchBlocksItems{
  movieToWatch : Array<any>
  url : string
  loading : boolean | null
}
//addTvToWatch Section
export interface TvToWatchActionItems{
  datatvToWatch : any
  loading : boolean
  url : string
}
export interface TvToWatchBlocksItems{
  loading : boolean | null
  url : string
  tvToWatch : Array<any>
}
//addUrlParams
export interface UrlParamsActionItems{
  query : string
}
export interface UrlParamsBlockItems{
  query : string
}
//addDetail
export interface DetailBlockActionItems{
  loading : boolean
  dataDetails : any
}
export interface DetailBlockItems{
  loading : boolean | null
  details : {}
}
//addMovie
export interface MovieBlockAction{
  loading : boolean
  url : string
  dataMovies : any
}
export interface MovieBlockItems{
  movies : Array<any>
  loading : boolean | null
  url : string
}
//addTvShow
export interface TvShowBlockActionItems{
  dataTvShows : any
  loading : boolean | null
  url : string
}
export interface TvShowBlockItems{
  loading : boolean | null
  url : string
  tvShows : Array<any>
}
//addSearchResult Section
export interface SearchResultActionItems{
  loading : boolean
  url : string
  removeCopyArray : boolean
  dataMultiSearch : any
}
export interface SearchResultBlocksItems{
  multiResults : Array<any>
  loading  : boolean | null
  url : string
  totalPages : number
}