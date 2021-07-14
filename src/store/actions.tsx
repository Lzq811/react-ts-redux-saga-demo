export const plusAction = (num:number) => {
  console.log('plusaction')
  return {
    type: 'PLUS',
    num
  }
}

export const dplusAction = (num:number) => {
  console.log('dplusaction')
  return {
    type: 'DPLUS',
    num
  }
}