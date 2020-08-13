import React, { useState, useEffect } from 'react';
import { HashRouter as Router } from 'react-router-dom';

import ThemeContainer, { ThemeState } from 'containers/ThemeContainer';
import AuthContainer, { AuthState } from 'containers/AuthContainer';
import StyledGlobal from 'styles/global';
import StyledIconFont from 'assets/iconfont';
import { GlobalErrorBoundary } from 'components/ErrorBoundary';
import { TokenStorage } from 'services/storage/token';
import RootRoutes from 'pages';

type InitState = AuthState & ThemeState;

/** 尝试从 window 上获取基础数据 */
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
      <ThemeContainer value={themeState}>
        <AuthContainer.Provider initialState={authState}>
          {/* 全局样式 */}
          <StyledGlobal />
          <StyledIconFont />
          {/* 路由 */}
          <Router>
            <RootRoutes />
          </Router>
        </AuthContainer.Provider>
      </ThemeContainer>
    </GlobalErrorBoundary>
  );
}

export default App;
