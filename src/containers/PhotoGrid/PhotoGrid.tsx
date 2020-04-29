import React, { useState } from 'react'

import { List, Map } from 'immutable'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { AdvancePhoto } from '../../components'
import { IPhoto } from '../../core/index'
import { ZoomInTransition } from '../../hoc'

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
    return photos.map((p, i) => (
      <ZoomInTransition key={p.position}>
        <div
          className="column is-narrow"
          onMouseEnter={() => onMouseEnter(p.position)}
          onMouseLeave={onMouseLeave}
          style={{ transitionDelay: `${i * 0.05}s` }}
        >
          <AdvancePhoto
            photo={p}
            onSelected={onSelection}
            isCheckboxVisible={isCheckBoxVisible || mousePosition === p.position}
            isSelected={selectedPhoto ? selectedPhoto.has(p.position) : false}
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
