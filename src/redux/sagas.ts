import { put, all, call, takeLatest, select } from 'redux-saga/effects'
import { Action, SearchType } from '../types'
import { actions, requesetGetSearchSongsPayload } from './actions'

import * as AT from './actions/ActionTypes'
import { getRecentSongs, getSearchSongs } from './apis'
import Selector from './selectors'

function* getRecentSongsSaga() {
  try {
    // @ts-ignore
    const brand = yield select(Selector.getBrand)
    // @ts-ignore
    const recentSongs = yield call(getRecentSongs, brand)
    yield put(
      actions.requesetGetRecentSongsSuccess({
        recentSongs,
      })
    )
  } catch (error) {
    console.error(error)
  }
}

// @ts-ignore
function* getSearchSongsSaga({ payload }: Action<requesetGetSearchSongsPayload>) {
  try {
    // @ts-ignore
    const brand = yield select(Selector.getBrand)

    const [byTitle, bySinger, byNumber] = yield all([
      // @ts-ignore
      call(getSearchSongs, {
        keyword: payload.keyword,
        type: SearchType.Title,
        brand,
      }),
      // @ts-ignore
      call(getSearchSongs, {
        keyword: payload.keyword,
        type: SearchType.Singer,
        brand,
      }),
      // @ts-ignore
      call(getSearchSongs, {
        keyword: payload.keyword,
        type: SearchType.Number,
        brand,
      }),
    ])

    yield put(
      actions.requesetGetSearchSongsSuccess({
        byTitle,
        bySinger,
        byNumber,
      })
    )
  } catch (error) {
    console.error(error)
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(AT.REQUESET_GET_RECENT_SONGS, getRecentSongsSaga),
    takeLatest(AT.REQUESET_GET_SEARCH_SONGS, getSearchSongsSaga),
  ])
}
