import React, { useCallback } from 'react';
import { useMount } from 'ahooks';
import { useHistory } from 'react-router-dom';

import { RecommondRoutePath } from 'constants/router';
import RecommendContainer from 'containers/recommend';
import Slider from 'components/Slider';

import StyledRecommend from './style';
import RecommentList from 'components/RecommentList';

function Recommend() {
  const {
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
      <Slider imgs={bannerImages} />
      <RecommentList list={recommendList} onItemClick={goDetail} />
    </StyledRecommend>
  );
}

export default React.memo(Recommend);
