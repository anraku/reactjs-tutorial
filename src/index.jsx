import React from 'react'
import { render } from 'react-dom'
// import { Provider } from 'react-redux'
import App from './components/App'

const name = "daimori"
render(
  <div>
  {/* <Provider> */}
    <App name={name} />
  {/* </Provider>, */}
  </div>,
  document.getElementById('root')
)