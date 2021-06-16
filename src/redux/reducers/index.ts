import Immutable from 'immutable'

import * as AT from '../actions/ActionTypes'
import { Action, RootState } from '../../types'
import { Brand, SearchSegment } from '../../constants'

export const initialState: RootState = {
  initialized: false,
  previousLocation: '/',
  brand: Brand.TJ,
  inbox: {
    [Brand.TJ]: [],
    [Brand.KY]: [],
  },
  youtubeReducer: {
    youtubeID: '',
    isFetching: false,
    cache: Immutable.Map()
  },
  searchReducer: {
    keyword: '',
    segment: SearchSegment.Title,
    isFetching: false,
    result: {
      [SearchSegment.Title]: [],
      [SearchSegment.Singer]: [],
      [SearchSegment.Number]: [],
    }
  },
  recentReducer: {
    songs: [],
    isFetching: false,
  },
}

const reducer = (state: RootState = initialState, action: Action<any>): RootState => {
  switch (action.type) {
    case AT.INIT_STATE:
      return {
        ...action.payload.state,
        initialized: true,
      }

    case AT.UPDATE_LOCATION:
      return {
        ...state,
        previousLocation: action.payload.location,
      }

    case AT.CHANGE_BRAND:
      return {
        ...state,
        brand: action.payload.brand
      }

    case AT.REQUEST_GET_RECENT_SONGS:
      return {
        ...state,
        recentReducer: {
          ...state.recentReducer,
          isFetching: true,
        }
      }

    case AT.REQUEST_GET_RECENT_SONGS_SUCCESS:
      return {
        ...state,
        recentReducer: {
          songs: action.payload.recentSongs,
          isFetching: false,
        },
      }

    case AT.REQUEST_GET_RECENT_SONGS_ERROR:
      return {
        ...state,
        recentReducer: {
          ...state.recentReducer,
          isFetching: false,
        },
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
    
    case AT.REQUEST_GET_YOUTUBE_ID:
      return {
        ...state,
        youtubeReducer: {
          ...state.youtubeReducer,
          isFetching: true,
        }
      }

    case AT.REQUEST_GET_YOUTUBE_ID_SUCCESS:
      return {
        ...state,
        youtubeReducer: {
          ...state.youtubeReducer,
          youtubeID: action.payload.youtubeID,
          isFetching: false,
        }
      }

    case AT.REQUEST_GET_YOUTUBE_ID_ERROR:
      return {
        ...state,
        youtubeReducer: {
          ...state.youtubeReducer,
          youtubeID: '',
          isFetching: false,
        }
      }

    case AT.CHANGE_SEARCH_SEGMENT:
      return {
        ...state,
        searchReducer: {
          ...state.searchReducer,
          segment: action.payload.segment,
        }
      }

    case AT.ADD_INBOX_SONG:
      return {
        ...state,
        inbox: {
          ...state.inbox,
          [state.brand]: [
            action.payload.song,
            ...state.inbox[state.brand],
          ],
        },
      }

    case AT.DELETE_INBOX_SONG:
      return {
        ...state,
        inbox: {
          ...state.inbox,
          [state.brand]: state.inbox[state.brand].filter((song) => song.no !== action.payload.no)
        },
      }

    case AT.ADD_CACHE: {
      return {
        ...state,
        youtubeReducer: {
          ...state.youtubeReducer,
          cache: state.youtubeReducer.cache.set(action.payload.key, action.payload.cache)
        }
      }
    }

    case AT.DELETE_CACHE: 
      return {
        ...state,
        youtubeReducer: {
          ...state.youtubeReducer,
          cache: state.youtubeReducer.cache.delete(action.payload.key)
        }
      }

    default:
      return state
  }
}

export default reducer