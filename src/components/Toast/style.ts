import styled from 'styled-components';

const StyledToast = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 10000;
  width: 100%;
  height: 50vh;

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

const ToastInner = styled.div`
  width: 150px;
  height: 30px;
  background-color: rgba(51, 51, 51, 0.8);
  border-radius: 6px;
  margin: 0 auto;
`;

const ToastText = styled.div`
  line-height: 30px;
  text-align: center;
  color: #fff;
  font-size: ${({ theme }) => theme.fontSizeS};
`;

export default StyledToast;

export { ToastInner, ToastText };
