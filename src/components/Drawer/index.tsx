import React, { useRef } from 'react';
import { createPortal } from 'react-dom';
import { useClickAway } from 'ahooks';

import StyledDrawer, { Wrapper, Content } from './style';

interface DrawerProps {
  width?: number;
  show?: boolean;
  children?: React.ReactNode;
  onClose?: () => void;
}

function Drawer({ width = 200, show = false, children, onClose }: DrawerProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  useClickAway(() => {
    if (show && onClose) onClose();
  }, wrapperRef);

  return createPortal(
    <StyledDrawer className={show ? 'is-open' : 'is-close'}>
      <Wrapper ref={wrapperRef} width={width}>
        <Content>{children}</Content>
      </Wrapper>
    </StyledDrawer>,
    document.body,
  );
}

export default React.memo(Drawer);
