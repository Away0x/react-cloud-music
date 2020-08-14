import React from 'react';

import { StyledSongList } from './style';

interface SongListProps {
  list?: Data.RankSongItem[];
}

function SongList({ list }: SongListProps) {
  if (!list || !list.length) return null;

  return (
    <StyledSongList>
      {list.map((item, index) => {
        return (
          <li key={index}>
            {index + 1}. {item.first} - {item.second}
          </li>
        );
      })}
    </StyledSongList>
  );
}

export default React.memo(SongList);
