
import ActionTypes from "./ActionTypes"

export const PlusAction = (step: number) => ({type: ActionTypes.PLUS, payload: { step }})

export const DplusAction = (step: number) => ({type: ActionTypes.DPLUS, payload: { step }})

export const FecthDog = () => ({type: ActionTypes.FETCH_DOG})
export const FecthDogLoaded = (url: string) => ({type: ActionTypes.FETCH_DOG_SUCCESS, payload: { url }})
export const FecthDogFail = (err: any) => ({type: ActionTypes.FETCH_DOG_FAILURE, err})