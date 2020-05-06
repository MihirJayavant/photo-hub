import React, { useState } from 'react'

import { List, Set } from 'immutable'
import { TransitionGroup } from 'react-transition-group'
import { PhotoView } from '../../components'
import { IPhoto } from '../../core/index'
import { ZoomInTransition } from '../../hoc'

// tslint:disable:jsx-no-lambda

interface IProps {
  photos: List<IPhoto>
  isCheckBoxVisible?: boolean
  selectedPhotos?: Set<number>
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
    const { isCheckBoxVisible, selectedPhotos: selectedPhoto } = props
    return photos.map((p, i) => (
      <ZoomInTransition key={p.id}>
        <div
          className="column is-narrow"
          onMouseEnter={() => onMouseEnter(p.id)}
          onMouseLeave={onMouseLeave}
          style={{ transitionDelay: `${i * 0.05}s` }}
        >
          <PhotoView
            photo={p}
            onSelected={onSelection}
            isCheckboxVisible={isCheckBoxVisible || mousePosition === p.id}
            isSelected={selectedPhoto ? selectedPhoto.has(p.id) : false}
          />
        </div>
      </ZoomInTransition>
    ))
  }

  return (
    <TransitionGroup className="columns is-multiline" component="div">
      <ZoomInTransition key={-1}>
        <div className="skeleton column is-full" />
      </ZoomInTransition>
      {getPhotos(props.photos)}
    </TransitionGroup>
  )
}
