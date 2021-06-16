import { createSelector } from 'reselect'

import { PAGE_SIZE } from '../constants'
import { RootState, SongType } from '../types'

const getRootState = (state: RootState) => state

const getIsIntialized = (state: RootState) => state.initialized

const getPreviousLocation = (state: RootState) => state.previousLocation

const getBrand = (state: RootState) => state.brand

const getRecentReducer = (state: RootState) => state.recentReducer

const getSearchSongs = (state: RootState) => state.searchReducer.result[state.searchReducer.segment]

const getSearchSongsPage = (page: number) => createSelector(
  getSearchSongs,
  (searchSongState) => searchSongState.slice(0, (page + 1) * PAGE_SIZE)
)

const hasNextSearchSongsPage = (page: number) => createSelector(
  getSearchSongs,
  (searchSongState) => searchSongState.length > page * PAGE_SIZE
)

const isFetchingSearchSongs = (state: RootState) => state.searchReducer.isFetching

const getSearchKeyword = (state: RootState) => state.searchReducer.keyword

const getSearchSegment = (state: RootState) => state.searchReducer.segment

const getYoutubeReducer = (state: RootState) => state.youtubeReducer

const getInboxSongs = (state: RootState) => state.inbox[state.brand]

const getIsInboxSong = (song: SongType) => (state: RootState) => (
  !!state.inbox[state.brand].find((_song) => (
    _song.no === song.no && _song.brand === song.brand
  ))
)

const getCacheMap = (state: RootState) => state.youtubeReducer.cache

const Selector = {
  getRootState,
  getPreviousLocation,
  getIsIntialized,

  getBrand,

  getRecentReducer,

  getSearchSongs,
  getSearchSongsPage,
  hasNextSearchSongsPage,
  isFetchingSearchSongs,
  getSearchKeyword,
  getSearchSegment,

  getYoutubeReducer,

  getInboxSongs,
  getIsInboxSong,

  getCacheMap,
}

export default Selector
