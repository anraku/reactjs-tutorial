import React from 'react'
import { render } from 'react-dom'
// import { Provider } from 'react-redux'
import App from './components/App'

render(
  <div>
  {/* <Provider> */}
    <App />
  {/* </Provider>, */}
  </div>,
  document.getElementById('root')
)