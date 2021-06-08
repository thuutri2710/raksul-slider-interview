import React from 'react'

const NextButton = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        marginLeft: 100,
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderWidth: '28px 0 28px 56px',
        borderColor: 'transparent transparent transparent #000',
      }}
    >
      <div
        style={{
          position: 'relative',
          top: -27,
          right: 55,
          width: 0,
          height: 0,
          borderStyle: 'solid',
          borderWidth: '27px 0 27px 53px',
          borderColor: 'transparent transparent transparent #cfe2f3',
        }}
      />
    </div>
  )
}

export default NextButton
