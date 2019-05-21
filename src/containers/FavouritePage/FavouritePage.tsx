import React from 'react'
import { Photo } from '../../components'

const getPhotos = () => {
  return [0].map((p, i) => (
    <div className="column" key={i}>
      <Photo />
    </div>
  ))
}

const FavouritePage = () => {
  return (
    <div className="nav-margin">
      <div className="columns">{getPhotos()}</div>
    </div>
  )
}

export default FavouritePage
