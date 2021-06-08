import React from 'react'

const PrevButton = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        marginLeft: 100,
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderWidth: '28px 56px 28px 0',
        borderColor: 'transparent #000 transparent transparent',
      }}
    >
      <div
        style={{
          position: 'relative',
          top: -27,
          left: 2,
          width: 0,
          height: 0,
          borderStyle: 'solid',
          borderWidth: '27px 53px 27px 0',
          borderColor: 'transparent #cfe2f3 transparent transparent',
        }}
      />
    </div>
  )
}

export default PrevButton
