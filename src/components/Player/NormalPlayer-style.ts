import styled, { css } from 'styled-components';

import { noWrap } from 'styles/mixins';

// import discImg from './disc.png';
// import needleImg from './needle.png';

// const rotate = keyframes`
//   0%{
//     transform: rotate(0);
//   }
//   100%{
//     transform: rotate(360deg);
//   }
// `;

interface BackgroundProps {
  layer?: boolean;
}

const Background = styled.div<BackgroundProps>`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.6;
  filter: blur(20px);

  ${({ layer = false, theme }) =>
    layer &&
    css`
      background: ${theme.fontColorDesc};
      opacity: 0.3;
      filter: none;
    `}
`;

const Top = styled.div`
  box-sizing: border-box;
  position: absolute;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  border-bottom: 1px solid ${({ theme }) => theme.borderColorV2};
  padding-bottom: 5px;
  width: 100%;
  height: 8%;
`;

const TopBack = styled.div`
  margin-left: 5px;
  z-index: 50;

  .iconfont {
    display: block;
    padding: 9px;
    font-size: 24px;
    color: ${({ theme }) => theme.fontColorDesc};
    font-weight: bold;
    transform: rotate(90deg);
  }
`;

const TopText = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

interface TopTitleProps {
  isSub?: boolean;
}

const TopTitle = styled.h2<TopTitleProps>`
  line-height: ${({ isSub = false }) => (isSub ? '20px' : '25px')};
  font-size: ${({ theme, isSub = false }) => (isSub ? theme.fontSizeM : theme.fontSizeL)};
  color: ${({ theme, isSub = false }) => (isSub ? theme.fontColorDescV2 : theme.fontColorDesc)};
  ${noWrap()};
`;

const Bottom = styled.div`
  position: absolute;
  bottom: 50px;
  width: 100%;
`;

const StyledNormalPlayer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 150;
  background: ${({ theme }) => theme.backgroundColor};

  &.normal-enter,
  &.normal-exit-done {
    ${Top} {
      transform: translate3d(0, -100px, 0);
    }
    ${Bottom} {
      transform: translate3d(0, 100px, 0);
    }
  }
  &.normal-enter-active,
  &.normal-exit-active {
    ${Top},
    ${Bottom} {
      transform: translate3d(0, 0, 0);
      transition: all 0.4s cubic-bezier(0.86, 0.18, 0.82, 1.32);
    }
    opacity: 1;
    transition: all 0.4s;
  }
  &.normal-exit-active {
    opacity: 0;
  }
`;

export default StyledNormalPlayer;

export { Background, Top, TopBack, TopText, TopTitle, Bottom };
