import { put, all, call, takeLatest, select } from 'redux-saga/effects'
import { Action, SearchSegment } from '../types'
import { getIntelligentSegment } from '../utils'
import { actions, requestGetSearchSongsPayload } from './actions'

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
      actions.requestGetRecentSongsSuccess({
        recentSongs,
      })
    )
  } catch (error) {
    console.error(error)
  }
}

// @ts-ignore
function* getSearchSongsSaga({ payload }: Action<requestGetSearchSongsPayload>) {
  try {
    // @ts-ignore
    const prevKeyword = yield select(Selector.getSearchKeyword)
    if (payload.keyword === prevKeyword) {
      yield put(
        actions.requestGetSearchSongsError()
      )
    }
    // @ts-ignore
    const brand = yield select(Selector.getBrand)

    const [byTitle, bySinger, byNumber] = yield all([
      // @ts-ignore
      call(getSearchSongs, {
        keyword: payload.keyword,
        type: SearchSegment.Title,
        brand,
      }),
      // @ts-ignore
      call(getSearchSongs, {
        keyword: payload.keyword,
        type: SearchSegment.Singer,
        brand,
      }),
      // @ts-ignore
      call(getSearchSongs, {
        keyword: payload.keyword,
        type: SearchSegment.Number,
        brand,
      }),
    ])

    const newSearchSegment = getIntelligentSegment(
      byTitle.length,
      bySinger.length,
      byNumber.length,
    )

    yield all([
      put (
        actions.changeSearchSegment({
          segment: newSearchSegment
        })
      ),
      put (
        actions.requestGetSearchSongsSuccess({
          byTitle,
          bySinger,
          byNumber,
        })
      ),
    ]) 
  } catch (error) {
    yield put(
      actions.requestGetSearchSongsError()
    )
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(AT.REQUEST_GET_RECENT_SONGS, getRecentSongsSaga),
    takeLatest(AT.REQUEST_GET_SEARCH_SONGS, getSearchSongsSaga),
  ])
}
