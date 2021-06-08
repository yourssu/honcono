import { put, all, call, takeLatest, select } from 'redux-saga/effects'
import { actions } from './actions'

import * as AT from './actions/ActionTypes'
import { getRecentSongs } from './apis'
import Selector from './selectors'

function* getRecentSongsSaga() {
  try {
    // @ts-ignore
    const brand = yield select(Selector.getBrand)
    // @ts-ignore
    const tjSongs = yield call(getRecentSongs, brand)
    yield put(
      actions.requesetGetRecentSongsSuccess(tjSongs)
    )
  } catch (error) {
    console.error(error)
  }
}


export default function* rootSaga() {
  yield all([
    takeLatest(AT.REQUESET_GET_RECENT_SONGS, getRecentSongsSaga),
  ])
}
