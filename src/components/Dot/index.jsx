import React from 'react'
import classNames from 'classnames/bind'
import { css } from 'linaria'

const noop = () => {}

export const Dot = ({ active = false, onClick = noop }) => {
  return (
    <li
      onClick={onClick}
      style={{
        cursor: !active ? 'pointer' : 'default',
        display: 'inline-block',
        border: !active ? '1px solid #000' : '',
        margin: '0 8px',
        width: 30,
        height: 30,
        backgroundColor: active ? '#000' : '#CFE2F3',
        borderRadius: '50%',
      }}
    />
  )
}

export const Dots = ({ number, active, onClick = noop }) => {
  return (
    <ul
      className={classNames(css`
        position: absolute;
        width: 100%;
        bottom: -58px;
        list-style: none;
        margin: 0;
        padding: 0;
      `)}
    >
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
  )
}
