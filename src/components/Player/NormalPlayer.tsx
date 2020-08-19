import React from 'react';

import StyledNormalPlayer from './NormalPlayer-style';

interface NormalPlayerProps {}

function NormalPlayer({}: NormalPlayerProps) {
  return <StyledNormalPlayer>NormalPlayer</StyledNormalPlayer>;
}

export default React.memo(NormalPlayer);
