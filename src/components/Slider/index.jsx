import React from 'react'
import { Dot } from '@/components/Dots'

const Slider = ({ children }) => {
  return (
    <div>
      {/* {children.filter((c, i) => i % 2)} */}
      {children.map((c) => (
        <Dot />
      ))}
    </div>
  )
}

export default Slider
