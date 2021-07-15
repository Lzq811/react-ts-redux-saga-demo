import ActionTypes from "./ActionTypes"

const defaultState: string = 'https://images.dog.ceo/breeds/shiba/shiba-13.jpg'

const reducer = (perState: string = defaultState, action: any) => {
  switch (action.type) {
    case ActionTypes.FETCH_DOG_SUCCESS:
      return action.url
    default:
      return perState
  }
}

export default reducer