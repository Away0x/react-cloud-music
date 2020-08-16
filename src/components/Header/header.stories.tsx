import React from 'react';

import Header from '.';

export default {
  title: 'Components/Header',
  component: Header,
};

export const Default = () => {
  return (
    <Header style={{ color: 'red' }} onBackButtonClick={() => alert('back')}>
      Header component
    </Header>
  );
};

export const Marquee = () => {
  return (
    <Header style={{ color: 'red' }} isMarquee onBackButtonClick={() => alert('back')}>
      Header component
    </Header>
  );
};
