import React, { useState } from 'react'

import { List, Map } from 'immutable'
import { CSSTransitionGroup } from 'react-transition-group'
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
      <div
        className="column is-narrow"
        key={p.position}
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
    ))
  }

  return (
    <CSSTransitionGroup
      className="columns is-multiline is-gapless"
      component="div"
      transitionName="photo-animation"
      transitionEnterTimeout={2000}
      transitionLeave={false}
      transitionAppear={true}
      transitionAppearTimeout={2000}
    >
      <div className="column is-full" />
      <div key={-1} className="skeleton" />
      {getPhotos(props.photos)}
    </CSSTransitionGroup>
  )
}
