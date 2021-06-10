import React from 'react'
import classNames from 'classnames/bind'
import { css } from 'linaria'

const noop = () => {}

export const Dot = ({ active = false, onClick = noop }) => {
  return (
    <li
      onClick={onClick}
      style={{
        flexShrink: 0,
        flexGrow: 0,
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
    <div
      className={classNames(css`
        display: flex;
        position: absolute;
        width: 100%;
        bottom: -54px;
        list-style: none;
        margin: 0;
        padding: 0;
        overflow-y: scroll;
      `)}
    >
      <ul
        style={{
          display: 'flex',
          flex: 1,
          justifyContent: window.innerWidth > 650 ? 'start' : 'center',
          margin: 0,
          padding: 0,
        }}
        // className={classNames(css`
        //   position: absolute;
        //   width: 100%;
        //   bottom: -58px;
        //   list-style: none;
        //   margin: 0;
        //   padding: 0;
        // `)}
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
    </div>
  )
}
