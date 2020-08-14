import styled from 'styled-components';

interface WrapperProps {
  width?: number;
}

const Wrapper = styled.div<WrapperProps>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: ${({ width = 200 }) => width + 'px'};
  box-shadow: 6px 0 16px -8px rgba(0, 0, 0, 0.08), 9px 0 28px 0 rgba(0, 0, 0, 0.05),
    12px 0 48px 16px rgba(0, 0, 0, 0.03);
  transition: transform 0.3s cubic-bezier(0.7, 0.3, 0.1, 1);
  transform: translateX(0);
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  overflow: auto;
  background-color: #fff;
  background-clip: padding-box;
  width: 100%;
  height: 100%;
`;

const StyledDrawer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  transition: transform 0.3s cubic-bezier(0.7, 0.3, 0.1, 1), width 0s ease 0.3s;

  &.is-open {
    width: 100%;
    ${Wrapper} {
      transform: translateX(0);
    }
  }

  &.is-close {
    width: 0;
    ${Wrapper} {
      transform: translateX(-100%);
    }
  }
`;

export default StyledDrawer;

export { Wrapper, Content };
