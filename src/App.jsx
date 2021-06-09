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
        `}
      >
        <div
          className={css`
            display: flex;
            justify-content: center;
            align-items: center;
          `}
        >
          <img src="https://cdn.pixabay.com/photo/2018/11/14/20/50/hd-3816045_960_720.jpg" />
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
