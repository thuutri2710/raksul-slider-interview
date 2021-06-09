import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Slider from '@/components/Slider'
import { css } from 'linaria'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Slider
        className={css`
          margin-top: 100px !important;
          max-width: 1080px;
          height: 200px;
        `}
      >
        <div
          className={css`
            display: flex;
            justify-content: center;
            align-items: center;
          `}
        >
          1
        </div>
        <div
          className={css`
            display: flex;
            justify-content: center;
            align-items: center;
          `}
        >
          2
        </div>
        <div
          className={css`
            display: flex;
            justify-content: center;
            align-items: center;
          `}
        >
          3
        </div>
        <div
          className={css`
            display: flex;
            justify-content: center;
            align-items: center;
          `}
        >
          4
        </div>
        <div
          className={css`
            display: flex;
            justify-content: center;
            align-items: center;
          `}
        >
          5
        </div>
      </Slider>
    </div>
  )
}

export default App
