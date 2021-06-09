import { RootState } from '../types'

const getBrand = (state: RootState) => state.brand

const getRecentSongs = (state: RootState) => state.recentSongs

const getSearchSongs = (state: RootState) => state.searchReducer.result[state.searchReducer.type]

const getSearchKeyword = (state: RootState) => state.searchReducer.keyword

const getSearchType = (state: RootState) => state.searchReducer.type

const Selector = {
  getBrand,
  getRecentSongs,
  getSearchSongs,
  getSearchKeyword,
  getSearchType,
}

export default Selector
