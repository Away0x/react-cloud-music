import React from 'react';
import { CSSTransition } from 'react-transition-group';

import StyledAnimatePage from './style';

interface AnimatePageProps {
  children?: React.ReactNode;
  showPage?: boolean;
  anim?: 'rotate' | 'move';
  onExited?: () => void; // 动画结束后会触发
}

function AnimatePage({ showPage = true, anim = 'rotate', onExited, children }: AnimatePageProps) {
  return (
    <CSSTransition in={showPage} timeout={300} classNames={anim} appear={true} unmountOnExit onExited={onExited}>
      <StyledAnimatePage>{children}</StyledAnimatePage>
    </CSSTransition>
  );
}

export default React.memo(AnimatePage);

export { StyledAnimatePage };
