const reducer = (preState:number = 10, action: any) => {
  switch (action.type) {
    case 'PLUS':
      return preState + action.num
    case 'DPLUS':
      return preState - action.num
    default:
      return preState
  }
}

export default reducer