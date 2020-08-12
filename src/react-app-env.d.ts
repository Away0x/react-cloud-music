/// <reference types="react-scripts" />

import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    /** 状态栏高度 */
    statusBarHeight: number;

    /** color */
    themeColor: string;
    themeColorShadow: string;

    fontColor: string;
    fontColorLight: string;
    fontColorLightShadow: string;
    fontColorDesc: string;
    fontColorDescV2: string;

    borderColor: string;
    borderColorV2: string;

    backgroundColor: string;
    backgroundColorShadow: string;
    backgroundColorHighlight: string;

    officialRed: string;

    /** font size */
    fontSizeSS: string;
    fontSizeS: string;
    fontSizeM: string;
    fontSizeL: string;
    fontSizeLL: string;
  }
}
