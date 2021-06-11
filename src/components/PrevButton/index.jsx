import React from 'react'
import './style.css'

const PrevButton = ({ onClick, className }) => {
  return (
    <div className="btn__prev--wrapper" role="button" onClick={onClick}>
      <div className="btn__prev--inner " />
    </div>
  )
}

export default PrevButton
