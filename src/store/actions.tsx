import ActionTypes from './ActionTypes'

export const FetchDog = () => {
  return {
    type: ActionTypes.FETCH_DOG
  }
}

export const FetchDogLoaded = (url: string) => {
  return {
    type: ActionTypes.FETCH_DOG_SUCCESS,
    url
  }
}

export const FetchDogFail = (err: any) => {
  return {
    type: ActionTypes.FETCH_DOG_FAILED,
    err
  }
}