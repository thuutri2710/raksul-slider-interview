import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Slider from '@/components/Slider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Slider/>
    </div>
  )
}

export default App
