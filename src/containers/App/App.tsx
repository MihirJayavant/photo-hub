import React, { useEffect } from 'react'

import { connect } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { loadDatabase, IState, getDb } from '../../store'
import { AppRoutes } from './AppRoutes'

interface IProps {
  db: any
  loadDatabase: () => void
}

const App = (props: IProps) => {
  useEffect(() => {
    props.loadDatabase()
  }, [])

  return (
    <BrowserRouter>
      <div className="App has-text-white dark-scroll">
        <AppRoutes />
      </div>
    </BrowserRouter>
  )
}

const mapStateToProps = (state: IState) => ({
  db: getDb(state)
})

const mapDispatchToProps = {
  loadDatabase
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
