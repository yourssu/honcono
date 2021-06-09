export interface Action<P = undefined> {
    type: string
    payload: P
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
  Title = 'song',
  Singer = 'singer',
  Number = 'no',
}

export const SearchTypeMap = {
  [SearchType.Title]: '곡명',
  [SearchType.Singer]: '가수명',
  [SearchType.Number]: '번호',
}

export interface SearchReducer {
  keyword: string
  type: SearchType
  isFetching: boolean
  result: {
    song: SongType[]
    singer: SongType[]
    no: SongType[]
  }
}

export interface RootState {
  brand: Brand
  searchReducer: SearchReducer
  recentSongs: SongType[]
  favoriteSongs: SongType[]
  detailSong: SongType
}
