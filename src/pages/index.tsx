import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import RecommendContainer from 'containers/recommend';
import { SpecialRoutePath, RecommondRoutePath, SingersRoutePath, RankRoutePath } from 'constants/router';
import HomeLayout from 'layouts/Home';
import NotFound from 'pages/Errors/NotFound';

const Recommend = lazy(() => import(/* webpackChunkName: 'recommend-page' */ 'pages/Recommend'));
const Singers = lazy(() => import(/* webpackChunkName: 'singers-page' */ 'pages/Singers'));
const Rank = lazy(() => import(/* webpackChunkName: 'rank-page' */ 'pages/Rank'));

function RootRoutes() {
  return (
    <RecommendContainer.Provider>
      <HomeLayout>
        <Switch>
          {/* 首页 */}
          <Route exact path={SpecialRoutePath.Root}>
            <Redirect to={RecommondRoutePath.Root} />
          </Route>
          {/* 推荐页 */}
          <Route path={RecommondRoutePath.Root}>
            <Suspense fallback={null}>
              <Recommend />
            </Suspense>
          </Route>
          {/* 歌手页 */}
          <Route path={SingersRoutePath.Root}>
            <Suspense fallback={null}>
              <Singers />
            </Suspense>
          </Route>
          {/* 排行榜页 */}
          <Route path={RankRoutePath.Root}>
            <Suspense fallback={null}>
              <Rank />
            </Suspense>
          </Route>
          {/* not found */}
          <Route path={SpecialRoutePath.Any}>
            <NotFound />
          </Route>
        </Switch>
      </HomeLayout>
    </RecommendContainer.Provider>
  );
}

export default React.memo(RootRoutes);
