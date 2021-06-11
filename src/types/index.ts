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

export enum SearchSegment {
  Title = 'song',
  Singer = 'singer',
  Number = 'no',
}

export const SearchSegmentMap = {
  [SearchSegment.Title]: '곡명',
  [SearchSegment.Singer]: '가수명',
  [SearchSegment.Number]: '번호',
}

export interface SearchReducer {
  keyword: string
  type: SearchSegment
  isFetching: boolean
  result: {
    song: SongType[]
    singer: SongType[]
    no: SongType[]
  }
}

export interface RootState {
  initialized: boolean
  brand: Brand
  searchReducer: SearchReducer
  recentSongs: SongType[]
  inboxSongs: SongType[]
  detailSong: SongType
}
