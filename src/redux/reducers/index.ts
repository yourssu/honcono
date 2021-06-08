import * as AT from '../actions/ActionTypes';

import { Action, Brand, RootState, SearchType } from '../../types'

const initialState: RootState = {
  brand: Brand.TJ,
  favoriteSongs: [],
  detailSong: {},
  searchReducer: {
    keyword: '',
    type: SearchType.Title,
  },
  recentSongs: [],
};

const reducer = (state: RootState = initialState, action: Action): RootState => {
  switch (action.type) {
    case AT.REQUESET_GET_RECENT_SONGS_SUCCESS:
      return {
        ...state,
        recentSongs: action.payload,
      }

    default:
      return state
  }
}

export default reducer