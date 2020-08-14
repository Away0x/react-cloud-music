import React from 'react';
import LazyLoad from 'react-lazyload';

import StyledSingerList, { ListItem, ImgWrapper, Name } from './style';

interface SingerListProps {
  title?: string;
  list: Data.SingerListItem[];
  onItemClick?: (item: Data.SingerListItem) => void;
}

function SingerList({ title, list, onItemClick }: SingerListProps) {
  return (
    <StyledSingerList>
      {title && <h1>{title}</h1>}
      {list.map((item) => {
        return (
          <ListItem key={item.id} onClick={() => onItemClick && onItemClick(item)}>
            <ImgWrapper>
              <LazyLoad placeholder={<img width="100%" height="100%" src={require('./singer.png')} alt="singer" />}>
                <img src={`${item.picUrl}?param=300x300`} width="100%" height="100%" alt="singer" />
              </LazyLoad>
            </ImgWrapper>
            <Name>{item.name}</Name>
          </ListItem>
        );
      })}
    </StyledSingerList>
  );
}

export default React.memo(SingerList);
