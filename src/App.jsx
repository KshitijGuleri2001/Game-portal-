import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Cards from './Components/Cards'

function App() {


  return (
    <div className="bg-neutral-950">
    <Navbar />
    <Header />
    <Cards/>
  </div>
  )
}

export default App
