import styled from 'styled-components';

interface StyledAnimatePageProps {}

const StyledAnimatePage = styled.div<StyledAnimatePageProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;

  transform-origin: right bottom;
  will-change: transform;

  /* 左侧滑入动画 */
  &.move-enter,
  &.move-appear {
    transform: translate3d(100%, 0, 0);
  }
  &.move-enter-active,
  &.move-appear-active {
    transition: transform 0.3s;
    transform: translate3d(0, 0, 0);
  }
  &.move-exit {
    transform: translate3d(0, 0, 0);
  }
  &.move-exit-active {
    transition: transform 0.3s;
    transform: translate3d(100%, 0, 0);
  }

  /* 旋转切入效果 */
  &.rotate-enter,
  &.rotate-appear {
    transform: rotateZ(30deg) translate3d(100%, 0, 0);
  }
  &.rotate-enter-active,
  &.rotate-appear-active {
    transition: transform 0.3s;
    transform: rotateZ(0deg) translate3d(0, 0, 0);
  }
  &.rotate-exit {
    transform: rotateZ(0deg) translate3d(0, 0, 0);
  }
  &.rotate-exit-active {
    transition: transform 0.3s;
    transform: rotateZ(30deg) translate3d(100%, 0, 0);
  }
`;

export default StyledAnimatePage;
