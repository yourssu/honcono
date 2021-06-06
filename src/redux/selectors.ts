import { RootState } from '../types'

const getRecentSongs = (state: RootState) => state.recentSongs

const Selector = {
  getRecentSongs,
}

export default Selector
