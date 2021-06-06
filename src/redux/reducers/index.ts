import * as AT from '../actions/ActionTypes';

import { Action, Brand, RootState, SearchType } from '../../types'

const initialState: RootState = {
  favoriteSongs: [],
  detailSong: {},
  searchReducer: {
    keyword: '',
    brand: Brand.TJ,
    type: SearchType.Title,
  },
  recentSongs: {
    tj: [],
    ky: [],
  },
};

const reducer = (state: RootState = initialState, action: Action): RootState => {
  switch (action.type) {
    case AT.REQUESET_GET_TJ_RECENT_SONGS_SUCCESS:
      return {
        ...state,
        recentSongs: {
          ...state.recentSongs,
          tj: action.payload,
        }
      }
    case AT.REQUESET_GET_KY_RECENT_SONGS_SUCCESS:
      return {
        ...state,
        recentSongs: {
          ...state.recentSongs,
          ky: action.payload,
        }
      }

    default:
      return state
  }
}

export default reducer