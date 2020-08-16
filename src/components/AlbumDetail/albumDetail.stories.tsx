import React from 'react';

import AlbumDetail from '.';

export default {
  title: 'Components/AlbumDetail',
  component: AlbumDetail,
};

const currentAlbum: any = {
  creator: {
    avatarUrl: 'http://p1.music.126.net/O9zV6jeawR43pfiK2JaVSw==/109951164232128905.jpg',
    nickname: '浪里推舟',
  },
  coverImgUrl: 'http://p2.music.126.net/ecpXnH13-0QWpWQmqlR0gw==/109951164354856816.jpg',
  subscribedCount: 2010711,
  name: '听完就睡，耳机是天黑以后柔软的梦境',
  tracks: [
    {
      name: '我真的受伤了',
      ar: [{ name: '张学友' }, { name: '周华健' }],
      al: {
        name: '学友 热',
      },
    },
    {
      name: '我真的受伤了',
      ar: [{ name: '张学友' }, { name: '周华健' }],
      al: {
        name: '学友 热',
      },
    },
    {
      name: '我真的受伤了',
      ar: [{ name: '张学友' }, { name: '周华健' }],
      al: {
        name: '学友 热',
      },
    },
    {
      name: '我真的受伤了',
      ar: [{ name: '张学友' }, { name: '周华健' }],
      al: {
        name: '学友 热',
      },
    },
    {
      name: '我真的受伤了',
      ar: [{ name: '张学友' }, { name: '周华健' }],
      al: {
        name: '学友 热',
      },
    },
    {
      name: '我真的受伤了',
      ar: [{ name: '张学友' }, { name: '周华健' }],
      al: {
        name: '学友 热',
      },
    },
    {
      name: '我真的受伤了',
      ar: [{ name: '张学友' }, { name: '周华健' }],
      al: {
        name: '学友 热',
      },
    },
    {
      name: '我真的受伤了',
      ar: [{ name: '张学友' }, { name: '周华健' }],
      al: {
        name: '学友 热',
      },
    },
    {
      name: '我真的受伤了',
      ar: [{ name: '张学友' }, { name: '周华健' }],
      al: {
        name: '学友 热',
      },
    },
    {
      name: '我真的受伤了',
      ar: [{ name: '张学友' }, { name: '周华健' }],
      al: {
        name: '学友 热',
      },
    },
  ],
};

export const Default = () => {
  return (
    <div style={{ width: '400px', height: '600px' }}>
      <AlbumDetail data={currentAlbum} />
    </div>
  );
};
