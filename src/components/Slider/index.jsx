import React, { useState } from 'react'
import { Dots } from '@/components/Dot'
import PrevButton from '@/components/PrevButton'
import NextButton from '@/components/NextButton'

const Slider = ({ children }) => {
  const [activeElement, setActiveElement] = useState(0)

  return (
    <div>
      <NextButton
        onClick={() => {
          if (activeElement < children.length - 1) {
            setActiveElement(activeElement + 1)
          }
        }}
      />
      <PrevButton
        onClick={() => {
          if (activeElement > 0) {
            setActiveElement(activeElement - 1)
          }
        }}
      />
      {children.map}
      <Dots number={5} onClick={setActiveElement} active={activeElement} />
    </div>
  )
}

export default Slider
