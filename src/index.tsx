import React from 'react'
import reducer from './redux/reducers'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux"
import createSagaMiddleware from 'redux-saga'
import '@yourssu/design-system'
import {
  FoundationProvider,
  LightFoundation
} from '@yourssu/design-system'

import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import rootSaga from './redux/sagas'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware(), sagaMiddleware],
})

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <FoundationProvider foundation={LightFoundation}>
    <Provider store={store}>
      <App />
    </Provider>
  </FoundationProvider>,
  document.getElementById('root')
)

reportWebVitals()
