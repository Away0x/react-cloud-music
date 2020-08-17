import React, { useState } from 'react';

import ThemeContainer, { defaultTheme } from 'containers/ThemeContainer';
import AuthContainer from 'containers/AuthContainer';

function DrawerContent() {
  const { changeTheme } = ThemeContainer.useContainer();
  const { logged, userData, loginAction, logoutAction } = AuthContainer.useContainer();

  const [isDarkTheme, setDarkTheme] = useState(false);

  return (
    <div style={{ padding: '20px' }}>
      {logged ? (
        <>
          <p>{userData?.username}</p>
          <hr />
          <button
            type="button"
            onClick={() => {
              changeTheme({ themeColor: !isDarkTheme ? 'black' : defaultTheme.themeColor });
              setDarkTheme((s) => !s);
            }}>
            {!isDarkTheme ? '黑夜主题' : '默认主题'}
          </button>
          <hr />
          <button type="button" onClick={() => logoutAction()}>
            退出
          </button>
        </>
      ) : (
        <button type="button" onClick={() => loginAction({ username: 'Away0x', password: '123456' })}>
          登录
        </button>
      )}
    </div>
  );
}

export default React.memo(DrawerContent);
