import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Slider from '@/components/Slider'
import { css } from 'linaria'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App" style={{ paddingTop: 100 }}>
      <Slider wrapperWidth={1080}>
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
        <div
          className={css`
            display: flex;
            justify-content: center;
            align-items: center;
          `}
        >
          6
        </div>
        <div
          className={css`
            display: flex;
            justify-content: center;
            align-items: center;
          `}
        >
          7
        </div>
        <div
          className={css`
            display: flex;
            justify-content: center;
            align-items: center;
          `}
        >
          8
        </div>
      </Slider>
    </div>
  )
}

export default App
