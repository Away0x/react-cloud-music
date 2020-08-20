import React from 'react';

import { PlayMode } from 'constants/player';
import { getSingerName } from 'tools/song';
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

function getPlayModeIcon(mode: PlayMode) {
  let content;
  if (mode === PlayMode.sequence) {
    content = '&#xe625;';
  } else if (mode === PlayMode.loop) {
    content = '&#xe653;';
  } else {
    content = '&#xe61b;';
  }
  return content;
}

interface NormalPlayerProps {
  song: Data.SongListItem;
  mode?: PlayMode;
  playing?: boolean;
}

function NormalPlayer({ song, mode = PlayMode.loop, playing = false }: NormalPlayerProps) {
  return (
    <StyledNormalPlayer>
      <Background>
        <img src={song.al.picUrl + '?param=300x300'} width="100%" height="100%" alt="歌曲图片" />
      </Background>
      <Background layer />

      <Top>
        <TopBack>
          <i className="iconfont">&#xe662;</i>
        </TopBack>
        <TopText>
          <TopTitle>{song.name}</TopTitle>
          <TopTitle isSub>{getSingerName(song.ar)}</TopTitle>
        </TopText>
      </Top>

      <Middle>
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
          <ProgressTime>123</ProgressTime>
          <ProgressBarWrapper>
            <ProgressBar percent={0} />
          </ProgressBarWrapper>
          <ProgressTime alignLeft={false}>456</ProgressTime>
        </ProgressWrapper>

        <Operators>
          <OperatorIconWrapper align="right">
            <i className="iconfont" dangerouslySetInnerHTML={{ __html: getPlayModeIcon(mode) }}></i>
          </OperatorIconWrapper>
          <OperatorIconWrapper align="right">
            <i className="iconfont">&#xe6e1;</i>
          </OperatorIconWrapper>
          <OperatorIconWrapper align="center">
            <i className="iconfont" dangerouslySetInnerHTML={{ __html: playing ? '&#xe723;' : '&#xe731;' }}></i>
          </OperatorIconWrapper>
          <OperatorIconWrapper align="left">
            <i className="iconfont">&#xe718;</i>
          </OperatorIconWrapper>
          <OperatorIconWrapper align="left">
            <i className="iconfont">&#xe640;</i>
          </OperatorIconWrapper>
        </Operators>
      </Bottom>
    </StyledNormalPlayer>
  );
}

export default React.memo(NormalPlayer);
