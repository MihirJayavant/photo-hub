import React from 'react'

const navbar = () => (
  <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <h2>Photo Hub</h2>
      <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>

    <div className="navbar-menu">
      <div className="navbar-start">
        <a className="navbar-item">Home</a>
        <a className="navbar-item">Documentation</a>
      </div>
    </div>
  </nav>
)

export const Navbar = React.memo(navbar)
