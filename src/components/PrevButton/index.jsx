import React from 'react'
import classNames from 'classnames/bind'
import { css } from 'linaria'

const PrevButton = ({ onClick, className }) => {
  return (
    <div
      className={classNames(css`
        position: absolute;
        top: max(calc(50% - 27px), 73px);
        left: -70px;
        width: 0;
        height: 0;
        cursor: pointer;
        border-style: solid;
        border-width: 28px 47px 28px 0;
        border-color: transparent #000 transparent transparent;
      `)}
      role="button"
      onClick={onClick}
    >
      <div
        className={classNames(css`
          position: relative;
          top: -27px;
          left: 1px;
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 27px 45px 27px 0;
          border-color: transparent #cfe2f3 transparent transparent;
        `)}
      />
    </div>
  )
}

export default PrevButton
