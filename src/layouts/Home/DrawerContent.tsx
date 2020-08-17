import React from 'react';

import AuthContainer from 'containers/AuthContainer';

function DrawerContent() {
  const { logged, userData, loginAction, logoutAction } = AuthContainer.useContainer();

  return (
    <div style={{ padding: '20px' }}>
      {logged ? (
        <>
          <p>{userData?.username}</p>
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
