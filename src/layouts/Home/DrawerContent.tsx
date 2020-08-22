import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import ThemeContainer, { defaultTheme } from 'containers/ThemeContainer';
import AuthContainer from 'containers/AuthContainer';
import { SpecialRoutePath } from 'constants/router';

interface DrawerContentProps {
  closeDrawer?: () => void;
}

function DrawerContent({ closeDrawer }: DrawerContentProps) {
  const history = useHistory();
  const { changeTheme } = ThemeContainer.useContainer();
  const { logged, userData, logoutAction } = AuthContainer.useContainer();

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
        <button
          type="button"
          onClick={() => {
            closeDrawer && closeDrawer();
            setTimeout(() => {
              history.push(SpecialRoutePath.Login);
            }, 300);
          }}>
          登录
        </button>
      )}
    </div>
  );
}

export default React.memo(DrawerContent);
