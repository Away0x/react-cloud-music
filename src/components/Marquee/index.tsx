import React, { useEffect, useRef } from 'react';

import StyledMarquee from './style';

interface MarqueeProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

function Marquee({ children, style }: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const txtRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !txtRef.current) return;
    const containerWidth = containerRef.current.offsetWidth;
    const txtWidth = txtRef.current.offsetWidth;
    let w = containerWidth;

    const timer = setInterval(() => {
      w = w + txtWidth === 0 ? containerWidth : w - 1;
      txtRef.current!.style.transform = `translate(${w}px)`;
    }, 10);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <StyledMarquee ref={containerRef} style={style}>
      <div ref={txtRef}>{children}</div>
    </StyledMarquee>
  );
}

export default React.memo(Marquee);
