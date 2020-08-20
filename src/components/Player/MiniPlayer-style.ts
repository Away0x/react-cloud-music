import styled, { keyframes, css } from 'styled-components';

import { noWrap } from 'styles/mixins';

const rotate = keyframes`
  0%{
    transform: rotate(0);
  }
  100%{
    transform: rotate(360deg);
  }
`;

const StyledMiniPlayer = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 1000;
  width: 100%;
  height: 60px;
  background: ${({ theme }) => theme.backgroundColorHighlight};

  &.mini-enter {
    transform: translate3d(0, 100%, 0);
  }

  &.mini-enter-active {
    transform: translate3d(0, 0, 0);
    transition: all 0.4s;
  }

  &.mini-exit-active {
    transform: translate3d(0, 100%, 0);
    transition: all 0.4s;
  }
`;

const IconWrapper = styled.div`
  flex: 0 0 40px;
  width: 40px;
  height: 40px;
  padding: 0 10px 0 20px;
`;

interface ImgWrapperProps {
  play?: boolean;
}

const ImgWrapper = styled.div<ImgWrapperProps>`
  width: 100%;
  height: 100%;

  img {
    border-radius: 50%;
    animation: ${rotate} 10s infinite;

    ${({ play = false }) =>
      !play &&
      css`
        animation-play-state: paused;
      `}
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  line-height: 20px;
  overflow: hidden;

  h2 {
    margin-bottom: 2px;
    font-size: ${({ theme }) => theme.fontSizeM};
    color: ${({ theme }) => theme.fontColorDesc};
    ${noWrap()}
  }

  p {
    font-size: ${({ theme }) => theme.fontSizeS};
    color: ${({ theme }) => theme.fontColorDescV2};
    ${noWrap()}
  }
`;

const Control = styled.div`
  flex: 0 0 30px;
  padding: 0 10px;

  .iconfont,
  .icon-playlist {
    font-size: 30px;
    color: ${({ theme }) => theme.themeColor};
  }
  .icon-mini {
    font-size: 16px;
    position: absolute;
    left: 8px;
    top: 8px;
    &.icon-play {
      left: 9px;
    }
  }
`;

interface IconFontProps {
  mini?: boolean;
  play?: boolean;
}

const IconFont = styled.i<IconFontProps>`
  font-size: 30px;
  color: ${({ theme }) => theme.themeColor};
  cursor: pointer;

  ${({ mini = false, play = false }) =>
    mini &&
    css`
      font-size: 16px !important;
      position: absolute;
      top: 8px;
      left: ${play ? '9px' : '8px'};
    `}
`;

export default StyledMiniPlayer;

export { IconWrapper, ImgWrapper, TextWrapper, Control, IconFont };
