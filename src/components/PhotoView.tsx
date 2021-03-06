import React from 'react'

import { IPhoto } from '../core/photo'
import { Photo } from './Photo'

export interface IProps {
  photo: IPhoto
  isCheckboxVisible?: boolean
  isSelected?: boolean
  onSelected?: (photo: IPhoto) => void
  onClick?: (photo: IPhoto) => void
}

function shouldUpdate(prev: IProps, cur: IProps) {
  return (
    prev.isCheckboxVisible === cur.isCheckboxVisible &&
    prev.isSelected === cur.isSelected &&
    prev.photo === cur.photo
  )
}

function photoView(props: IProps) {
  const onSelected = () => {
    if (props.onSelected) props.onSelected(props.photo)
  }

  const onClick = () => {
    if (props.onClick && props.isCheckboxVisible) props.onClick(props.photo)
  }

  const getClass = () => {
    const defaultClass = 'photoview '
    const active = props.isSelected ? 'active ' : ''
    const pointer = props.isCheckboxVisible ? 'pointer' : ''
    return defaultClass + active + pointer
  }

  const getCheckbox = () => {
    const active = props.isCheckboxVisible ? 'active' : ''
    return (
      <label className={'photo-checkbox checkbox ' + active}>
        <input type="checkbox" onChange={onSelected} checked={props.isSelected} />
        <span className="checkmark" />
      </label>
    )
  }

  return (
    <div className={getClass()} onClick={onClick}>
      {getCheckbox()}
      <Photo url={props.photo.url} />
    </div>
  )
}

export const PhotoView = React.memo(photoView, shouldUpdate)
