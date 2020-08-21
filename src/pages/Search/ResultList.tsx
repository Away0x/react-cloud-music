import React, { useCallback } from 'react';
import { forceCheck } from 'react-lazyload';

import { SingersRoutePath, AlbumRoutePath } from 'constants/router';
import Scroll from 'components/Scroll';

/** 复用歌手列表样式 */
import SingerList, { SingerImg } from 'components/SingerList';
import StyledSingerList, { ListItem as SingerListListItem, Name as SingerListName } from 'components/SingerList/style';
/** 复用歌曲列表样式 */
import { SongListContent, SongItem, SongItemInfo } from 'components/Songlist/style';
import { getSingerName } from 'tools/song';

import { ShortcutWrapper } from './style';

interface ResultListProps {
  show?: boolean;
  suggestList: Data.SuggestData | null;
  songsList: Data.SongListItem[];
  onItemClick?: (path: string) => void;
  onSongItemClick?: (songid: number) => void;
}

function ResultList({ show = true, suggestList, songsList, onItemClick, onSongItemClick }: ResultListProps) {
  const singerItemClick = useCallback(
    (item: Data.SingerListItem) => {
      onItemClick && onItemClick(SingersRoutePath.buildDetailPath(item.id));
    },
    [onItemClick],
  );

  const albumItemClick = useCallback(
    (item: Data.AlbumDetail) => {
      onItemClick && onItemClick(AlbumRoutePath.buildDetailPath(item.id));
    },
    [onItemClick],
  );

  const songItemClick = useCallback(
    (item: Data.SongListItem) => {
      onSongItemClick && onSongItemClick(item.id);
    },
    [onSongItemClick],
  );

  const renderSingers = useCallback(() => {
    if (!suggestList || !suggestList.artists || !suggestList.artists.length) return null;
    return <SingerList title="相关歌手" list={suggestList.artists} onItemClick={singerItemClick} />;
  }, [suggestList, singerItemClick]);

  const renderAlbum = useCallback(() => {
    if (!suggestList || !suggestList.playlists || !suggestList.playlists.length) return null;

    return (
      <StyledSingerList>
        <h1>相关歌单</h1>
        {suggestList.playlists.map((item) => {
          return (
            <SingerListListItem key={item.id} onClick={() => albumItemClick(item)}>
              <SingerImg src={item.coverImgUrl} />
              <SingerListName>{item.name}</SingerListName>
            </SingerListListItem>
          );
        })}
      </StyledSingerList>
    );
  }, [suggestList, albumItemClick]);

  const renderSongs = useCallback(() => {
    return (
      <SongListContent style={{ paddingLeft: '20px' }}>
        {songsList.map((item, index) => {
          return (
            <SongItem key={item.id} onClick={() => songItemClick(item)}>
              <SongItemInfo>
                <span>{item.name}</span>
                <span>
                  {getSingerName(item.artists || [])} - {item.album?.name}
                </span>
              </SongItemInfo>
            </SongItem>
          );
        })}
      </SongListContent>
    );
  }, [songsList, songItemClick]);

  return (
    <ShortcutWrapper show={show}>
      <Scroll onScroll={forceCheck}>
        <div>
          {renderSingers()}
          {renderAlbum()}
          {renderSongs()}
        </div>
      </Scroll>
    </ShortcutWrapper>
  );
}

export default React.memo(ResultList);
