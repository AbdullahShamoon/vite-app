import React, { useContext } from 'react'
import counterContext from '../context/context'

const Component3 = () => {
    const val = useContext(counterContext)
    return (
        <div>
            <button onClick={() => val.setCount((count) => count + 1)}>Component3</button><br/>
            {val.count}
        </div>
    )
}

export default Component3