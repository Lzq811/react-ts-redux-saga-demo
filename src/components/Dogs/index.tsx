import React from 'react'
import { connect } from 'react-redux'

import { FecthDog } from '../../store/action'

import {IState} from '../../store/types'

import DogUI from './dogUI'

const Dogs = (props: any) => {

  const {dogUrl, dogHistorylist, onFecthDog} = props

  return <>
    <DogUI dogUrl={dogUrl} dogHistorylist={dogHistorylist} onFecthDog={onFecthDog} />
  </>
}

const mapStateToProps = (state:IState) => ({dogUrl: state.dogUrl, dogHistorylist: state.dogHistorylist})

const mapDispatchToProps = (disptch: any) => ({ onFecthDog: () => disptch(FecthDog()) })

const ConnectDogs = connect(mapStateToProps, mapDispatchToProps)(Dogs)

export default ConnectDogs