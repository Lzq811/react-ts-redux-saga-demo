import { createStore } from 'redux'

import reducers from './reducers'
interface myWin extends Window {
  __REDUX_DEVTOOLS_EXTENSION__: any
}

declare const window:myWin

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store