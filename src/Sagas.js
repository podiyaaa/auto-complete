import { takeEvery, delay, put, takeLatest, call } from 'redux-saga/effects'
import { fetchLocations } from './apis/SearchAPI'

function* getLocations(action) {
  yield put({ type: 'FETCHING' })
  try {
    const data = yield call(fetchLocations, action.value)
    yield put({ type: 'GOT_LOCATIONS', value: data.predictions })
  } catch {
    yield put({ type: 'FETCH_LOCATIONS_ERROR', value: 'Error getiing locations' })
  }
}

export function* rootSaga() {
  yield takeLatest('GET_LOCATIONS', getLocations)
}