import React from 'react'
import Nav from './Nav'
import NavLogo from './NavLogo'

function NavBar() {
  return (
    <header className="container mx-auto w-full sm:my-5 sm:rounded flex justify-between items-center p-4 bg-gray-200">
      <NavLogo />
      <Nav />
    </header>
  )
}

export default NavBar
