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

export const BrandNameMap = {
  [Brand.TJ]: '태진',
  [Brand.KY]: '금영',
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
  segment: SearchSegment
  isFetching: boolean
  result: {
    [SearchSegment.Title]: SongType[]
    [SearchSegment.Singer]: SongType[]
    [SearchSegment.Number]: SongType[]
  }
}

export interface Inbox {
  [Brand.TJ]: SongType[]
  [Brand.KY]: SongType[]
}

export interface RecentReducer {
  songs: SongType[]
  isFetching: boolean
}

export interface RootState {
  initialized: boolean
  brand: Brand
  searchReducer: SearchReducer
  recentReducer: RecentReducer
  inbox: Inbox
  detailSong: SongType
}
