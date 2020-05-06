import React, { useEffect, useState } from 'react'

import { List, Set } from 'immutable'
import { connect } from 'react-redux'
import { IPhoto } from '../../core'
import { ElectronImagePicker } from '../../infrastructure'
import * as store from '../../store'
import { PhotoGrid } from '../PhotoGrid'

interface IProps {
  photos: List<IPhoto>
  addFavourite: (url: string[]) => void
  deleteFavourite: (selectedPhotos: Set<number>) => void
  loadFavourite: () => void
}

const picker = new ElectronImagePicker()

function FavouritePage(props: IProps) {
  const { photos, addFavourite, loadFavourite } = props
  const [selectedPhoto, setSelectedPhoto] = useState(Set<number>())

  const onBtnClick = () => {
    if (selectedPhoto.count() === 0) picker.open()
    else {
      props.deleteFavourite(selectedPhoto)
      setSelectedPhoto(Set<number>())
    }
  }

  const onSelection = (photo: IPhoto) => {
    if (selectedPhoto.has(photo.id)) {
      setSelectedPhoto(selectedPhoto.remove(photo.id))
    } else {
      setSelectedPhoto(selectedPhoto.add(photo.id))
    }
  }

  useEffect(() => {
    picker.onImageSelected(files => {
      if (files) addFavourite(files)
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
