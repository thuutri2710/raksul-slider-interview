import React from 'react'

const noop = () => {}

export const Dot = ({ key, active = false, onClick = noop }) => {
  return (
    <li
      onClick={onClick}
      key={key}
      style={{
        display: 'inline-block',
        margin: '0 4px',
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
    <ul style={{ listStyle: 'none' }}>
      {Array(number)
        .fill(0)
        .map((d, i) => (
          <Dot key={i} active={active === i} onClick={() => onClick(i)} />
        ))}
    </ul>
  )
}
