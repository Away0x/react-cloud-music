import React, { useCallback } from 'react';
import { createContainer } from 'unstated-next';
import { useImmer } from 'use-immer';
import { DefaultTheme, ThemeProvider as StyledThemeProvider } from 'styled-components';

export type ThemeState = Partial<DefaultTheme>;

export const defaultTheme: DefaultTheme = {
  statusBarHeight: 0,
  navBarHeight: 45,
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

interface ThemeActions {
  changeTheme: (theme: ThemeState) => void;
}

type UseTheme = DefaultTheme & ThemeActions;

function useTheme(initialState?: ThemeState | null): UseTheme {
  const [themeState, updateThemeState] = useImmer<DefaultTheme>({ ...initialState, ...defaultTheme });

  const changeTheme = useCallback(
    (theme: ThemeState) => {
      updateThemeState((state) => {
        for (const key in theme) {
          if (theme.hasOwnProperty(key)) {
            (state as any)[key] = (theme as any)[key];
          }
        }
      });
    },
    [updateThemeState],
  );

  return {
    ...themeState,
    changeTheme,
  };
}

const ThemeContainer = createContainer(useTheme);

interface ThemeProviderProps {
  initialState?: ThemeState | null;
  children: React.ReactNode;
}

function IntlStyledThemeProvider({ children }: ThemeProviderProps) {
  const theme = ThemeContainer.useContainer();

  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
}

function ThemeProvider({ initialState, children }: ThemeProviderProps) {
  return (
    <ThemeContainer.Provider initialState={initialState}>
      <IntlStyledThemeProvider>{children}</IntlStyledThemeProvider>
    </ThemeContainer.Provider>
  );
}

export default ThemeContainer;

export { ThemeProvider };
