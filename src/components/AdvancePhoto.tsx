import React from 'react'

import { IPhoto } from '../core/photo'
import { Photo } from './Photo'

export interface IProps {
  photo: IPhoto
  onSelected?: (photo: IPhoto) => void
}

export function AdvancePhoto(props: IProps) {
  const onSelected = () => {
    if (props.onSelected) props.onSelected(props.photo)
  }

  return (
    <div className="hover-effect">
      <Photo url={props.photo.url} />
      <div className="photo-checkbox checkbox">
        <input type="checkbox" onChange={onSelected} />
        <span className="checkmark" />
      </div>
    </div>
  )
}
