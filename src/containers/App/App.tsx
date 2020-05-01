import React from 'react'

import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './AppRoutes'

function App() {
  return (
    <BrowserRouter>
      <div className="App has-text-white dark-scroll">
        <AppRoutes />
      </div>
    </BrowserRouter>
  )
}

export default App
