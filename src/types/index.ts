export interface Action<P = any> {
    type: string
    payload?: P
}

export interface SongType {
    no?: number
    brand?: string
    singer?: string
    title?: string
    release?: string
    composer?: string
}

export enum Brand {
  TJ = 'tj',
  KY = 'kumyoung',
}

export enum SearchType {
  Title = 'title',
  Singer = 'singer',
}

export interface SearchReducer {
  keyword: string
  type: SearchType
}

export interface RootState {
  brand: Brand
  searchReducer: SearchReducer
  recentSongs: SongType[]
  favoriteSongs: SongType[]
  detailSong: SongType
}
