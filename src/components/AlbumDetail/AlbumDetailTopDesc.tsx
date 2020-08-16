import React from 'react';

import {
  StyledAlbumDetailTopDesc,
  Background,
  BackgroundFilter,
  ImgWrapper,
  Decorate,
  PlayCount,
  PLay,
  DescWrapper,
  Title,
  Person,
  Avatar,
  Name,
} from './style';

interface AlbumDetailTopDescProps {
  data?: Data.AlbumDetail | null;
}

function AlbumDetailTopDesc({ data }: AlbumDetailTopDescProps) {
  if (!data) return null;

  return (
    <StyledAlbumDetailTopDesc>
      <Background background={data.coverImgUrl}>
        <BackgroundFilter />
      </Background>

      <ImgWrapper>
        <Decorate />
        <img src={data.coverImgUrl} alt="cover" />
        <PlayCount>
          <PLay className="iconfont">&#xe885;</PLay>
          <span>{Math.floor(data.subscribedCount / 1000) / 10}万</span>
        </PlayCount>
      </ImgWrapper>

      <DescWrapper>
        <Title>{data.name}</Title>
        <Person>
          <Avatar>
            <img src={data.creator.avatarUrl} alt="avatar" />
          </Avatar>
          <Name>{data.creator.nickname}</Name>
        </Person>
      </DescWrapper>
    </StyledAlbumDetailTopDesc>
  );
}

export default React.memo(AlbumDetailTopDesc);
