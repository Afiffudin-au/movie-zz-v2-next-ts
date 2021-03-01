export interface StateMovieItems {
  popularBlocks: {}
  movieToWatchBlocks: {}
  tvToWatchBlocks: {}
  searchResultBlocks: {}
  urlParamsBlock: {}
  detailBlocks: {}
  movieBlocks: {}
  tvShowBlocks: {}
}

//addPopular Section
export interface PopoularActionItems {
  dataPopulars: any
  url: string
  loading: boolean
}

export interface PopularBlockItems {
  loading: boolean | null
  url: string
  populars: any
}

//AddMovieToWatchBlock
export interface MovieToWatchActionItems {
  dataMovieToWatch: any
  url: string
  loading: boolean
}
export interface MovieToWatchBlocksItems {
  movieToWatch: any
  url: string
  loading: boolean | null
}
//addTvToWatch Section
export interface TvToWatchActionItems {
  datatvToWatch: any
  loading: boolean
  url: string
}
export interface TvToWatchBlocksItems {
  loading: boolean | null
  url: string
  tvToWatch: any
}
//addUrlParams
export interface UrlParamsActionItems {
  query: string
}
export interface UrlParamsBlockItems {
  query: string
}
//addDetail
export interface DetailBlockActionItems {
  loading: boolean
  dataDetails: any
}
export interface DetailBlockItems {
  loading: boolean | null
  details: {}
}
//addMovie
export interface MovieBlockAction {
  loading: boolean
  url: string
  dataMovies: any
}
export interface MovieBlockItems {
  movies: any
  loading: boolean | null
  url: string
}
//addTvShow
export interface TvShowBlockActionItems {
  dataTvShows: any
  loading: boolean
  url: string
}
export interface TvShowBlockItems {
  loading: boolean | null
  url: string
  tvShows: any
}
//addSearchResult Section
export interface SearchResultActionItems {
  loading?: boolean | undefined
  url?: string | undefined
  removeCopyArray?: boolean | undefined
  dataMultiSearch?: any | undefined
}
export interface SearchResultBlocksItems {
  multiResults: any
  loading: boolean | null | undefined
  url: string | undefined
  totalPages: number | undefined
}
