import * as AT from '../actions/ActionTypes';

import { Action, Brand, RootState, SearchType } from '../../types'

const initialState: RootState = {
  initialized: false,
  brand: Brand.TJ,
  inboxSongs: [],
  detailSong: {},
  searchReducer: {
    keyword: '',
    type: SearchType.Title,
    isFetching: false,
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
    case AT.INIT_STATE:
      return {
        ...action.payload.state,
        initialized: true,
      }

    case AT.REQUEST_GET_RECENT_SONGS_SUCCESS:
      return {
        ...state,
        recentSongs: action.payload.recentSongs,
      }

    case AT.REQUEST_GET_SEARCH_SONGS:
      return {
        ...state,
        searchReducer: {
          ...state.searchReducer,
          keyword: action.payload.keyword,
          isFetching: true,
        }
      }

    case AT.REQUEST_GET_SEARCH_SONGS_SUCCESS:
      return {
        ...state,
        searchReducer: {
          ...state.searchReducer,
          isFetching: false,
          result: {
            song: action.payload.byTitle,
            singer: action.payload.bySinger,
            no: action.payload.byNumber,
          },
        }
      }
    case AT.REQUEST_GET_SEARCH_SONGS_ERROR:
      return {
        ...state,
        searchReducer: {
          ...state.searchReducer,
          isFetching: false,
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

    case AT.ADD_INBOX_SONG:
      return {
        ...state,
        inboxSongs: [...state.inboxSongs, action.payload.song]
      }

    case AT.DELETE_INBOX_SONG:
      return {
        ...state,
        inboxSongs: state.inboxSongs.filter((song) => song.no !== action.payload.no)
      }

    default:
      return state
  }
}

export default reducer