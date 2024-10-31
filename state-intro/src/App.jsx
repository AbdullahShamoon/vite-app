import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <h1>Vite + React</h1>
      <h2> <u>COUNTER APP</u></h2>

      <div>Counter : {count}</div>
      <button onClick={() => { setCount(count + 1) }}>Update</button>

    </>
  )
}

export default App
