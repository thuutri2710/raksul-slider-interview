import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Slider from '@/components/Slider'
import { css } from 'linaria'

function App() {
  const [count, setCount] = useState(3)

  return (
    <div className="App">
      <div style={{ marginBottom: 20 }}>
        <button
          onClick={() => {
            if (count > 1) {
              setCount(count - 1)
            }
          }}
          className="btn__count"
        >
          Decrease
        </button>
        <button className="btn__count" onClick={() => setCount(count + 1)}>
          Increase
        </button>
      </div>
      <Slider wrapperWidth={1080}>
        {Array(count)
          .fill(0)
          .map((_, i) => (
            <div
              key={`slider-item-${i}`}
              className={css`
                display: flex;
                justify-content: center;
                align-items: center;
              `}
            >
              {i + 1}
            </div>
          ))}
      </Slider>
    </div>
  )
}

export default App
