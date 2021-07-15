
import { call, put, takeEvery } from "@redux-saga/core/effects"

import { FecthDogLoaded, FecthDogFail } from './action'

import axios from "axios"

import ActionTypes from "./ActionTypes"

const fetchDogSaga = function* () {
  try {
    const res: any = yield call(axios.get, `https://dog.ceo/api/breeds/image/random`)
    yield put(FecthDogLoaded(res?.data?.message || null))
  } catch (err: any) {
    yield put(FecthDogFail(err))
  }
}

const dogSaga = function* () {
  yield takeEvery(ActionTypes.FETCH_DOG, fetchDogSaga)
}

export default dogSaga
