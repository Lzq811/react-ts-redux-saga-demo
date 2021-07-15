import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import './index.css';
import Dog from './Dog';
import store from './store';
import { FetchDog } from './store/actions'
import reportWebVitals from './reportWebVitals';

const mapStataToProps = (url: string) => ({ url })

const mapDispatchToProps = (dispatch: any) => {
  return {
    onFetchDogs: () => dispatch(FetchDog())
  }
}

const DogConnect = connect(mapStataToProps, mapDispatchToProps)(Dog)

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <DogConnect />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
