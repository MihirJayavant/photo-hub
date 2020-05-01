import React, { useEffect, useState } from 'react'

import { List, Map } from 'immutable'
import { connect } from 'react-redux'
import { IPhoto } from '../../core'
import { ElectronImagePicker } from '../../infrastructure'
import * as store from '../../store'
import { PhotoGrid } from '../PhotoGrid'

interface IProps {
  photos: List<IPhoto>
  addFavourite: (url: string[], startPosition: number) => void
  deleteFavourite: (selectedPhotos: Map<number, IPhoto>) => void
  loadFavourite: () => void
}

const picker = new ElectronImagePicker()

function FavouritePage(props: IProps) {
  const { photos, addFavourite, loadFavourite } = props
  const [selectedPhoto, setSelectedPhoto] = useState(Map<number, IPhoto>())

  const onBtnClick = () => {
    if (selectedPhoto.count() === 0) picker.open()
    else {
      props.deleteFavourite(selectedPhoto)
      setSelectedPhoto(Map<number, IPhoto>())
    }
  }

  const onSelection = (photo: IPhoto) => {
    if (selectedPhoto.has(photo.position)) setSelectedPhoto(selectedPhoto.remove(photo.position))
    else setSelectedPhoto(selectedPhoto.set(photo.position, photo))
  }

  useEffect(() => {
    picker.onImageSelected(files => {
      if (files) addFavourite(files, photos.count())
    })
    return () => picker.dispose()
  }, [photos, addFavourite])

  useEffect(() => {
    loadFavourite()
  }, [loadFavourite])

  const getIcon = () => {
    return selectedPhoto.count() === 0 ? (
      <i className="fas fa-plus" />
    ) : (
      <i className="far fa-trash-alt" />
    )
  }

  return (
    <div className="photo-grid">
      <PhotoGrid
        photos={photos}
        onSelection={onSelection}
        isCheckBoxVisible={selectedPhoto.count() > 0}
        selectedPhoto={selectedPhoto}
      />
      <div className="floating-btn" onClick={onBtnClick}>
        <span className="icon">{getIcon()}</span>
      </div>
    </div>
  )
}

const mapStateToProps = (state: store.IState) => ({
  photos: store.getFavPhotos(state),
})

const mapDispatchToProps = {
  addFavourite: store.addFavourite,
  deleteFavourite: store.deleteFavourite,
  loadFavourite: store.loadFavourite,
}

export default connect(mapStateToProps, mapDispatchToProps)(FavouritePage)
