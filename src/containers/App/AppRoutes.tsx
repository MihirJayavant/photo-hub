import React from 'react'

import { Redirect, Route, Switch } from 'react-router'
import { Main } from './../Main'

export const AppRoutes = () => {
  return (
    <Switch>
      <Route path="/main" component={Main} />
      <Redirect to="/main" from="/" exact={true} />
    </Switch>
  )
}
