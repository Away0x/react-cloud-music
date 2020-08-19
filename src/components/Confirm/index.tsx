import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { CSSTransition } from 'react-transition-group';

import StyledConfirm, { ConfirmContent, Text, Operate, OperateBtn } from './style';
import useConfirm from './useConfirm';

interface ConfirmProps {
  children?: React.ReactNode;
  cancelBtnText?: string;
  confirmBtnText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}

export interface ConfirmHandlers {
  show(): void;
}

const Confirm = forwardRef<ConfirmHandlers, ConfirmProps>(
  ({ children, cancelBtnText = '取消', confirmBtnText = '确定', onConfirm, onCancel }, ref) => {
    const [show, setShow] = useState(false);

    useImperativeHandle(ref, () => ({
      show() {
        setShow(true);
      },
    }));

    return (
      <CSSTransition classNames="confirm-fade" timeout={300} appear={true} in={show}>
        <StyledConfirm show={show}>
          <div>
            <ConfirmContent>
              <Text>{children}</Text>
              <Operate>
                <OperateBtn
                  hasLeftBorder
                  onClick={(ev) => {
                    ev.stopPropagation();
                    setShow(false);
                    onCancel && onCancel();
                  }}>
                  {cancelBtnText}
                </OperateBtn>
                <OperateBtn
                  onClick={(ev) => {
                    ev.stopPropagation();
                    setShow(false);
                    onConfirm && onConfirm();
                  }}>
                  {confirmBtnText}
                </OperateBtn>
              </Operate>
            </ConfirmContent>
          </div>
        </StyledConfirm>
      </CSSTransition>
    );
  },
);

export default React.memo(Confirm);

export { useConfirm };
