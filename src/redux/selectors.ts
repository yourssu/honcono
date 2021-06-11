import { createSelector } from 'reselect'

import { PAGE_SIZE } from '../constants'
import { RootState } from '../types'

const getRootState = (state: RootState) => state

const getIsIntialized = (state: RootState) => state.initialized

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

const getInboxSongs = (state: RootState) => state.inbox[state.brand]

const Selector = {
  getRootState,
  getIsIntialized,

  getBrand,

  getRecentReducer,

  getSearchSongs,
  getSearchSongsPage,
  hasNextSearchSongsPage,
  isFetchingSearchSongs,
  getSearchKeyword,
  getSearchSegment,

  getInboxSongs,
}

export default Selector
