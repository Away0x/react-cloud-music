import React from 'react';
import LazyLoad from 'react-lazyload';

import { getCount } from 'tools/utils';

import StyledRecommentList, { List, ListItem, ImgWrapper, Decorate, PlayCount, Desc } from './style';

interface RecommentListProps {
  list: Data.RecommendListItem[];
  onItemClick?: (item: Data.RecommendListItem) => void;
}

function RecommentList({ list, onItemClick }: RecommentListProps) {
  return (
    <StyledRecommentList>
      <h1>推荐歌单</h1>
      <List>
        {list.map((item) => {
          return (
            <ListItem key={item.id} onClick={() => onItemClick && onItemClick(item)}>
              <ImgWrapper>
                <Decorate />
                <LazyLoad placeholder={<img width="100%" height="100%" src={require('./music.png')} alt="music" />}>
                  <img src={item.picUrl + '?param=300x300'} width="100%" height="100%" alt="music" />
                </LazyLoad>
                <PlayCount>
                  <i className="iconfont ">&#xe885;</i>
                  <span>{getCount(item.playCount)}</span>
                </PlayCount>
                <Desc>{item.name}</Desc>
              </ImgWrapper>
            </ListItem>
          );
        })}
      </List>
    </StyledRecommentList>
  );
}

export default React.memo(RecommentList);
