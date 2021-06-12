import * as AT from './ActionTypes';

//import { createAction } from '@reduxjs/toolkit';
import { RootState, SongType } from '../../types';
import { Brand, SearchSegment } from '../../constants';

interface initStatePayload {
  state: RootState
}
const initState = (payload: initStatePayload) => ({
  type: AT.INIT_STATE,
  payload,
})

interface changeBrandPayload {
  brand: Brand
}
const changeBrand = (payload: changeBrandPayload) => ({
  type: AT.CHANGE_BRAND,
  payload,
})

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
const requestGetRecentSongsError = () => ({
  type: AT.REQUEST_GET_RECENT_SONGS_ERROR,
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

export interface changeSearchSegmentPayload {
  segment: SearchSegment
}
const changeSearchSegment = (payload: changeSearchSegmentPayload) => ({
  type: AT.CHANGE_SEARCH_SEGMENT,
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

export interface toggleInobxSongPayload {
  song: SongType
  isInboxSong: boolean
}
const toggleInboxSong = (payload: toggleInobxSongPayload) => ({
  type: AT.TOGGLE_INBOX_SONG,
  payload,
})

export const actions = {
  initState,
  changeBrand,

  requestGetRecentSongs,
  requestGetRecentSongsSuccess,
  requestGetRecentSongsError,

  requestGetSearchSongs,
  requestGetSearchSongsSuccess,
  requestGetSearchSongsError,
  changeSearchSegment,

  addInboxSong,
  deleteInboxSong,
  toggleInboxSong,
}
