import { createSelector } from 'reselect'

import { PAGE_SIZE } from '../constants'
import { RootState } from '../types'

const getRootState = (state: RootState) => state

const getIsIntialized = (state: RootState) => state.initialized

const getBrand = (state: RootState) => state.brand

const getRecentSongs = (state: RootState) => state.recentSongs

const getSearchSongs = (state: RootState) => state.searchReducer.result[state.searchReducer.type]

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

const getSearchType = (state: RootState) => state.searchReducer.type

const getInboxSongs = (state: RootState) => state.inboxSongs

const Selector = {
  getRootState,
  getIsIntialized,

  getBrand,

  getRecentSongs,

  getSearchSongs,
  getSearchSongsPage,
  hasNextSearchSongsPage,
  isFetchingSearchSongs,
  getSearchKeyword,
  getSearchType,

  getInboxSongs,
}

export default Selector
