import React, { useEffect, useMemo, useRef, useState, useCallback } from 'react'
import { Dots } from '@/components/Dot'
import PrevButton from '@/components/PrevButton'
import NextButton from '@/components/NextButton'
import { css } from 'linaria'
import classNames from 'classnames/bind'

const Slider = ({ children, className, style }) => {
  const [activeElement, setActiveElement] = useState(1)
  const [widthSlide, setWidthSlide] = useState(500)
  const slideRef = useRef(-1)
  const [shouldShift, setShouldShift] = useState(false)
  const [count, setCount] = useState(0)
  const [distanceDragX, setDistanceDragX] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const startDragX = useRef()
  const threshold = 0.7 * widthSlide

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
    setDistanceDragX(e.clientX - startDragX.current)
  }, [])

  const onMouseDown = (e) => {
    setIsDragging(true)
    startDragX.current = e.clientX
    document.addEventListener('mousemove', onMouseMove)
  }

  const onMouseUp = (e) => {
    if (isDragging) {
      startDragX.current = 0
      setDistanceDragX(0)
      if (distanceDragX < -threshold) {
        onNext()
      } else if (distanceDragX > threshold) {
        onPrev()
      } else {
        setShouldShift(false)
      }
      document.removeEventListener('mousemove', onMouseMove)
    }
    setIsDragging(false)
  }

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
      <PrevButton onClick={onPrev} />
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
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onTransitionEnd={() => shiftCircular()}
          className={css`
            display: flex;
            align-items: stretch;
            position: relative;
            cursor: pointer;
            height: 100%;
            top: 0;
            left: 0;
            margin-left: auto;
            margin-right: auto;
          `}
          style={{
            transition:
              count !== 2 ? '' : shouldShift ? 'left .2s ease-out' : 'all 1s',
            transform: `translate3d(${translateX}px,0,0)`,
          }}
        >
          {newChildren.map((c, i) => (
            <div
              style={{
                width: `${widthSlide}px`,
                margin: '0 8px',
                flexShrink: 0,
                border: '1px solid #000',
                backgroundColor: '#cfe2f3',
                minHeight: '200px',
              }}
              tabIndex={-1}
              aria-hidden={activeElement !== i}
              key={`s-${i}`}
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
        onClick={onSelectDot}
        active={(activeElement + children.length - 1) % children.length}
      />
      <NextButton onClick={onNext} />
    </div>
  )
}

export default Slider
