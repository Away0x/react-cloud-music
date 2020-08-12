import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';

import ThemeContainer from '../src/containers/theme';

addDecorator((storyFn) => <ThemeContainer>{storyFn()}</ThemeContainer>);

addParameters({
  options: {
    showRoots: true,
  },
});
