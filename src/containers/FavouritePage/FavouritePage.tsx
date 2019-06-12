import React, { useEffect } from 'react'

import { List } from 'immutable'
import { connect } from 'react-redux'
import { Photo, PhotoGrid } from '../../components'
import { IPhoto } from '../../core'
import { ElectronImagePicker } from '../../infrastructure'
import { addFavourite, getFavPhotos, IState } from '../../store'

interface IProps {
  photos: List<IPhoto>
  addFavourite: (url: string[], startPosition: number) => void
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
  }, [])

  return (
    <div className="photo-grid">
      <PhotoGrid photos={props.photos} />
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
