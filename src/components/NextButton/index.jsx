import React from 'react'
import './style.css'

const NextButton = ({ onClick, className }) => {
  return (
    <div className="btn__next--wrapper " role="button" onClick={onClick}>
      <div className="btn__next--inner" />
    </div>
  )
}

export default NextButton
