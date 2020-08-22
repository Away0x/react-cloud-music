import React, { forwardRef, useCallback } from 'react';

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
  onItemClick?: (ev: React.MouseEvent, item: Data.SongListItem, index: number) => void;
}

const Songlist = forwardRef<HTMLDivElement, SonglistProps>(
  ({ songs, onItemClick, showCollect = true, collectCount = 0, showBackground = false }, ref) => {
    const totalCount = songs.length;

    const handleItemClick = useCallback(
      (ev: React.MouseEvent, song: Data.SongListItem, index: number) => {
        onItemClick && onItemClick(ev, song, index);
      },
      [onItemClick],
    );

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
              <SongItem key={song.id} onClick={(ev) => handleItemClick(ev, song, index)}>
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
