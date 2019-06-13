import React from 'react'

import { IPhoto } from '../core/photo'
import { Photo } from './Photo'

export interface IProps {
  photo: IPhoto
}

export const AdvancePhoto = (props: IProps) => {
  return (
    <div className="hover-effect">
      <Photo url={props.photo.url} />
      <div className="photo-checkbox checkbox">
        <input type="checkbox" />
        <span className="checkmark" />
      </div>
    </div>
  )
}
