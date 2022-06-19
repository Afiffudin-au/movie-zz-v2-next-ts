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
