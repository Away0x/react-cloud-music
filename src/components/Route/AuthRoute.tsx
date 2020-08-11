/* COMPONENT DOCUMENT
 * author: wutong
 * desc: 必须登录/有权限才可访问的路由
 * date: 2020/08/1
 */

import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

import AuthContainer from 'containers/auth';

interface AuthRouteProps extends RouteProps {
  noAuthRoutePath: string; // 无权限时跳转的地址
}

function AuthRoute({ noAuthRoutePath, children, ...rest }: AuthRouteProps) {
  const { logged } = AuthContainer.useContainer();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        logged ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: noAuthRoutePath,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default React.memo(AuthRoute);
