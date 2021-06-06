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
  brand: Brand
  type: SearchType
}

export interface RecentReducer {
  tj: SongType[]
  ky: SongType[]
}

export interface RootState {
    searchReducer: SearchReducer
    recentSongs: RecentReducer
    favoriteSongs: SongType[]
    detailSong: SongType
}
