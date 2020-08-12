import React from 'react';

import Slider from '.';

export default {
  title: 'Components/Slider',
  component: Slider,
};

const imgs = [1, 2, 3, 4].map(() => {
  return 'http://p1.music.126.net/ZYLJ2oZn74yUz5x8NBGkVA==/109951164331219056.jpg';
});

export const Default = () => {
  return (
    <div style={{ width: '400px' }}>
      <Slider imgs={imgs} />
    </div>
  );
};
