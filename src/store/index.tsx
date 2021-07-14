import { createStore } from "redux"

import reducer from "./reducer"

interface myWin extends Window {
  __REDUX_DEVTOOLS_EXTENSION__:any
}

declare const window:myWin

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store