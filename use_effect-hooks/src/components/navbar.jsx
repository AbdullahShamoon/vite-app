import React from 'react'
import { useEffect } from 'react'

const navbar = (prop) => {

    useEffect(() => {
        alert('i will be executed on change of value color ')

    }, [color])

    return (
        <div>
            <h1>Navbar is of colour {prop.color}</h1>



        </div>
    )
}

export default navbar