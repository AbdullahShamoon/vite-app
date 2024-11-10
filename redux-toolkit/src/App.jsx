import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment , incrementByAmount , multiply} from './app/counter/counterSlice'

function App() {
  const countt = useSelector((state) => state.counter.value)
  const change = useDispatch()

  return (
    <>
      <Navbar />
      <div>
        <button onClick={()=> change(incrementByAmount(5))}>+5</button><br />
        <button onClick={() => change(increment())}>+</button>
        <h2>{countt}</h2>
        <button onClick={() => change(decrement())}>-</button>
        <button onClick={() => change(multiply())}>x2</button>

      </div>
    </>
  )
}

export default App
