import React from 'react'

import { List } from 'immutable'
import { connect } from 'react-redux'
import { Photo } from '../../components'
import { IPhoto } from '../../core'
import { getFavPhotos, IState } from '../../store'

import { IpcRenderer } from 'electron'

declare global {
  interface Window {
    require: (
      module: 'electron'
    ) => {
      ipcRenderer: IpcRenderer
    }
  }
}

const { ipcRenderer } = window.require('electron')

interface IProps {
  photos: List<IPhoto>
}

const getPhotos = (photos: List<IPhoto>) => {
  return photos.map((p, i) => (
    <div className="column is-narrow" key={i}>
      <Photo url={p.url} />
    </div>
  ))
}

ipcRenderer.on('selected-pic', (event: any, files: any) => {
  console.log(files)
})

const onAddClick = () => {
  ipcRenderer.send('open-filepicker-for-pics')
}

const FavouritePage = (props: IProps) => {
  return (
    <div className="photo-grid">
      <div className="columns is-multiline is-gapless is-mobile">
        <div className="column is-full">
          <div className="skeleton" />
        </div>
        {getPhotos(props.photos)}
      </div>
      <button className="floating-btn" onClick={onAddClick}>
        <span className="icon">
          <i className="fas fa-plus" />
        </span>
      </button>
    </div>
  )
}

const mapStateToProps = (state: IState) => ({
  photos: getFavPhotos(state)
})

export default connect(mapStateToProps)(FavouritePage)
