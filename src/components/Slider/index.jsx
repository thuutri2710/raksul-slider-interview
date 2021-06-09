import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Dots } from '@/components/Dot'
import PrevButton from '@/components/PrevButton'
import NextButton from '@/components/NextButton'
import { css } from 'linaria'
import classNames from 'classnames/bind'

const Slider = ({ children, className, style }) => {
  const [activeElement, setActiveElement] = useState(1)
  const [widthSlide, setWidthSlide] = useState(500)
  const slideRef = useRef(-1)
  let firsRender = true

  useEffect(() => {
    if (firsRender) {
      firsRender = !firsRender
    }
    setWidthSlide(slideRef.current.clientWidth)
  }, [slideRef.current.clientWidth, firsRender])

  const transformStyle = `translate3d(${
    -(widthSlide + 16) * activeElement - 8
  }px,0,0)`

  const newChildren = useMemo(() => [
    children[children.length - 1],
    ...children,
    children[0],
  ])

  return (
    <div
      className={classNames(
        className,
        css`
          position: relative;
          margin: 0 auto;
        `
      )}
    >
      <PrevButton
        onClick={() => {
          if (activeElement > 1) {
            setActiveElement(activeElement - 1)
          }
        }}
      />
      <div
        ref={slideRef}
        className={css`
          overflow: hidden;
          margin: 0;
          padding: 0;
          height: 100%;
        `}
      >
        <div
          className={css`
            display: flex;
            position: relative;
            height: 100%;
            top: 0%;
            left: 0%;
            margin-left: auto;
            margin-right: auto;
          `}
          style={{
            transition: firsRender ? '' : '1s ease-in-out',
            transform: transformStyle,
          }}
        >
          {newChildren.map((c) => (
            <div
              style={{
                width: `${widthSlide}px`,
                margin: '0 8px',
                flexShrink: 0,
                border: '1px solid #000',
                backgroundColor: '#cfe2f3',
                height: '100%',
              }}
            >
              {React.cloneElement(c, {
                style: { ...c.props.style, height: '100%' },
              })}
            </div>
          ))}
        </div>
      </div>
      <Dots
        number={children.length}
        onClick={setActiveElement}
        active={activeElement - 1}
      />
      <NextButton
        onClick={() => {
          if (activeElement < children.length) {
            setActiveElement(activeElement + 1)
          }
        }}
      />
    </div>
  )
}

export default Slider
