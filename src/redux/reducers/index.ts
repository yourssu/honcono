import * as AT from '../actions/ActionTypes';

import { Action, Brand, RootState, SearchType } from '../../types'

const initialState: RootState = {
  brand: Brand.TJ,
  favoriteSongs: [],
  detailSong: {},
  searchReducer: {
    keyword: '',
    type: SearchType.Title,
    result: {
      song: [],
      singer: [],
      no: [],
    }
  },
  recentSongs: [],
};

const reducer = (state: RootState = initialState, action: Action<any>): RootState => {
  switch (action.type) {
    case AT.REQUESET_GET_RECENT_SONGS_SUCCESS:
      return {
        ...state,
        recentSongs: action.payload.recentSongs,
      }

    case AT.REQUESET_GET_SEARCH_SONGS:
      return {
        ...state,
        searchReducer: {
          ...state.searchReducer,
          keyword: action.payload.keyword,
        }
      }

    case AT.REQUESET_GET_SEARCH_SONGS_SUCCESS:
      return {
        ...state,
        searchReducer: {
          ...state.searchReducer,
          result: {
            song: action.payload.byTitle,
            singer: action.payload.bySinger,
            no: action.payload.byNumber,
          },
        }
      }

    case AT.CHANGE_SEARCH_TYPE:
      return {
        ...state,
        searchReducer: {
          ...state.searchReducer,
          type: action.payload.type,
        }
      }

    default:
      return state
  }
}

export default reducer