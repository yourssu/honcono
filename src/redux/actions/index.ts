import * as AT from './ActionTypes';

//import { createAction } from '@reduxjs/toolkit';
import { SearchReducer, SongType } from '../../types';

const initFavorite = () => ({
  type: AT.INIT_FAVORITE,
})

const initFavoriteSuccess = (songs: SongType[]) => ({
  type: AT.INIT_FAVORITE_SUCCESS,
  payload: songs,
})

const requesetGetRecentSongs = () => ({
  type: AT.REQUESET_GET_RECENT_SONGS,
})

const requesetGetRecentSongsSuccess = (songs: SongType[]) => ({
  type: AT.REQUESET_GET_RECENT_SONGS_SUCCESS,
  payload: songs
})

const requesetGetSearchSongs = (keyword: Pick<SearchReducer, 'keyword'>) => ({
  type: AT.REQUESET_GET_SEARCH_SONGS,
  payload: keyword
})

interface SearchSongsPayload {
  byTitle: SongType[],
  bySinger: SongType[],
}

const requesetGetSearchSongsSuccess = (searchSongsPayload: SearchSongsPayload) => ({
  type: AT.REQUESET_GET_SEARCH_SONGS_SUCCESS,
  payload: searchSongsPayload
})

export const actions = {
  initFavorite,
  initFavoriteSuccess,
  requesetGetRecentSongs,
  requesetGetRecentSongsSuccess,
  requesetGetSearchSongs,
  requesetGetSearchSongsSuccess,
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
