import React from 'react';
import { animated, useSpring } from 'react-spring';

type ScaleInWrapperProps = {
  fromScale?: number;
  duration?: number;
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
};

function ScaleInWrapper({ className = '', children, style, duration = 100, fromScale = 0.9 }: ScaleInWrapperProps) {
  const animStyle = useSpring({
    transform: 'scale(1)',
    from: { transform: `scale(${fromScale})` },
    config: { duration },
  });

  return (
    <animated.div className={className} style={{ ...style, ...animStyle }}>
      {children}
    </animated.div>
  );
}

export default React.memo(ScaleInWrapper);
