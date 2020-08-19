import React, { useState, useImperativeHandle, forwardRef, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

import StyledToast, { ToastInner, ToastText } from './style';
import useToast from './useToast';

interface ToastProps {
  duration?: number;
  children?: React.ReactNode;
}

export interface ToastHandlers {
  show(text?: React.ReactNode): void;
}

const Toast = forwardRef<ToastHandlers, ToastProps>(({ children, duration = 3000 }, ref) => {
  const [show, setShow] = useState(false);
  const [text, setText] = useState<React.ReactNode>(null);
  const [timer, setTimer] = useState<any>(null);

  useImperativeHandle(
    ref,
    () => ({
      show(text?: React.ReactNode) {
        if (timer) clearTimeout(timer);

        setShow(true);
        if (text) setText(text);

        setTimer(
          setTimeout(() => {
            setShow(false);
            setText(null);
          }, duration),
        );
      },
    }),
    [timer, duration],
  );

  useEffect(() => {
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [timer]);

  return (
    <CSSTransition in={show} timeout={300} classNames="drop" unmountOnExit>
      <StyledToast>
        <ToastInner>
          <ToastText>{text || children}</ToastText>
        </ToastInner>
      </StyledToast>
    </CSSTransition>
  );
});

export default React.memo(Toast);

export { useToast };
