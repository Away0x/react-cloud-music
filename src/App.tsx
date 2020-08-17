import React, { useMemo } from 'react';
import { HashRouter as Router } from 'react-router-dom';

import { ThemeState, ThemeProvider } from 'containers/ThemeContainer';
import AuthContainer, { AuthState } from 'containers/AuthContainer';
import StyledGlobal from 'styles/global';
import StyledIconFont from 'assets/iconfont';
import { GlobalErrorBoundary } from 'components/ErrorBoundary';
import TokenStorage from 'services/storage/token';
import RootRoutes from 'routes';

interface InitState {
  theme: ThemeState;
  auth: AuthState;
}
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
    theme: {
      statusBarHeight: 0,
    },
    auth: {
      token: TokenStorage.get(),
      userData: null,
    },
  };
}

function App() {
  const initData = useMemo(() => {
    const data = getWindowBaseData() || getDefaultInitData();
    console.log('[App#initData]', data);
    return data;
  }, []);

  return (
    <GlobalErrorBoundary>
      <ThemeProvider initialState={initData.theme}>
        <AuthContainer.Provider initialState={initData.auth}>
          {/* 全局样式 */}
          <StyledGlobal />
          <StyledIconFont />
          {/* 路由 */}
          <Router>
            <RootRoutes />
          </Router>
        </AuthContainer.Provider>
      </ThemeProvider>
    </GlobalErrorBoundary>
  );
}

export default App;
