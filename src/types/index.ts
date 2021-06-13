import { Brand, SearchSegment } from '../constants'

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
  previousLocation: string
  brand: Brand
  searchReducer: SearchReducer
  recentReducer: RecentReducer
  inbox: Inbox
}
