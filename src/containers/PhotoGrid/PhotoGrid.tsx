import React, { useState } from 'react'

import { List, Map } from 'immutable'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
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
    return photos.map((p, i) => (
      <CSSTransition
        key={p.position}
        classNames="photo-animation"
        timeout={{ enter: 2000, exit: 0 }}
      >
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
      </CSSTransition>
    ))
  }

  return (
    <TransitionGroup className="columns is-multiline" component="div">
      <CSSTransition key={-1} classNames="photo-animation" timeout={{ enter: 500, exit: 0 }}>
        <div className="skeleton column is-full" />
      </CSSTransition>
      {getPhotos(props.photos)}
    </TransitionGroup>
  )
}
