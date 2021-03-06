import React from 'react'
import { NavLink } from 'react-router-dom'

interface IItem {
  text: string
  link: string
}

interface IProps {
  items: IItem[]
  header: string
}

function getLinks(items: IItem[]) {
  return items.map(p => (
    <NavLink activeClassName="has-background-info	" className="navbar-item" to={p.link} key={p.text}>
      {p.text}
    </NavLink>
  ))
}

function navbar(props: IProps) {
  return (
    <nav
      className="navbar is-fixed-top is-black navbar-opacity"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-item">
        <span className="has-text-weight-bold is-size-4 has-text-light">{props.header}</span>
      </div>

      <div className="navbar-menu">
        <div className="navbar-start">{getLinks(props.items)}</div>
      </div>
    </nav>
  )
}

export const Navbar = React.memo(navbar)
