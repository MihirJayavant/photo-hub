import React, { useState } from 'react'

function AlbumsPage() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div className="AlbumPage">
      <button className="button is-primary" onClick={toggle}>
        Open
      </button>

      <div className={isOpen ? 'modal is-active' : 'modal'}>
        <div className="modal-background" />
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Modal title</p>
            <button className="delete" aria-label="close" onClick={toggle} />
          </header>
          <section className="modal-card-body" />
          <footer className="modal-card-foot">
            <button className="button is-success">Save changes</button>
            <button className="button">Cancel</button>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default AlbumsPage
