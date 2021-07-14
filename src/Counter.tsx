import React, { useState } from "react"

const Counter = (props: any) => {

  const [step, setStep] = useState(1)

  const { value, onDplusClick, onPlusClick } = props

  const dplus = () => {
    onDplusClick(step)
  }

  const plus = () => {
    onPlusClick(step)
  }

  const changeStep = () => {
    setStep(Math.floor(Math.random() * 10 + 1))
  }

  return <>
    <h1>count-{value}</h1>
    <button onClick={plus}>+</button>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <button onClick={dplus}>-</button>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <button onClick={changeStep}>step-{step}</button>
  </>
}

export default Counter