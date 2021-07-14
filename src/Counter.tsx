import React from "react"

import store from "./store"

import { plusAction, dplusAction } from "./store/actions"

const Counter = () => {

  const plus = () => {
    store.dispatch(plusAction(1))
  }

  const dplus = () => {
    store.dispatch(dplusAction(1))
  }

  return <>
    <h1>count-{store.getState()}</h1>
    <button onClick={plus}>+</button>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <button onClick={dplus}>-</button>
  </>
}

export default Counter