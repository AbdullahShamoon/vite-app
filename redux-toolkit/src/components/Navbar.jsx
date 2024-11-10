import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const countt = useSelector((state) => state.counter.value)
  return (
    <div>
        <h1>The count is : {countt}  </h1>
    </div>
  )
}

export default Navbar