import React, { useCallback } from 'react';
import { useMount } from 'ahooks';
import { useHistory } from 'react-router-dom';
import { forceCheck } from 'react-lazyload';

import { RecommondRoutePath } from 'constants/router';
import RecommendContainer from 'containers/recommend';
import Slider from 'components/Slider';
import Scroll from 'components/Scroll';
import { Loading } from 'components/Loading';

import StyledRecommend from './style';
import RecommentList from 'components/RecommentList';

function Recommend() {
  const {
    loading,
    bannerImages,
    bannerList,
    recommendList,
    getBannerList,
    getRecommendList,
  } = RecommendContainer.useContainer();
  const history = useHistory();

  const goDetail = useCallback(
    (item: Data.RecommendListItem) => {
      history.push(RecommondRoutePath.buildDetailPath(item.id));
    },
    [history],
  );

  useMount(() => {
    if (!bannerList.length) getBannerList();
    if (!recommendList.length) getRecommendList();
  });

  return (
    <StyledRecommend>
      <Scroll onScroll={forceCheck}>
        <div>
          <Slider imgs={bannerImages} />
          <RecommentList list={recommendList} onItemClick={goDetail} />
        </div>
      </Scroll>

      {loading ? <Loading /> : null}
    </StyledRecommend>
  );
}

export default React.memo(Recommend);
