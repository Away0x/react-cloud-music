import React from 'react';

import SingerList from '.';

export default {
  title: 'Components/SingerList',
  component: SingerList,
};

const singerList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => {
  return {
    id: item,
    picUrl: 'https://p2.music.126.net/uTwOm8AEFFX_BYHvfvFcmQ==/109951164232057952.jpg',
    name: '隔壁老樊',
    accountId: 277313426,
  };
});

export const Default = () => {
  return <SingerList title="歌手列表" onItemClick={(item) => alert(item.id)} list={singerList} />;
};
