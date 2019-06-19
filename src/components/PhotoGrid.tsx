import React from 'react'

import { List, Map } from 'immutable'
import { IPhoto } from '../core'
import { AdvancePhoto } from './AdvancePhoto'

interface IProps {
  photos: List<IPhoto>
  isCheckBoxVisible?: boolean
  selectedPhoto?: Map<number, IPhoto>
  onSelection?: (photo: IPhoto) => void
}

export const PhotoGrid = (props: IProps) => {
  const onSelection = (photo: IPhoto) => {
    if (props.onSelection) props.onSelection(photo)
  }

  const getPhotos = (photos: List<IPhoto>) => {
    const { isCheckBoxVisible, selectedPhoto } = props
    return photos.map(p => (
      <div className="column is-narrow" key={p.position}>
        <AdvancePhoto
          photo={p}
          onSelected={onSelection}
          isCheckboxVisible={isCheckBoxVisible}
          isSelected={selectedPhoto ? selectedPhoto.has(p.position) : false}
        />
      </div>
    ))
  }

  return (
    <div className="columns is-multiline is-gapless is-mobile">
      <div className="column is-full">
        <div className="skeleton" />
      </div>
      {getPhotos(props.photos)}
    </div>
  )
}
