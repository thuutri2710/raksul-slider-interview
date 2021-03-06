import React, { useEffect, useMemo, useRef, useState, useCallback } from 'react'
import { Dots } from '@/components/Dot'
import PrevButton from '@/components/PrevButton'
import NextButton from '@/components/NextButton'
import { css } from 'linaria'
import classNames from 'classnames/bind'
import './style.css'

const Slider = ({ wrapperWidth, children, className, style }) => {
  const [activeElement, setActiveElement] = useState(1)
  const [widthSlide, setWidthSlide] = useState(500)
  const slideRef = useRef(-1)
  const [shouldShift, setShouldShift] = useState(false)
  const [count, setCount] = useState(0)
  const [distanceDragX, setDistanceDragX] = useState(0)
  const [innerWidth, setInnerWidth] = useState(window.innerWidth)
  const [isDragging, setIsDragging] = useState(false)
  const startDragX = useRef()
  const threshold = 0.2 * widthSlide

  const translateX = -(widthSlide + 16) * activeElement - 8 + distanceDragX

  const newChildren = useMemo(() => [
    children[children.length - 1],
    ...children,
    children[0],
  ])

  useEffect(() => {
    //when count === 2, 'widthSlide' has set a new value which different 500
    //So we can update new value for 'transition' (line 70) and it doesn't trigger re-render
    if (count < 2) {
      setCount(count + 1)
    }
    setWidthSlide(slideRef.current.clientWidth)
  }, [slideRef.current.clientWidth])

  useState(() => {
    const handleSize = () => setInnerWidth(window.innerWidth)
    window.addEventListener('resize', handleSize)
    return () => window.removeEventListener('resize', handleSize)
  }, [])

  const shiftCircular = () => {
    setShouldShift(true)
    if (activeElement === 0) {
      setActiveElement(newChildren.length - 2)
    }
    if (activeElement === newChildren.length - 1) {
      setActiveElement(1)
    }
  }

  const onSelectDot = (index) => {
    setShouldShift(false)
    setActiveElement(index)
  }

  const onNext = () => {
    setShouldShift(false)
    if (activeElement < newChildren.length - 1) {
      setActiveElement(activeElement + 1)
    } else {
      setActiveElement(newChildren.length - 1)
    }
  }

  const onPrev = () => {
    setShouldShift(false)
    if (activeElement > 1) {
      setActiveElement(activeElement - 1)
    } else {
      setActiveElement(0)
    }
  }

  const onMouseMove = useCallback((e) => {
    if (e.type === 'touchmove') {
      const touch = e.touches[0]
      setDistanceDragX(touch.clientX - startDragX.current)
    } else {
      setDistanceDragX(e.clientX - startDragX.current)
    }
  }, [])

  const onMouseDown = (e) => {
    setIsDragging(true)
    if (e.type === 'touchstart') {
      const touch = e.touches[0]
      startDragX.current = touch.clientX
    } else {
      startDragX.current = e.clientX
    }
    document.onmousemove = onMouseMove
    document.ontouchmove = onMouseMove
  }

  const onMouseUp = (e) => {
    if (isDragging) {
      if (distanceDragX < -threshold) {
        onNext()
      } else if (distanceDragX > threshold) {
        onPrev()
      } else {
        setShouldShift(false)
      }
      document.onmousemove = null
      document.ontouchmove = null
      setDistanceDragX(0)
      startDragX.current = 0
      setIsDragging(false)
    }
  }

  return (
    <div
      className="slider"
      style={{
        margin: `0 ${
          wrapperWidth > innerWidth - 200 && innerWidth < 650 ? '5px' : 'auto'
        }`,
        maxWidth: `${
          innerWidth > 650 ? Math.min(wrapperWidth, innerWidth - 200) : 650
        }px`,
      }}
    >
      {innerWidth > 650 ? <PrevButton onClick={onPrev} /> : null}
      <div ref={slideRef} className="slider__wrapper">
        <div
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onTouchStartCapture={onMouseDown}
          onTouchEndCapture={onMouseUp}
          onTransitionEnd={() => shiftCircular()}
          className="slider__inner"
          style={{
            transition:
              count !== 2 ? '' : shouldShift ? 'left 1ms ease-out' : 'all .4s',
            transform: `translate3d(${translateX}px,0,0)`,
          }}
        >
          {newChildren.map((c, i) => (
            <div
              tabIndex={-1}
              aria-hidden={activeElement !== i}
              key={`s-${i}`}
              style={{ height: '100%' }}
            >
              <div
                tabIndex={-1}
                className="slider__item"
                style={{
                  width: `${widthSlide}px`,
                }}
              >
                {React.cloneElement(c, {
                  style: {
                    ...c.props.style,
                    minHeight: '200px',
                    height: '100%',
                  },
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Dots
        number={children.length}
        onClick={onSelectDot}
        active={(activeElement + children.length - 1) % children.length}
        width={widthSlide}
      />
      {innerWidth > 650 ? <NextButton onClick={onNext} /> : null}
    </div>
  )
}

export default Slider
