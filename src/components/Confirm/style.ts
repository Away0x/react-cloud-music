import styled, { keyframes, css } from 'styled-components';

const confirmFadeIn = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;
const confirmZoom = keyframes`
  0%{
    transform: scale(0);
  }
  50%{
    transform: scale(1.1);
  }
  100%{
    transform: scale(1);
  }
`;

const ConfirmContent = styled.div`
  width: 270px;
  border-radius: 13px;
  background: ${({ theme }) => theme.backgroundColorHighlight};
`;

interface StyledConfirmProps {
  show?: boolean;
}

const StyledConfirm = styled.div<StyledConfirmProps>`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1000;
  background: ${({ theme }) => theme.backgroundColorShadow};
  display: ${({ show = false }) => (show ? 'block' : 'none')};

  &.confirm-fade-enter-active {
    animation: ${confirmFadeIn} 0.3s;
    ${ConfirmContent} {
      animation: ${confirmZoom} 0.3s;
    }
  }

  > div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    z-index: 100;
  }
`;

const Text = styled.p`
  padding: 19px 15px;
  line-height: 22px;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizeL};
  color: ${({ theme }) => theme.fontColorDescV2};
`;

const Operate = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizeL};
`;

interface OperateBtnProps {
  hasLeftBorder?: boolean;
}

const OperateBtn = styled.div<OperateBtnProps>`
  flex: 1;
  line-height: 22px;
  padding: 10px 0;
  border-top: 1px solid ${({ theme }) => theme.borderColor};
  color: ${({ theme }) => theme.fontColorDesc};
  cursor: pointer;
  ${({ hasLeftBorder = false }) =>
    hasLeftBorder &&
    css`
      border-right: 1px solid ${({ theme }) => theme.borderColor};
    `}
`;

export default StyledConfirm;

export { ConfirmContent, Text, Operate, OperateBtn };
