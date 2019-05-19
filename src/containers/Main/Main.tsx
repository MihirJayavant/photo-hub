import React from 'react'

import { Redirect, Route, RouteComponentProps, Switch } from 'react-router'
import { AlbumsPage } from '../AlbumsPage'
import { FavouritePage } from '../FavouritePage'
import { Navbar } from './../../components'

const Main = (props: RouteComponentProps) => {
  const baseUrl = props.match.url
  return (
    <>
      <Navbar />
      <Switch>
        <Route path={`${baseUrl}/fav`} component={FavouritePage} />
        <Route path={`${baseUrl}/albums`} component={AlbumsPage} />
        <Redirect to={`${baseUrl}/fav`} from={`${baseUrl}`} exact={true} />
      </Switch>
    </>
  )
}

export default Main
