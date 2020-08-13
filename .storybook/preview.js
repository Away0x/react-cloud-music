import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';

import './preview.css';

import ThemeContainer from '../src/containers/theme';
import StyledGlobal from '../src/styles/global';
import StyledIconFont from '../src/assets/iconfont';

addDecorator((storyFn) => (
  <ThemeContainer>
    <StyledGlobal />
    <StyledIconFont />
    {storyFn()}
  </ThemeContainer>
));

addParameters({
  options: {
    showRoots: true,
  },
});
