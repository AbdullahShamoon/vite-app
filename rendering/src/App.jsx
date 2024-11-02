import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [showbtn, setshowbtn] = useState(true)

  const [todos, settodos] = useState([
    {
      title: 'Todo 1',
      description: 'Todo 1 description',
    },
    {
      title: 'Todo 2',
      description: 'Todo 2 description',
    },
  ])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      {/* {showbtn ? <button>showbtn is true</button>: <button>showbtn is false</button>} */}

      {showbtn && <button>showbtn is true</button>}

     {todos.map(item =>{
      return (<div className='m-4 rounded-full border border-1 border-white bg-[#35353583]'>
        <h1 className='text-green-400'>{item.title}</h1>
        <div>{item.description}</div>
      </div>)
     })}


      <div className="card">
        <button onClick={() => setshowbtn(!showbtn)}>
          Toggle showbtn
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
