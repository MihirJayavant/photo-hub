import React, { useState } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter } from '../../components'

function AlbumsPage() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div className="AlbumPage">
      <button className="button is-primary" onClick={toggle}>
        Open
      </button>

      <Modal isOpen={isOpen}>
        <ModalHeader onClick={toggle}>Modal title</ModalHeader>
        <ModalBody>Title</ModalBody>
        <ModalFooter>
          <button className="button is-success">Save changes</button>
          <button className="button">Cancel</button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default AlbumsPage
