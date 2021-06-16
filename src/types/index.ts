import Immutable from 'immutable'

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

interface Cache {
  expiredIn: Date,
  youtubeID: string,
}

export interface YoutubeReducerPOJO {
  youtubeID: string
  isFetching: boolean
  cache: {[key: string]: Cache}
}

export interface YoutubeReducer {
  youtubeID: string
  isFetching: boolean
  cache: Immutable.Map<string, Cache>
}

export interface RootStatePOJO {
  initialized: boolean
  previousLocation: string
  brand: Brand
  youtubeReducer: YoutubeReducerPOJO
  searchReducer: SearchReducer
  recentReducer: RecentReducer
  inbox: Inbox
}

export interface RootState {
  initialized: boolean
  previousLocation: string
  brand: Brand
  youtubeReducer: YoutubeReducer
  searchReducer: SearchReducer
  recentReducer: RecentReducer
  inbox: Inbox
}
