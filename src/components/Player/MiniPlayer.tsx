import React, { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import { ProgressCircle } from 'components/Progress';
import { getSingerName } from 'tools/song';

import StyledMiniPlayer, { IconWrapper, ImgWrapper, TextWrapper, Control, IconFont } from './MiniPlayer-style';

interface MiniPlayerProps {
  show?: boolean;
  playing?: boolean;
  percent?: number;
  song: Data.SongListItem;
  onPlayButtonClick?: (status: boolean) => void; // 点击了播放按钮
  onShowListButtonClick?: () => void; // 点击了查看列表按钮
}

function MiniPlayer({
  song,
  show = true,
  playing = false,
  percent = 0,
  onShowListButtonClick,
  onPlayButtonClick,
}: MiniPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <CSSTransition
      in={show}
      timeout={400}
      classNames="mini"
      onEnter={() => {
        if (!containerRef.current) return;
        containerRef.current.style.display = 'flex';
      }}
      onExited={() => {
        if (!containerRef.current) return;
        containerRef.current.style.display = 'none';
      }}>
      <StyledMiniPlayer ref={containerRef}>
        <IconWrapper>
          <ImgWrapper play={playing}>
            <img src={song.al.picUrl} width="40" height="40" alt="img" />
          </ImgWrapper>
        </IconWrapper>
        <TextWrapper>
          <h2>{song.name}</h2>
          <p>{getSingerName(song.ar)}</p>
        </TextWrapper>
        <Control>
          <ProgressCircle width={32} percent={percent}>
            {playing ? (
              <IconFont className="iconfont" mini onClick={() => onPlayButtonClick && onPlayButtonClick(false)}>
                &#xe650;
              </IconFont>
            ) : (
              <IconFont className="iconfont" mini play onClick={() => onPlayButtonClick && onPlayButtonClick(true)}>
                &#xe61e;
              </IconFont>
            )}
          </ProgressCircle>
        </Control>
        <Control
          onClick={(ev) => {
            ev.stopPropagation();
            onShowListButtonClick && onShowListButtonClick();
          }}>
          <IconFont className="iconfont">&#xe640;</IconFont>
        </Control>
      </StyledMiniPlayer>
    </CSSTransition>
  );
}

export default React.memo(MiniPlayer);
