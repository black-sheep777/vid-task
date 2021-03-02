import React from 'react'
import ReactDOM from 'react-dom'
import 'index.scss'
import App from 'components/app/App'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from 'components/reducers/callersReducer'
import reportWebVitals from './reportWebVitals'

const caseSession = createStore(reducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={caseSession}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
