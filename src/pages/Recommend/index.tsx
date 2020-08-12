import React from 'react';

import Slider from 'components/Slider';

import StyledRecommend from './style';

interface RecommendProps {}

const imgs = [1, 2, 3, 4].map(() => {
  return 'http://p1.music.126.net/ZYLJ2oZn74yUz5x8NBGkVA==/109951164331219056.jpg';
});

function Recommend({}: RecommendProps) {
  return (
    <StyledRecommend>
      <Slider imgs={imgs} />
    </StyledRecommend>
  );
}

export default React.memo(Recommend);
