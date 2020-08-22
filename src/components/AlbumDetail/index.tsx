import React from 'react';

import SongList from 'components/Songlist';

import AlbumDetailTopDesc from './AlbumDetailTopDesc';
import AlbumDetailMenu from './AlbumDetailMenu';

interface AlbumDetailProps {
  data?: Data.AlbumDetail | null;
  onSelectSong?: (ev: React.MouseEvent, song: Data.SongListItem, index: number) => void;
}

function AlbumDetail({ data, onSelectSong }: AlbumDetailProps) {
  if (!data) return null;
  return (
    <div>
      <AlbumDetailTopDesc data={data} />
      <AlbumDetailMenu />
      <SongList
        songs={data.tracks}
        collectCount={data.subscribedCount}
        showCollect
        showBackground
        onItemClick={onSelectSong}
      />
    </div>
  );
}

export default React.memo(AlbumDetail);
