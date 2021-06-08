import { RootState } from '../types'

const getBrand = (state: RootState) => state.brand

const getRecentSongs = (state: RootState) => state.recentSongs

const Selector = {
  getBrand,
  getRecentSongs,
}

export default Selector
