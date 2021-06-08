import React, { useState } from 'react'
import { Dots } from '@/components/Dot'

const Slider = ({ children }) => {
  const [activeElement, setActiveElement] = useState(0)

  return (
    <div>
      {/* {children.filter((c, i) => i % 2)} */}
      <Dots number={5} onClick={setActiveElement} active={activeElement} />
    </div>
  )
}

export default Slider
