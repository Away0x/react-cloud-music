import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';

import './preview.css';

import { ThemeProvider } from 'containers/ThemeContainer';
import StyledGlobal from '../src/styles/global';
import StyledIconFont from '../src/assets/iconfont';

addDecorator((storyFn) => (
  <ThemeProvider>
    <StyledGlobal />
    <StyledIconFont />
    {storyFn()}
  </ThemeProvider>
));

addParameters({
  options: {
    showRoots: true,
  },
});
