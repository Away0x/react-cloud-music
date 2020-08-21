import React, { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import animations from 'create-keyframe-animation';

import { PlayMode, getPlayModeIcon } from 'constants/player';
import { getSingerName } from 'tools/song';
import { formatPlayTime } from 'tools/time';
import { prefixStyle } from 'tools/utils';
import { ProgressBar } from 'components/Progress';
// import Scroll from 'components/Scroll'

import StyledNormalPlayer, {
  Background,
  Top,
  TopBack,
  TopText,
  TopTitle,
  Middle,
  CDWrapper,
  CDNeedle,
  CDImg,
  // PlayingLyric,
  // LyricContainer,
  // LyricWrapper,
  Bottom,
  // List,
  // ListItem,
  ProgressWrapper,
  ProgressTime,
  ProgressBarWrapper,
  Operators,
  OperatorIconWrapper,
} from './NormalPlayer-style';

function usePosAndScale() {
  const targetWidth = 40;
  const paddingLeft = 40;
  const paddingBottom = 30;
  const paddingTop = 80;
  const width = window.innerWidth * 0.8;
  const scale = targetWidth / width;
  // 两个圆心的横坐标距离和纵坐标距离
  const x = -(window.innerWidth / 2 - paddingLeft);
  const y = window.innerHeight - paddingTop - width / 2 - paddingBottom;

  return { x, y, scale };
}

const transform = prefixStyle('transform');

interface NormalPlayerProps {
  show?: boolean;
  song: Data.SongListItem;
  mode: PlayMode;
  playing?: boolean;
  currentTime?: number;
  duration?: number;
  percent?: number;
  onChangeMode?: () => void;
  onPrevButtonClick?: () => void;
  onNextButtonClick?: () => void;
  onPlayButtonClick?: (status: boolean) => void;
  onShowListButtonClick?: () => void;
  onPercentProgressBarChange?: (p: number) => void;
  onBackButtonClick?: () => void;
}

function NormalPlayer({
  song,
  show = true,
  mode,
  playing = false,
  currentTime = 0,
  duration = 0,
  percent = 0,
  onChangeMode,
  onPrevButtonClick,
  onNextButtonClick,
  onPlayButtonClick,
  onShowListButtonClick,
  onPercentProgressBarChange,
  onBackButtonClick,
}: NormalPlayerProps) {
  const playContainerRef = useRef<HTMLDivElement>(null);
  const middleRef = useRef<HTMLDivElement>(null);

  const { x, y, scale } = usePosAndScale();
  const middleAnimations = {
    0: {
      transform: `translate3d(${x}px,${y}px,0) scale(${scale})`,
    },
    60: {
      transform: `translate3d(0, 0, 0) scale(1.1)`,
    },
    100: {
      transform: `translate3d(0, 0, 0) scale(1)`,
    },
  };

  return (
    <CSSTransition
      classNames="normal"
      in={show}
      timeout={400}
      mountOnEnter
      onEnter={() => {
        if (!playContainerRef.current) return;
        playContainerRef.current.style.display = 'block';

        if (!middleRef.current) return;
        animations.registerAnimation({
          name: 'move',
          animation: middleAnimations,
          presets: { duration: 400, easing: 'linear' },
        });
        animations.runAnimation(middleRef.current, 'move');
      }}
      onEntered={() => {
        if (!middleRef.current) return;
        animations.unregisterAnimation('move');
        middleRef.current.style.animation = '';
      }}
      onExit={() => {
        if (!middleRef.current) return;
        middleRef.current.style.transition = 'all 0.4s';
        middleRef.current.style[transform] = `translate3d(${x}px, ${y}px, 0) scale(${scale})`;
      }}
      onExited={() => {
        if (!playContainerRef.current) return;
        playContainerRef.current.style.display = 'none';
        if (!middleRef.current) return;
        middleRef.current.style.transition = '';
        middleRef.current.style[transform] = '';
      }}>
      <StyledNormalPlayer ref={playContainerRef}>
        <Background>
          <img src={song.al.picUrl + '?param=300x300'} width="100%" height="100%" alt="歌曲图片" />
        </Background>
        <Background layer />

        <Top>
          <TopBack
            onClick={(ev) => {
              ev.stopPropagation();
              onBackButtonClick && onBackButtonClick();
            }}>
            <i className="iconfont">&#xe662;</i>
          </TopBack>
          <TopText>
            <TopTitle>{song.name}</TopTitle>
            <TopTitle isSub>{getSingerName(song.ar)}</TopTitle>
          </TopText>
        </Top>

        <Middle ref={middleRef}>
          <CDWrapper>
            <CDNeedle className={playing ? '' : 'pause'} />
            <CDImg>
              <img className={`${playing ? '' : 'pause'}`} src={song.al.picUrl + '?param=400x400'} alt="cd" />
            </CDImg>
            {/* <PlayingLyric></PlayingLyric> */}
          </CDWrapper>
          {/* <LyricContainer>
          <Scroll>
            <LyricWrapper></LyricWrapper>
          </Scroll>
        </LyricContainer> */}
        </Middle>

        <Bottom>
          {/* <List>
          <span>倍速听歌</span>
          {[1, 2, 3].map((item) => {
            return (
              <ListItem key={item} selected={false}>
                {item}
              </ListItem>
            );
          })}
        </List> */}

          <ProgressWrapper>
            <ProgressTime>{formatPlayTime(currentTime)}</ProgressTime>
            <ProgressBarWrapper>
              <ProgressBar percent={percent} onChangePercent={onPercentProgressBarChange} />
            </ProgressBarWrapper>
            <ProgressTime alignLeft={false}>{formatPlayTime(duration)}</ProgressTime>
          </ProgressWrapper>

          <Operators>
            <OperatorIconWrapper
              align="right"
              onClick={(ev) => {
                ev.stopPropagation();
                onChangeMode && onChangeMode();
              }}>
              <i className="iconfont" dangerouslySetInnerHTML={{ __html: getPlayModeIcon(mode) }}></i>
            </OperatorIconWrapper>
            <OperatorIconWrapper
              align="right"
              onClick={(ev) => {
                ev.stopPropagation();
                onPrevButtonClick && onPrevButtonClick();
              }}>
              <i className="iconfont">&#xe6e1;</i>
            </OperatorIconWrapper>
            <OperatorIconWrapper
              align="center"
              onClick={(ev) => {
                ev.stopPropagation();
                onPlayButtonClick && onPlayButtonClick(!playing);
              }}>
              <i className="iconfont" dangerouslySetInnerHTML={{ __html: playing ? '&#xe723;' : '&#xe731;' }}></i>
            </OperatorIconWrapper>
            <OperatorIconWrapper
              align="left"
              onClick={(ev) => {
                ev.stopPropagation();
                onNextButtonClick && onNextButtonClick();
              }}>
              <i className="iconfont">&#xe718;</i>
            </OperatorIconWrapper>
            <OperatorIconWrapper
              align="left"
              onClick={(ev) => {
                ev.stopPropagation();
                onShowListButtonClick && onShowListButtonClick();
              }}>
              <i className="iconfont">&#xe640;</i>
            </OperatorIconWrapper>
          </Operators>
        </Bottom>
      </StyledNormalPlayer>
    </CSSTransition>
  );
}

export default React.memo(NormalPlayer);
