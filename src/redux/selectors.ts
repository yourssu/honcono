import { RootState } from '../types'

const getBrand = (state: RootState) => state.brand

const getRecentSongs = (state: RootState) => state.recentSongs

const getSearchSongs = (state: RootState) => state.searchReducer.result[state.searchReducer.type]

const getSearchType = (state: RootState) => state.searchReducer.type

const Selector = {
  getBrand,
  getRecentSongs,
  getSearchSongs,
  getSearchType,
}

export default Selector
