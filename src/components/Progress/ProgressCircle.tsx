import React from 'react';

import StyledProgressCircle, { ProgressBackground, ProgressBar } from './ProgressCircle-style';

interface ProgressCircleProps {
  width: number;
  percent: number;
  children?: React.ReactNode;
}

function ProgressCircle({ width, percent, children }: ProgressCircleProps) {
  // 整个背景的周长
  const dashArr = Math.PI * 100;
  // 没有高亮的部分，剩下高亮的就是进度
  const dashOffset = (1 - percent) * dashArr;

  return (
    <StyledProgressCircle>
      <svg width={width} height={width} viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <ProgressBackground r="50" cx="50" cy="50" fill="transparent" />
        <ProgressBar
          r="50"
          cx="50"
          cy="50"
          fill="transparent"
          strokeDasharray={dashArr}
          strokeDashoffset={dashOffset}
        />
      </svg>
      {children}
    </StyledProgressCircle>
  );
}

export default React.memo(ProgressCircle);
