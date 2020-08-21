import styled, { keyframes, css } from 'styled-components';

import { noWrap, bgFull } from 'styles/mixins';

import needleImg from './needle.png';
import discImg from './disc.png';

const rotate = keyframes`
  0%{
    transform: rotate(0);
  }
  100%{
    transform: rotate(360deg);
  }
`;

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
  cursor: pointer;

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

const Middle = styled.div`
  position: fixed;
  width: 100%;
  top: 8%;
  bottom: 170px;
  white-space: nowrap;
  font-size: 0;
  overflow: hidden;
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    opacity: 1;
    transition: all 0.4s;
  }
  .fade-enter-done {
    transition: none;
  }
  .fade-exit-active {
    opacity: 0;
  }
  .fade-exit-done {
    opacity: 0;
  }
`;

interface CDWrapperProps {
  show?: boolean;
}

const CDWrapper = styled.div<CDWrapperProps>`
  margin: auto;
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  visibility: ${({ show = true }) => (show ? 'visible' : 'hidden')};
`;

const CDNeedle = styled.div`
  ${bgFull()};
  position: absolute;
  top: -6.67vw;
  left: 48vw;
  width: 25vw;
  height: 40vw;
  z-index: 100;
  background-image: url(${needleImg});
  transform-origin: 4.5vw 4.5vw;
  transition: all 0.3s;
  transform: rotate(0);

  &.pause {
    transform: rotate(-30deg);
  }
`;

const CDImg = styled.div`
  top: 16%;
  position: absolute;
  width: 70%;
  height: 70vw;
  background-image: url(${discImg});
  border: 4px solid ${({ theme }) => theme.borderColorV2};
  border-radius: 50%;
  ${bgFull()};

  img {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 68%;
    height: 68%;
    margin: auto;
    border-radius: 50%;
    animation: ${rotate} 20s linear infinite;

    &.pause {
      animation-play-state: paused;
    }
  }
`;

const PlayingLyric = styled.div`
  position: absolute;
  margin: auto;
  width: 80%;
  top: 95vw;
  font-size: 14px;
  line-height: 20px;
  white-space: normal;
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
`;

interface LyricContainerProps {
  show?: boolean;
}

const LyricContainer = styled.div<LyricContainerProps>`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  visibility: ${({ show = true }) => (show ? 'visible' : 'hidden')};
  /* 遮罩: 会有模糊效果，看个人喜欢*/
  /* mask-image: -webkit-gradient(linear,left top,left bottom,color-stop(0,hsla(0,0%,100%,0)),color-stop(10%,hsla(0,0%,100%,.6)),color-stop(25%,#fff),color-stop(75%,#fff),color-stop(85%,hsla(0,0%,100%,.6)),to(hsla(0,0%,100%,0)));
  mask-image: linear-gradient(linear,left top,left bottom,color-stop(0,hsla(0,0%,100%,0)),color-stop(10%,hsla(0,0%,100%,.6)),color-stop(25%,#fff),color-stop(75%,#fff),color-stop(85%,hsla(0,0%,100%,.6)),to(hsla(0,0%,100%,0))); */
`;

const LyricWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
  p {
    line-height: 32px;
    color: rgba(255, 255, 255, 0.5);
    white-space: normal;
    font-size: ${({ theme }) => theme.fontSizeL};
    &.current {
      color: #fff;
    }
    &.pure {
      position: relative;
      top: 30vh;
    }
  }
`;

const Bottom = styled.div`
  position: absolute;
  bottom: 50px;
  width: 100%;
`;

const List = styled.div`
  width: 70%;
  margin: auto;
  display: flex;
  align-items: center;
  height: 30px;
  justify-content: space-around;
  overflow: hidden;
  > span:first-of-type {
    display: block;
    flex: 0 0 auto;
    padding: 5px 0;
    color: ${({ theme }) => theme.fontColorDescV2};
    font-size: ${({ theme }) => theme.fontSizeM};
  }
`;

interface ListItemProps {
  selected?: boolean;
}

const ListItem = styled.span<ListItemProps>`
  flex: 0 0 auto;
  font-size: ${({ theme }) => theme.fontSizeM};
  padding: 5px 5px;
  border-radius: 10px;
  color: ${({ selected = false, theme }) => (selected ? theme.themeColor : theme.fontColorDescV2)};
  border: 1px solid transparent;
  ${({ selected = false, theme }) =>
    selected &&
    css`
      border-color: ${theme.themeColor};
      opacity: 0.8;
    `}
`;

const ProgressWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  margin: 0px auto;
  padding: 10px 0;
`;

interface ProgressTimeProps {
  alignLeft?: boolean;
}

const ProgressTime = styled.span<ProgressTimeProps>`
  color: ${({ theme }) => theme.fontColorDesc};
  font-size: ${({ theme }) => theme.fontSizeS};
  flex: 0 0 40px;
  line-height: 30px;
  width: 40px;
  text-align: ${({ alignLeft = true }) => (alignLeft ? 'left' : 'right')};
`;

const ProgressBarWrapper = styled.div`
  flex: 1;
`;

const Operators = styled.div`
  display: flex;
  align-items: center;
`;

interface OperatorIconWrapperProps {
  disabled?: boolean;
  align?: 'left' | 'center' | 'right';
}

const iconAlignMap = {
  left: css`
    text-align: left;
  `,
  center: css`
    padding: 0 20px;
    text-align: center;
    i {
      font-size: 40px !important;
    }
  `,
  right: css`
    text-align: right;
  `,
};

const OperatorIconWrapper = styled.div<OperatorIconWrapperProps>`
  font-weight: 300;
  flex: 1;
  cursor: pointer;
  color: ${({ disabled = false, theme }) => (disabled ? theme.themeColorShadow : theme.fontColorDesc)};

  i {
    font-weight: 300;
    font-size: 30px;
  }

  ${({ align = 'left' }) => iconAlignMap[align]};
`;

const StyledNormalPlayer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1500;
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

export {
  Background,
  Top,
  TopBack,
  TopText,
  TopTitle,
  Middle,
  CDWrapper,
  CDNeedle,
  CDImg,
  PlayingLyric,
  LyricContainer,
  LyricWrapper,
  Bottom,
  List,
  ListItem,
  ProgressWrapper,
  ProgressTime,
  ProgressBarWrapper,
  Operators,
  OperatorIconWrapper,
};
