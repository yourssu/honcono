import * as AT from './ActionTypes';

//import { createAction } from '@reduxjs/toolkit';
import { RootState, SearchSegment, SongType } from '../../types';

interface initStatePayload {
  state: RootState
}
const initState = (payload: initStatePayload) => ({
  type: AT.INIT_STATE,
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

export const actions = {
  initState,

  requestGetRecentSongs,
  requestGetRecentSongsSuccess,

  requestGetSearchSongs,
  requestGetSearchSongsSuccess,
  requestGetSearchSongsError,
  changeSearchSegment,

  addInboxSong,
  deleteInboxSong,
}
