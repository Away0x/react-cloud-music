import React from 'react';

import StyledRankList, { ListItem, ImgWrapper, Decorate, UpdateFrequecy } from './style';
import SongList from './SongList';

interface RankListProps {
  list: Data.RankListItem[];
  global?: boolean; // 是否是全球排行榜
  onItemClick?: (item: Data.RankListItem) => void;
}

function RankList({ list, global = false, onItemClick }: RankListProps) {
  return (
    <StyledRankList global={global}>
      {list.map((item, index) => {
        const hasTracks = !!(item.tracks && item.tracks.length);

        return (
          <ListItem
            key={`${item.coverImgId}${index}`}
            hasTracks={hasTracks}
            onClick={() => onItemClick && onItemClick(item)}>
            <ImgWrapper hasTracks={hasTracks}>
              <img src={item.coverImgUrl} alt="cover" />
              <Decorate />
              <UpdateFrequecy>{item.updateFrequency}</UpdateFrequecy>
            </ImgWrapper>
            {!global && <SongList list={item.tracks} />}
          </ListItem>
        );
      })}
    </StyledRankList>
  );
}

export default React.memo(RankList);
