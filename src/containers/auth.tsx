import { useMemo, useCallback, useEffect } from 'react';
import { createContainer } from 'unstated-next';
import { useImmer } from 'use-immer';

import { TokenStorage } from 'services/storage/token';
import { authEventEmitter } from 'events/auth';
import { loginService } from 'services/auth';

type LoginParams = {
  username: string;
  password: string;
};

export interface AuthState {
  /** 存储 token */
  token: string;
  /** 存储用户信息 */
  userData: Data.UserData | null;
}

export interface AuthComputedState {
  /** 已登录 */
  logged: boolean;
  /** 未登录 */
  unLogin: boolean;
}

interface AuthActions {
  /** 更新 token */
  updateTokenAction(token: string): void;
  /** 更新用户信息 */
  updateUserDataAction(user: Data.UserData): void;
  /** 登录 */
  loginAction(loginInfo: LoginParams): Promise<boolean>;
  /** 登出 */
  logoutAction(): void;
}

type UseAuth = AuthState & AuthComputedState & AuthActions;

function useAuth(initialState?: AuthState | null): UseAuth {
  const [authState, updateAuthState] = useImmer<AuthState>(
    initialState || {
      token: '',
      userData: null,
    },
  );

  const logged = useMemo(() => {
    return !!authState.token && !!authState.userData;
  }, [authState]);

  const unLogin = useMemo(() => {
    return !logged;
  }, [logged]);

  const updateTokenAction = useCallback(
    (token: string) => {
      TokenStorage.set(token);
      updateAuthState((state) => {
        state.token = token;
      });
    },
    [updateAuthState],
  );

  const updateUserDataAction = useCallback(
    (user: Data.UserData) => {
      updateAuthState((state) => {
        state.userData = user;
      });
    },
    [updateAuthState],
  );

  const loginAction = useCallback(
    async (loginInfo: LoginParams): Promise<boolean> => {
      const { status, message, data, token } = await loginService(loginInfo.username, loginInfo.password);

      if (!status) {
        alert(message);
        return false;
      }
      if (!token) {
        alert('token not found!');
        return false;
      }

      TokenStorage.set(token);
      updateAuthState((state) => {
        state.token = token;
        state.userData = data;
      });
      return true;
    },
    [updateAuthState],
  );

  const logoutAction = useCallback(() => {
    TokenStorage.clean();
    updateAuthState((state) => {
      state.token = '';
      state.userData = null;
    });
  }, [updateAuthState]);

  useEffect(() => {
    const off = authEventEmitter.onoff('LogoutAuthEvent', logoutAction);
    return () => off();
  }, [logoutAction]);

  useEffect(() => {
    const off = authEventEmitter.onoff('UpdateTokenAuthEvent', updateTokenAction);
    return () => off();
  }, [updateTokenAction]);

  return {
    ...authState,
    logged,
    unLogin,
    updateTokenAction,
    updateUserDataAction,
    loginAction,
    logoutAction,
  };
}

const AuthContainer = createContainer(useAuth);

export default AuthContainer;
