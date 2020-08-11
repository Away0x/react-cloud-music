import React, { useEffect, useState } from 'react';
import { DefaultTheme, ThemeProvider as StyledThemeProvider } from 'styled-components';

export type ThemeState = Partial<DefaultTheme>;

interface ThemeContainerProps {
  children: React.ReactNode;
  value?: ThemeState | null;
}

const THEME: DefaultTheme = {
  statusBarHeight: 0,
};

function ThemeContainer({ children, value = {} }: ThemeContainerProps) {
  const [themeState, updateThemeState] = useState<DefaultTheme>(() => Object.assign({}, THEME, value));

  useEffect(() => {
    updateThemeState((state) => Object.assign({}, state, value));
  }, [value]);

  return <StyledThemeProvider theme={themeState}>{children}</StyledThemeProvider>;
}

export default ThemeContainer;
