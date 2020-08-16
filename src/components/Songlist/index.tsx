import React, { forwardRef } from 'react';

// import { ONE_PAGE_COUNT } from 'constants/songs';
import { getSingerName } from 'tools/song';

import StyledSonglist, {
  FirstLine,
  PlayAll,
  Sum,
  AddCollectList,
  SongListContent,
  SongItem,
  SongItemIndex,
  SongItemInfo,
} from './style';

interface SonglistProps {
  songs: Data.SongListItem[];
  showCollect?: boolean;
  collectCount?: number;
  showBackground?: boolean;
}

const Songlist = forwardRef<HTMLDivElement, SonglistProps>(
  ({ songs, showCollect = true, collectCount = 0, showBackground = false }, ref) => {
    const totalCount = songs.length;

    return (
      <StyledSonglist ref={ref} showBackground={showBackground}>
        <FirstLine>
          <PlayAll>
            <i className="iconfont">&#xe6e3;</i>
            <span>
              播放全部
              <Sum>(共{totalCount}首)</Sum>
            </span>
          </PlayAll>

          {showCollect && (
            <AddCollectList>
              <i className="iconfont">&#xe62d;</i>
              <span>收藏({Math.floor(collectCount / 1000) / 10}万)</span>
            </AddCollectList>
          )}
        </FirstLine>

        <SongListContent>
          {songs.map((song, index) => {
            return (
              <SongItem key={song.id}>
                <SongItemIndex>{index + 1}</SongItemIndex>
                <SongItemInfo>
                  <span>{song.name}</span>
                  <span>
                    {song.ar ? getSingerName(song.ar) : getSingerName(song.artists || [])} -{' '}
                    {song.al ? song.al.name : song.album?.name}
                  </span>
                </SongItemInfo>
              </SongItem>
            );
          })}
        </SongListContent>
      </StyledSonglist>
    );
  },
);

export default React.memo(Songlist);
