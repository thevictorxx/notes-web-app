import React from 'react'
import NavLink from './NavLink'

function Nav() {
  return (
    <div>
      <ul className="flex gap-2">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/">Login</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Nav
