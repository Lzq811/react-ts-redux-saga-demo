import { IState, IAction } from './types'

import ActionTypes from './ActionTypes'

const defaultState: IState = {
  counter: 10,
  dogUrl: 'https://images.dog.ceo/breeds/spaniel-cocker/n02102318_9980.jpg',
  dogHistorylist: ['https://images.dog.ceo/breeds/spaniel-cocker/n02102318_9980.jpg']
}


const reducer = (preState: IState = defaultState, action: IAction) => {
  switch (action.type) {
    case ActionTypes.PLUS:
      return {...preState, counter: preState.counter + action.payload.step}
    case ActionTypes.DPLUS:
      return {...preState, counter: preState.counter - action.payload.step}
    case ActionTypes.FETCH_DOG_SUCCESS:
      const tmpState = {...preState, dogUrl: action.payload.url || preState.dogUrl}
      tmpState.dogHistorylist.unshift(action.payload.url)
      return tmpState
    default:
      return preState
  }
}

export default reducer