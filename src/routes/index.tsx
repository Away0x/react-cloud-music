import React, { lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { useFirstLoad } from 'containers/AuthContainer';
import RecommendContainer from 'containers/RecommendContainer';
import SingersContainer from 'containers/SingersContainer';
import RankContainer from 'containers/RankContainer';
import PlayerContainer from 'containers/PlayerContainer';

import { SpecialRoutePath, RecommondRoutePath, SingersRoutePath, RankRoutePath } from 'constants/router';
import Suspense from 'components/Suspense';
import { Loading } from 'components/Loading';
import HomeLayout from 'layouts/Home';

import NotFound from 'pages/Errors/NotFound';
const Recommend = lazy(() => import(/* webpackChunkName: 'recommend-page' */ 'pages/Recommend'));
const Singers = lazy(() => import(/* webpackChunkName: 'singers-page' */ 'pages/Singers'));
const Rank = lazy(() => import(/* webpackChunkName: 'rank-page' */ 'pages/Rank'));
const Album = lazy(() => import(/* webpackChunkName: 'album-page' */ 'pages/Album'));
const Singer = lazy(() => import(/* webpackChunkName: 'singer-page' */ 'pages/Singer'));

/** 首页 tab 依赖的 containers */
function HomeProviders({ children }: { children: React.ReactNode }) {
  return (
    <RecommendContainer.Provider>
      <SingersContainer.Provider>
        <RankContainer.Provider>
          <PlayerContainer.Provider>{children}</PlayerContainer.Provider>
        </RankContainer.Provider>
      </SingersContainer.Provider>
    </RecommendContainer.Provider>
  );
}

function RootRoutes() {
  const { ready } = useFirstLoad();

  if (!ready) return <Loading full />;

  return (
    <HomeProviders>
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

          {/* not found */}
          <Route path={SpecialRoutePath.Any} component={NotFound} />
        </Switch>
      </HomeLayout>
    </HomeProviders>
  );
}

export default React.memo(RootRoutes);
