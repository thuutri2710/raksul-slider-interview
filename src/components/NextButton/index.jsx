import React from 'react'
import classNames from 'classnames/bind'
import { css } from 'linaria'

const NextButton = ({ onClick, className }) => {
  return (
    <div
      className={classNames(
        className,
        css`
          position: absolute;
          top: min(calc(50% - 27px), 100px);
          right: -70px;
          width: 0;
          height: 0;
          cursor: pointer;
          border-style: solid;
          border-width: 28px 0 28px 47px;
          border-color: transparent transparent transparent #000;
        `
      )}
      role="button"
      onClick={onClick}
    >
      <div
        className={classNames(css`
          position: relative;
          top: -27px;
          right: 46px;
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 27px 0 27px 45px;
          border-color: transparent transparent transparent #cfe2f3;
        `)}
      />
    </div>
  )
}

export default NextButton
