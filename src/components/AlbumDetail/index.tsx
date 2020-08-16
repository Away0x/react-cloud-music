import React from 'react';

import SongList from 'components/Songlist';

import AlbumDetailTopDesc from './AlbumDetailTopDesc';
import AlbumDetailMenu from './AlbumDetailMenu';

interface AlbumDetailProps {
  data?: Data.AlbumDetail | null;
}

function AlbumDetail({ data }: AlbumDetailProps) {
  if (!data) return null;
  return (
    <div>
      <AlbumDetailTopDesc data={data} />
      <AlbumDetailMenu />
      <SongList songs={data.tracks} collectCount={data.subscribedCount} showCollect showBackground />
    </div>
  );
}

export default React.memo(AlbumDetail);
