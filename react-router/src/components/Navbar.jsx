import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
        <ul>
            <NavLink to='/Home' className={(active) => active.isActive ? 'active' : ''}><li>Home</li></NavLink>
            <NavLink to='/About' className={(active) => active.isActive ? 'active' : ''}><li>About</li></NavLink>
            <NavLink to='/Contact' className={(active) => active.isActive ? 'active' : ''}><li>Contact</li></NavLink>
        </ul>
    </div>
  )
}

export default Navbar