import React from 'react';

import Marquee from '.';

export default {
  title: 'Components/Marquee',
  component: Marquee,
};

export const Default = () => {
  return <Marquee style={{ width: '100px' }}>123123123123123123</Marquee>;
};
