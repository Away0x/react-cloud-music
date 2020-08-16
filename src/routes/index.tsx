import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import RecommendContainer from 'containers/RecommendContainer';
import SingersContainer from 'containers/SingersContainer';
import RankContainer from 'containers/RankContainer';
import PlayerContainer from 'containers/PlayerContainer';
import AlbumContainer from 'containers/AlbumContainer';

import { SpecialRoutePath, RecommondRoutePath, SingersRoutePath, RankRoutePath } from 'constants/router';
import HomeLayout from 'layouts/Home';
import { Loading } from 'components/Loading';

import NotFound from 'pages/Errors/NotFound';
const Recommend = lazy(() => import(/* webpackChunkName: 'recommend-page' */ 'pages/Recommend'));
const Singers = lazy(() => import(/* webpackChunkName: 'singers-page' */ 'pages/Singers'));
const Rank = lazy(() => import(/* webpackChunkName: 'rank-page' */ 'pages/Rank'));
const Album = lazy(() => import(/* webpackChunkName: 'album-page' */ 'pages/Album'));

function RootRoutes() {
  return (
    <RecommendContainer.Provider>
      <SingersContainer.Provider>
        <RankContainer.Provider>
          <PlayerContainer.Provider>
            <HomeLayout>
              <Switch>
                {/* 首页 */}
                <Route exact path={SpecialRoutePath.Root}>
                  <Redirect to={RecommondRoutePath.Root} />
                </Route>

                {/* 推荐页 */}
                <Route path={RecommondRoutePath.Root}>
                  <Suspense fallback={<Loading full />}>
                    <Recommend>
                      <Switch>
                        {/* 推荐页详情 */}
                        <Route exact path={RecommondRoutePath.Detail}>
                          <Suspense fallback={<Loading full />}>
                            <AlbumContainer.Provider>
                              <Album />
                            </AlbumContainer.Provider>
                          </Suspense>
                        </Route>
                      </Switch>
                    </Recommend>
                  </Suspense>
                </Route>

                {/* 歌手页 */}
                <Route path={SingersRoutePath.Root}>
                  <Suspense fallback={<Loading full />}>
                    <Singers />
                  </Suspense>
                </Route>

                {/* 排行榜页 */}
                <Route path={RankRoutePath.Root}>
                  <Suspense fallback={<Loading full />}>
                    <Rank>
                      <Switch>
                        {/* 排行榜页详情 */}
                        <Route exact path={RankRoutePath.Detail}>
                          <Suspense fallback={<Loading full />}>
                            <AlbumContainer.Provider>
                              <Album />
                            </AlbumContainer.Provider>
                          </Suspense>
                        </Route>
                      </Switch>
                    </Rank>
                  </Suspense>
                </Route>

                {/* not found */}
                <Route path={SpecialRoutePath.Any}>
                  <NotFound />
                </Route>
              </Switch>
            </HomeLayout>
          </PlayerContainer.Provider>
        </RankContainer.Provider>
      </SingersContainer.Provider>
    </RecommendContainer.Provider>
  );
}

export default React.memo(RootRoutes);
