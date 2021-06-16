import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Slider from '@/components/Slider'
import { css } from 'linaria'

function App() {
  const [count, setCount] = useState(3)

  return (
    <div className="App">
      {/* Should not use inline style */}
      <div style={{ marginBottom: 20 }}>
        {/* Should abstract to function */}
        {/* --> TODO: Could you make a function that could be use for both buttons? */}
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
        {/* What is the meaning of btn__count? */}
        <button className="btn__count" onClick={() => setCount(count + 1)}>
          Increase
        </button>
      </div>
      {/* FIXME: Responsive is not working as expected */}
      {/* The solution for calculate the width of a slice is quite complicated and not really efficient (have to listen window resize events) */}
      <Slider wrapperWidth={1080}>
        {Array(count)
          .fill(0)
          .map((_, i) => (
            // Should not use inline style
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
