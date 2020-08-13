import React, { useEffect, useState } from 'react';
import { DefaultTheme, ThemeProvider as StyledThemeProvider } from 'styled-components';

export type ThemeState = Partial<DefaultTheme>;

interface ThemeContainerProps {
  children: React.ReactNode;
  value?: ThemeState | null;
}

const THEME: DefaultTheme = {
  statusBarHeight: 0,
  themeColor: '#d44439',
  themeColorShadow: 'rgba(212, 68, 57, .5)',
  fontColor: '#2E3030',
  fontColorLight: '#f1f1f1',
  fontColorLightShadow: 'rgba(241, 241, 241, 0.6)',
  fontColorDesc: '#2E3030',
  fontColorDescV2: '#bba8a8',
  fontSizeSS: '10px',
  fontSizeS: '12px',
  fontSizeM: '14px',
  fontSizeL: '16px',
  fontSizeLL: '18px',
  borderColor: '#e4e4e4',
  borderColorV2: 'rgba(228, 228, 228, 0.1)',
  backgroundColor: '#f2f3f4',
  backgroundColorShadow: 'rgba(0, 0, 0, 0.3)',
  backgroundColorHighlight: '#fff',
  officialRed: '#E82001',
};

function ThemeContainer({ children, value }: ThemeContainerProps) {
  const [themeState, updateThemeState] = useState<DefaultTheme>(THEME);

  useEffect(() => {
    if (value) updateThemeState(Object.assign({}, THEME, value));
  }, [value]);

  return <StyledThemeProvider theme={themeState}>{children}</StyledThemeProvider>;
}

export default ThemeContainer;
