import React from 'react'

import { List } from 'immutable'
import { connect } from 'react-redux'
import { Photo } from '../../components'
import { IPhoto } from '../../core'
import { IState, getFavPhotos } from '../../store'

interface IProps {
  photos: List<IPhoto>
}

const getPhotos = (photos: List<IPhoto>) => {
  return photos.map((p, i) => (
    <div className="column is-narrow" key={i}>
      <Photo url={p.url} />
    </div>
  ))
}

const FavouritePage = (props: IProps) => {
  return (
    <div className="photo-grid">
      <div className="columns is-multiline is-gapless is-mobile">
        <div className="column is-full">
          <div className="skeleton" />
        </div>
        {getPhotos(props.photos)}
      </div>
    </div>
  )
}

const mapStateToProps = (state: IState) => ({
  photos: getFavPhotos(state)
})

export default connect(mapStateToProps)(FavouritePage)
