import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card from './components/card'
import './App.css'

const App = () => {
  return (
    <div>
      <Navbar/>
      <div className="cards">
      <Card title="Card 1" desc="Description 1 of card 1"/>
      <Card title="Card 2" desc="Description 1 of card 2"/>
      <Card title="Card 3" desc="Description 1 of card 3"/>
      <Card title="Card 4" desc="Description 1 of card 4"/>
      <Card title="Card 4" desc="Description 1 of card 4"/>
      </div>
      <Footer/>
    </div>
  )
}

export default App