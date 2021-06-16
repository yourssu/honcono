import * as AT from './ActionTypes';

//import { createAction } from '@reduxjs/toolkit';
import { Cache, RootState, SongType } from '../../types';
import { Brand, SearchSegment } from '../../constants';

interface initStatePayload {
  state: RootState
}
const initState = (payload: initStatePayload) => ({
  type: AT.INIT_STATE,
  payload,
})

interface updateLocationPayload {
  location: string
}
const updateLocation = (payload: updateLocationPayload) => ({
  type: AT.UPDATE_LOCATION,
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

export interface requestGetYoutubeIDPayload extends Required<Pick<SongType, 'title' | 'singer'>> {}

const requestGetYoutubeID = (payload: requestGetYoutubeIDPayload) => ({
  type: AT.REQUEST_GET_YOUTUBE_ID,
  payload
})

export interface requestGetYoutubeIDSuccessPayload {
  youtubeID: string
}
const requestGetYoutubeIDSuccess = (payload: requestGetYoutubeIDSuccessPayload) => ({
  type: AT.REQUEST_GET_YOUTUBE_ID_SUCCESS,
  payload,
})

const requestGetYoutubeIDError = () => ({
  type: AT.REQUEST_GET_YOUTUBE_ID_ERROR,
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

export interface addCachePayload {
  key: string
  cache: Cache
}
const addCache = (payload: addCachePayload) => ({
  type: AT.ADD_CACHE,
  payload,
})

export interface deleteCachePayload {
  key: string
}
const deleteCache = (payload: deleteCachePayload) => ({
  type: AT.DELETE_CACHE,
  payload,
})

export const actions = {
  initState,
  updateLocation,
  changeBrand,

  requestGetRecentSongs,
  requestGetRecentSongsSuccess,
  requestGetRecentSongsError,

  requestGetSearchSongs,
  requestGetSearchSongsSuccess,
  requestGetSearchSongsError,
  changeSearchSegment,

  requestGetYoutubeID,
  requestGetYoutubeIDSuccess,
  requestGetYoutubeIDError,

  addInboxSong,
  deleteInboxSong,
  toggleInboxSong,

  addCache,
  deleteCache,
}
