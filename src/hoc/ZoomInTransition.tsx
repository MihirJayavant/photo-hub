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

interface IDelayTransitionProps {
  index: number
  className: string
}

export function DelayTransition(props: PropsWithChildren<IDelayTransitionProps>) {
  return (
    <div className={props.className} style={{ transitionDelay: `${props.index * 0.05}s` }}>
      {props.children}
    </div>
  )
}
