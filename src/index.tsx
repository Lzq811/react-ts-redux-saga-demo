import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { Provider, connect } from 'react-redux'

import store from './store'

import Counter from './components/Counter'
import ConnectDogs from './components/Dogs'

import { CounterDispatchToProps } from './store/dispatchToProps'
import { counterSatteToProps } from './store/stateToProps'
const ConnectCounter = connect(counterSatteToProps, CounterDispatchToProps)(Counter)

ReactDOM.render(
  <Provider store={store} >
    <React.StrictMode>
      <ConnectCounter />
      <ConnectDogs />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
