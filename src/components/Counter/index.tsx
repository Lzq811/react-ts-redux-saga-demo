import React, { useState } from 'react'

const Counter = (props: any) => {

  const {onPlus, onDplus, counter} = props

  const [step, setStep] = useState(1)

  const changeStep = () => { setStep(Math.floor(Math.random() * 10 + 1)) }

  return <>
    <h1>counter- {counter} </h1>
    <button onClick={() => { onPlus(step) }}>+</button>
    &nbsp; &nbsp; &nbsp; &nbsp;
    <button onClick={() => { onDplus(step) }}>-</button>
    &nbsp; &nbsp; &nbsp; &nbsp;
    <button onClick={changeStep}>changeStep-{step}</button>
    <br />
    <br />
    <br />
    <br />
    <br />
  </>
}

export default Counter