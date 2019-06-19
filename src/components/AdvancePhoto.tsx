import React from 'react'

import { IPhoto } from '../core/photo'
import { Photo } from './Photo'

export interface IProps {
  photo: IPhoto
  isCheckboxVisible?: boolean
  isSelected?: boolean
  onSelected?: (photo: IPhoto) => void
}

export function AdvancePhoto(props: IProps) {
  const onSelected = () => {
    if (props.onSelected) props.onSelected(props.photo)
  }

  const getCheckbox = () => {
    if (!props.isCheckboxVisible) return null

    return (
      <div className="photo-checkbox checkbox">
        <input type="checkbox" onChange={onSelected} checked={props.isSelected} />
        <span className="checkmark" />
      </div>
    )
  }

  return (
    <div className="hover-effect">
      <Photo url={props.photo.url} />
      {getCheckbox()}
    </div>
  )
}
