import React, { lazy, useEffect, useCallback } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import {
  SpecialRoutePath,
  RecommondRoutePath,
  SingersRoutePath,
  RankRoutePath,
  SearchRoutePath,
  AlbumRoutePath,
} from 'constants/router';
import { globalEventEmitter } from 'events/global';
import { useFirstLoad } from 'containers/AuthContainer';
import HomeContainer from 'containers/HomeContainer';
import Suspense from 'components/Suspense';
import { Loading } from 'components/Loading';
import Toast, { useToast } from 'components/Toast';
import HomeLayout from 'layouts/Home';

import NotFound from 'pages/Errors/NotFound';
const Recommend = lazy(() => import(/* webpackChunkName: 'recommend-page' */ 'pages/Recommend'));
const Singers = lazy(() => import(/* webpackChunkName: 'singers-page' */ 'pages/Singers'));
const Rank = lazy(() => import(/* webpackChunkName: 'rank-page' */ 'pages/Rank'));
const Album = lazy(() => import(/* webpackChunkName: 'album-page' */ 'pages/Album'));
const Singer = lazy(() => import(/* webpackChunkName: 'singer-page' */ 'pages/Singer'));
const Search = lazy(() => import(/* webpackChunkName: 'search-page' */ 'pages/Search'));

function RootRoutes() {
  const { ready } = useFirstLoad();
  const { toastRef, showToast } = useToast();

  const handleShowToast = useCallback(
    (text?: React.ReactNode) => {
      showToast(text);
    },
    [showToast],
  );

  useEffect(() => {
    const off = globalEventEmitter.onoff('ShowToastGlobalEvent', handleShowToast);
    return () => off();
  }, [handleShowToast]);

  if (!ready) return <Loading full />;

  return (
    <HomeContainer>
      <HomeLayout>
        <Switch>
          {/* 首页 */}
          <Route exact path={SpecialRoutePath.Root}>
            <Redirect to={RecommondRoutePath.Root} />
          </Route>

          {/* 推荐页 */}
          <Route path={RecommondRoutePath.Root}>
            <Suspense>
              <Recommend>
                <Switch>
                  {/* 推荐页详情 */}
                  <Route exact path={RecommondRoutePath.Detail}>
                    <Suspense component={<Album />} />
                  </Route>
                </Switch>
              </Recommend>
            </Suspense>
          </Route>

          {/* 歌手页 */}
          <Route path={SingersRoutePath.Root}>
            <Suspense>
              <Singers>
                <Switch>
                  {/* 歌手页详情 */}
                  <Route exact path={SingersRoutePath.Detail}>
                    <Suspense component={<Singer />} />
                  </Route>
                </Switch>
              </Singers>
            </Suspense>
          </Route>

          {/* 排行榜页 */}
          <Route path={RankRoutePath.Root}>
            <Suspense>
              <Rank>
                <Switch>
                  {/* 排行榜页详情 */}
                  <Route exact path={RankRoutePath.Detail}>
                    <Suspense component={<Album />} />
                  </Route>
                </Switch>
              </Rank>
            </Suspense>
          </Route>

          {/* 搜索页 */}
          <Route path={SearchRoutePath.Root}>
            <Suspense component={<Search />} />
          </Route>

          {/* 歌单详情页 */}
          <Route path={AlbumRoutePath.Detail}>
            <Suspense component={<Album />} />
          </Route>

          {/* not found */}
          <Route path={SpecialRoutePath.Any} component={NotFound} />
        </Switch>
      </HomeLayout>

      <Toast ref={toastRef} />
    </HomeContainer>
  );
}

export default React.memo(RootRoutes);
