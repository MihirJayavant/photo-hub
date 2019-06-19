import React, { useEffect, useState } from 'react'

import { List, Map } from 'immutable'
import { connect } from 'react-redux'
import { PhotoGrid } from '../../components'
import { IPhoto } from '../../core'
import { ElectronImagePicker } from '../../infrastructure'
import { addFavourite, deleteFavourite, getFavPhotos, IState } from '../../store'

interface IProps {
  photos: List<IPhoto>
  addFavourite: (url: string[], startPosition: number) => void
  deleteFavourite: (selectedPhotos: Map<number, IPhoto>) => void
}

const picker = new ElectronImagePicker()

function FavouritePage(props: IProps) {
  const { photos } = props
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
      if (files) props.addFavourite(files, photos.count())
    })
    return () => picker.dispose()
  }, [photos])

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
        isCheckBoxVisible={true}
        selectedPhoto={selectedPhoto}
      />
      <a className="floating-btn" onClick={onBtnClick}>
        <span className="icon">{getIcon()}</span>
      </a>
    </div>
  )
}

const mapStateToProps = (state: IState) => ({
  photos: getFavPhotos(state)
})

const mapDispatchToProps = {
  addFavourite,
  deleteFavourite
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavouritePage)
