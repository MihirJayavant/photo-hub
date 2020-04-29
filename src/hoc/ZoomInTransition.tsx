import React, { PropsWithChildren } from 'react'
import { CSSTransition } from 'react-transition-group'

export function ZoomInTransition(props: PropsWithChildren<{}>) {
  const { children, ...transitionProps } = props
  return (
    <CSSTransition
      {...transitionProps}
      classNames="photo-animation"
      timeout={{ enter: 2000, exit: 0 }}
    >
      {props.children}
    </CSSTransition>
  )
}
