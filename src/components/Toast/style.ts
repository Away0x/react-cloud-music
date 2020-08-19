import styled from 'styled-components';

const StyledToast = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 1000;
  width: 100%;
  height: 50px;

  &.drop-enter {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  &.drop-enter-active {
    opacity: 1;
    transition: all 0.3s;
    transform: translate3d(0, 0, 0);
  }
  &.drop-exit-active {
    opacity: 0;
    transition: all 0.3s;
    transform: translate3d(0, 100%, 0);
  }
`;

const ToastText = styled.div`
  line-height: 50px;
  text-align: center;
  color: #fff;
  font-size: ${({ theme }) => theme.fontSizeL};
`;

export default StyledToast;

export { ToastText };
