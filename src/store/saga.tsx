
import { call, put, takeEvery } from 'redux-saga/effects'

import axios from 'axios'

import { FetchDogLoaded, FetchDogFail} from './actions'

import ActionTypes from './ActionTypes'

const FetchDogSaga = function * () {
  try {
    const res = yield call(axios.get, `https://dog.ceo/api/breeds/image/random`)
    yield put(FetchDogLoaded(res?.data?.message || ''))
  } catch (err: any) {
    yield put(FetchDogFail(err))
  }
}

const dogsaga = function* () {
  yield takeEvery(ActionTypes.FETCH_DOG, FetchDogSaga)
}

export default dogsaga

