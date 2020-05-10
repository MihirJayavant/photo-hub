import React, { PropsWithChildren } from 'react'

interface IModalProps {
  isOpen: boolean
}

export function Modal(props: PropsWithChildren<IModalProps>) {
  return (
    <div className={props.isOpen ? 'modal is-active' : 'modal'}>
      <div className="modal-background" />
      <div className="modal-card">{props.children}</div>
    </div>
  )
}

interface IModalHeaderProps {
  onClick: () => void
}

export function ModalHeader(props: PropsWithChildren<IModalHeaderProps>) {
  return (
    <header className="modal-card-head has-background-dark">
      <p className="modal-card-title has-text-white">{props.children}</p>
      <button className="delete" aria-label="close" onClick={props.onClick} />
    </header>
  )
}

export function ModalBody(props: PropsWithChildren<{}>) {
  return <section className="modal-card-body has-background-black-ter">{props.children}</section>
}

export function ModalFooter(props: PropsWithChildren<{}>) {
  return <footer className="modal-card-foot has-background-dark">{props.children}</footer>
}
