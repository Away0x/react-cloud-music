/// <reference types="react-scripts" />

import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    statusBarHeight: number;
  }
}
