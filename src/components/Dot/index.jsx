import React, { useRef, useState } from 'react'
import classNames from 'classnames/bind'
import { css } from 'linaria'
import './style.css'

const noop = () => {}

export const Dot = ({ active = false, onClick = noop }) => {
  return (
    // {/* Should not use inline style */}
    <li
      onClick={onClick}
      className="dot"
      style={{
        cursor: !active ? 'pointer' : 'default',
        border: !active ? '1px solid #000' : '',
        backgroundColor: active ? '#000' : '#CFE2F3',
      }}
    />
  )
}

export const Dots = ({ width, number, active, onClick = noop }) => {
  const ref = useRef()
  const ulWidth = ref?.current?.clientWidth || width

  return (
    <div
      className="dots"
      style={{
        justifyContent: width >= ulWidth ? 'center' : 'start',
        width: width ? `${width}px` : '100%',
      }}
    >
      <ul ref={ref} className="dots__wrapper">
        {Array(number)
          .fill(0)
          .map((d, i) => (
            <Dot
              active={active === i}
              onClick={() => {
                if (active !== i) {
                  onClick(i + 1)
                }
              }}
              key={i}
            />
          ))}
      </ul>
    </div>
  )
}
