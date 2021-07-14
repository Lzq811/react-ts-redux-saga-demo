const reducers = (perState: number = 10, action: any) => {
  switch (action.type) {
    case 'PLUS':
      return perState + action.value
    case 'DPLUS':
      return perState - action.value
    default:
      return perState
  }
}

export default reducers