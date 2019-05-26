import React from 'react'

import { Col, Row } from 'antd'
import { Photo } from '../../components'

const getPhotos = () => {
  return [0, 1, 2, 4, 5, 6, 7, 89, 1, 2, 3, 4, 6, 3].map((p, i) => (
    <div className="column is-narrow" key={i}>
      <Photo />
    </div>
  ))
}

const FavouritePage = () => {
  return (
    <div className="photo-grid">
      <div className="columns is-multiline is-gapless is-mobile">
        <div className="column is-full">
          <div className="skeleton" />
        </div>
        {getPhotos()}
      </div>
    </div>
  )
}

export default FavouritePage
