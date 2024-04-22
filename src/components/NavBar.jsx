import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <nav className="navbar bg-base-100" role="navigation">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl" href="/">
          OLADAPO
        </a>
      </div>
      <div className="flex-none">
        <div className="flex flex-row gap-5 pr-4">
          <div className="">
            <NavLink to="/" role="menuitem">
              Repo
            </NavLink>
          </div>
          <div className="">
            <NavLink to="/About" role="menuitem">
              About
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
