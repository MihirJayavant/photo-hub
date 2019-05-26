import React from 'react'

import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './AppRoutes'

const App = () => {
  return (
    <BrowserRouter>
      <div className="App has-text-white has-background-black dark-scroll">
        <AppRoutes />
      </div>
    </BrowserRouter>
  )
}

export default App
