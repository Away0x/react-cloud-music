import React from 'react';

import Songlist from '.';

export default {
  title: 'Components/Songlist',
  component: Songlist,
};

const songs: any = [
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
];

export const Default = () => {
  return <Songlist songs={songs} />;
};
