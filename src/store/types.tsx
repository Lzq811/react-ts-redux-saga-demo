export interface IState {
  counter: number
  dogUrl: string
  dogHistorylist: string[]
}

export interface IAction {
  type: string
  payload?: any
}
