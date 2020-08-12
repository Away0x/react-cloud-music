import React from 'react';

import StyledRank from './style';

interface RankProps {}

function Rank({}: RankProps) {
  return <StyledRank>Rank</StyledRank>;
}

export default React.memo(Rank);
