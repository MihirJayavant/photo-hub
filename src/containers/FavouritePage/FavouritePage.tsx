import React, { useEffect } from 'react'

import { List } from 'immutable'
import { connect } from 'react-redux'
import { Photo } from '../../components'
import { IPhoto } from '../../core'
import { ElectronImagePicker } from '../../infrastructure'
import { addFavourite, getFavPhotos, IState } from '../../store'

interface IProps {
  photos: List<IPhoto>
  addFavourite: (url: string[], startPosition: number) => void
}

const getPhotos = (photos: List<IPhoto>) => {
  return photos.map((p, i) => (
    <div className="column is-narrow" key={i}>
      <Photo url={p.url} />
    </div>
  ))
}

const picker = new ElectronImagePicker()

const FavouritePage = (props: IProps) => {
  const onAddClick = () => {
    picker.open()
  }

  useEffect(() => {
    picker.onImageSelected(files => {
      if (files) props.addFavourite(files, props.photos.count())
    })
    return () => picker.dispose()
  })

  return (
    <div className="photo-grid">
      <div className="columns is-multiline is-gapless is-mobile">
        <div className="column is-full">
          <div className="skeleton" />
        </div>
        {getPhotos(props.photos)}
      </div>
      <a className="floating-btn" onClick={onAddClick}>
        <span className="icon">
          <i className="fas fa-plus" />
        </span>
      </a>
    </div>
  )
}

const mapStateToProps = (state: IState) => ({
  photos: getFavPhotos(state)
})

const mapDispatchToProps = {
  addFavourite
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavouritePage)
