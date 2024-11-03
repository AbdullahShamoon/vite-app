import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const handleClick = () => {
    alert("Hey I am clicked")
  }
  const handleMouseOver = () => {
    alert("Hey I am hovered")
  }

  const [naam, setNaam] = useState("Shamoon")

  const handleChange = (e) => {
    setNaam(e.target.value)
  }

  const [form, setForm] = useState({
    user: "",
    email: ""
  })

  const handleChanges = (e) => {
    const { name, value } = e.target
    setForm({...form,[name]: value })
  }

  return (
    <>
      <div className="button">
        <button onClick={handleClick}>Click me</button>
      </div>
      <div className="mouseOver" onMouseOver={handleMouseOver}>
        I have Mouse over event handler
      </div>
      <input type="text" value={naam} onChange={handleChange} />


      <input type="text" name='user' value={form.user} onChange={handleChanges} />
      <input type="text" name='email' value={form.email} onChange={handleChanges} />


    </>
  )
}

export default App
