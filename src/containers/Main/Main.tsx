import React from 'react'

import { Redirect, Route, RouteComponentProps, Switch } from 'react-router'
import { Navbar } from './../../components'

const Main = (props: RouteComponentProps) => {
  const baseUrl = props.match.url
  console.log(baseUrl)
  return (
    <>
      <Navbar />
      <Switch>
        <Route path={`${baseUrl}/fav`} render={() => <div className="nav-margin">Fav</div>} />
        <Route path={`${baseUrl}/albums`} render={() => <div className="nav-margin">Albums</div>} />
        <Redirect to={`${baseUrl}/fav`} from={`${baseUrl}`} exact={true} />
      </Switch>
    </>
  )
}

export default Main
