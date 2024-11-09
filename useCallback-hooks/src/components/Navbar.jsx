import React from 'react'

const Navbar = (props) => {
  return (
    <div>
        <h3>Navbar {props.p}</h3>
        {props.h()}
    </div>
  )
}

export default Navbar