import { put, all, call, takeLatest } from 'redux-saga/effects'
import { actions } from './actions'

import * as AT from './actions/ActionTypes'
import { getKyIndex, getTjIndex } from './apis'

function* getTjRecentSongs() {
  try {
    // @ts-ignore
    const tjSongs = yield call(getTjIndex)
    yield put(
      actions.requesetGetTjRecentSongsSuccess(tjSongs)
    )
  } catch (error) {
    console.error(error)
  }
}
function* getKyRecentSongs() {
  try {
    // @ts-ignore
    const kySongs = yield call(getKyIndex)
    yield put(
      actions.requesetGetKyRecentSongsSuccess(kySongs)
    )
  } catch (error) {
    console.error(error)
  }
}

function* getRecentSongs() {
  yield call(getTjRecentSongs)
  yield call(getKyRecentSongs)
}

export default function* rootSaga() {
  yield all([
    takeLatest(AT.REQUESET_GET_RECENT_SONGS, getRecentSongs),
  ])
}
