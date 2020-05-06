import React, { useEffect } from 'react'

import { List, Set } from 'immutable'
import { connect } from 'react-redux'
import { IPhoto } from '../../core'
import { ElectronImagePicker } from '../../infrastructure'
import * as store from '../../store'
import { PhotoGrid } from '../PhotoGrid'

interface IProps {
  photos: List<IPhoto>
  selectedPhotos: Set<number>
  isAnyPhotoSelected: boolean
  addFavourite: (url: string[]) => void
  deleteFavourite: (selectedPhotos: Set<number>) => void
  loadFavourite: () => void
  selectPhoto: (photoId: number) => void
}

const picker = new ElectronImagePicker()

function FavouritePage(props: IProps) {
  const {
    photos,
    selectedPhotos,
    isAnyPhotoSelected,
    addFavourite,
    loadFavourite,
    selectPhoto,
  } = props

  console.log(selectedPhotos.toArray())

  const onBtnClick = () => {
    if (isAnyPhotoSelected) props.deleteFavourite(selectedPhotos)
    else picker.open()
  }

  const onSelection = (photo: IPhoto) => {
    selectPhoto(photo.id)
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
    return isAnyPhotoSelected ? <i className="far fa-trash-alt" /> : <i className="fas fa-plus" />
  }

  return (
    <div className="photo-grid">
      <PhotoGrid
        photos={photos}
        onSelection={onSelection}
        isCheckBoxVisible={isAnyPhotoSelected}
        selectedPhotos={selectedPhotos}
      />
      <div className="floating-btn" onClick={onBtnClick}>
        <span className="icon">{getIcon()}</span>
      </div>
    </div>
  )
}

const mapStateToProps = (state: store.IState) => ({
  photos: store.getFavouritePhotos(state),
  selectedPhotos: store.getFavouriteSelectedPhotos(state),
  isAnyPhotoSelected: store.getFavouriteIsAnyPhotoSelected(state),
})

const mapDispatchToProps = {
  addFavourite: store.addFavourite,
  deleteFavourite: store.deleteFavourite,
  loadFavourite: store.loadFavourite,
  selectPhoto: store.selectFavourite,
}

export default connect(mapStateToProps, mapDispatchToProps)(FavouritePage)
