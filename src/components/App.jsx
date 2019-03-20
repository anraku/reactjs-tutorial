import React from 'react'
import Header from './header.jsx'

const App = ({ name }) => (
  <div>
    <Header />
    Hello {name}
  </div>
)

export default App