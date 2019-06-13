import React from 'react'

import { List } from 'immutable'
import { IPhoto } from '../core'
import { AdvancePhoto } from './AdvancePhoto'

interface IProps {
  photos: List<IPhoto>
}

const getPhotos = (photos: List<IPhoto>) => {
  return photos.map(p => (
    <div className="column is-narrow" key={p.position}>
      <AdvancePhoto photo={p} />
    </div>
  ))
}

export const PhotoGrid = (props: IProps) => {
  return (
    <div className="columns is-multiline is-gapless is-mobile">
      <div className="column is-full">
        <div className="skeleton" />
      </div>
      {getPhotos(props.photos)}
    </div>
  )
}
