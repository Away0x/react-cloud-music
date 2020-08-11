import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Globalstyle from 'styles/global';
import { GlobalErrorBoundary } from 'components/ErrorBoundary';
import ThemeContainer, { ThemeState } from 'containers/theme';
import AuthContainer, { AuthState } from 'containers/auth';
import { TokenStorage } from 'services/storage/token';
import RootRoutes from 'pages';

type InitState = AuthState & ThemeState;

function getWindowBaseData(): InitState | null {
  const baseDataString = (window as any).__BASE_DATA__ || '';
  if (!baseDataString) return null;

  try {
    const jsonObj = JSON.parse(baseDataString);
    if (!jsonObj) return null;
    return jsonObj;
  } catch (err) {
    console.warn(err);
    return null;
  }
}

function getDefaultInitData(): InitState {
  return {
    token: TokenStorage.get(),
    userData: null,
    statusBarHeight: 0,
  };
}

function App() {
  const [authState, setAuthState] = useState<AuthState | null>(null);
  const [themeState, setThemeState] = useState<Partial<ThemeState> | null>(null);

  useEffect(() => {
    let initData = getWindowBaseData();

    if (!initData) {
      initData = getDefaultInitData();
    }

    setAuthState({
      token: initData.token,
      userData: initData.userData,
    });
    setThemeState({
      statusBarHeight: initData.statusBarHeight,
    });
  }, []);

  return (
    <GlobalErrorBoundary>
      <Globalstyle />
      <Router>
        <ThemeContainer value={themeState}>
          <AuthContainer.Provider initialState={authState}>
            <RootRoutes />
          </AuthContainer.Provider>
        </ThemeContainer>
      </Router>
    </GlobalErrorBoundary>
  );
}

export default App;
