import React, { useState, useImperativeHandle, forwardRef, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

import StyledToast, { ToastText } from './style';

interface ToastProps {
  duration?: number;
  children: React.ReactNode;
}

export interface ToastHandlers {
  show(): void;
}

const Toast = forwardRef<ToastHandlers, ToastProps>(({ children, duration = 3000 }, ref) => {
  const [show, setShow] = useState(false);
  const [timer, setTimer] = useState<any>(null);

  useImperativeHandle(
    ref,
    () => ({
      show() {
        if (timer) clearTimeout(timer);
        console.log(show);
        setShow(true);
        setTimer(
          setTimeout(() => {
            setShow(false);
          }, duration),
        );
      },
    }),
    [timer, show, duration],
  );

  useEffect(() => {
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [timer]);

  return (
    <CSSTransition in={show} timeout={300} classNames="drop" unmountOnExit>
      <StyledToast>
        <ToastText>{children}</ToastText>
      </StyledToast>
    </CSSTransition>
  );
});

export default React.memo(Toast);
