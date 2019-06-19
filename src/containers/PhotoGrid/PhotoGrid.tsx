import React, { useState } from 'react'

import { List, Map } from 'immutable'
import { AdvancePhoto } from '../../components'
import { IPhoto } from '../../core/index'

// tslint:disable:jsx-no-lambda

interface IProps {
  photos: List<IPhoto>
  isCheckBoxVisible?: boolean
  selectedPhoto?: Map<number, IPhoto>
  onSelection?: (photo: IPhoto) => void
}

export const PhotoGrid = (props: IProps) => {
  const [mousePosition, setMousePosition] = useState(-1)

  const onSelection = (photo: IPhoto) => {
    if (props.onSelection) props.onSelection(photo)
  }

  const onMouseEnter = (position: number) => setMousePosition(position)
  const onMouseLeave = () => setMousePosition(-1)

  const getPhotos = (photos: List<IPhoto>) => {
    const { isCheckBoxVisible, selectedPhoto } = props
    return photos.map(p => (
      <div
        className="column is-narrow"
        key={p.position}
        onMouseEnter={() => onMouseEnter(p.position)}
        onMouseLeave={onMouseLeave}
      >
        <AdvancePhoto
          photo={p}
          onSelected={onSelection}
          isCheckboxVisible={isCheckBoxVisible || mousePosition === p.position}
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
