import * as AT from './ActionTypes';

//import { createAction } from '@reduxjs/toolkit';
import { SearchType, SongType } from '../../types';

const requestGetRecentSongs = () => ({
  type: AT.REQUEST_GET_RECENT_SONGS,
})

export interface requestGetRecentSongsSuccessPayload {
  recentSongs: SongType[]
}
const requestGetRecentSongsSuccess = (payload: requestGetRecentSongsSuccessPayload) => ({
  type: AT.REQUEST_GET_RECENT_SONGS_SUCCESS,
  payload,
})

export interface requestGetSearchSongsPayload {
  keyword: string
}
const requestGetSearchSongs = (payload: requestGetSearchSongsPayload) => ({
  type: AT.REQUEST_GET_SEARCH_SONGS,
  payload
})

export interface SearchSongsPayload {
  byTitle: SongType[],
  bySinger: SongType[],
  byNumber: SongType[],
}
const requestGetSearchSongsSuccess = (payload: SearchSongsPayload) => ({
  type: AT.REQUEST_GET_SEARCH_SONGS_SUCCESS,
  payload,
})

const requestGetSearchSongsError = () => ({
  type: AT.REQUEST_GET_SEARCH_SONGS_ERROR,
})

export interface changeSearchTypePayload {
  type: SearchType
}
const changeSearchType = (payload: changeSearchTypePayload) => ({
  type: AT.CHANGE_SEARCH_TYPE,
  payload,
})

export interface addInboxSongPayload {
  song: SongType,
}
const addInboxSong = (payload: addInboxSongPayload) => ({
  type: AT.ADD_INBOX_SONG,
  payload,
})

export interface deleteInboxSongPayload {
  no: number,
}
const deleteInboxSong = (payload: deleteInboxSongPayload) => ({
  type: AT.DELETE_INBOX_SONG,
  payload,
})

export const actions = {
  requestGetRecentSongs,
  requestGetRecentSongsSuccess,
  requestGetSearchSongs,
  requestGetSearchSongsSuccess,
  requestGetSearchSongsError,
  changeSearchType,

  addInboxSong,
  deleteInboxSong,
}

/* const initState = (localState: State) => ({
  type: INIT_STATE,
  payload: localState
});
const changeKeyword = (key: string) => ({
    type: SEARCH,
    payload: key
});
const changeBrandFilter = (brand: number) => ({
    type: BRAND_FILTER,
    payload: brand
});
const changeTypeFilter = (type: number) => ({
    type: SONG_FILTER,
    payload: type
});
const addFavoriteSong = (song: SongType) => ({
    type: ADD_FAV,
    payload: song
});
const deleteFavoriteSong = (songNo: number) => ({
    type: DEL_FAV,
    payload: songNo
});
const openDetail = (song: SongType) => ({
    type: OPEN_DETAIL,
    payload: song
});
const closeDetail = () => ({
    type: CLOSE_DETAIL
}); */
