import React from 'react';

import MiniPlayer from './MiniPlayer';
import StyledPlayer from './style';

interface PlayerProps {}

function Player({}: PlayerProps) {
  return <StyledPlayer>{/* <MiniPlayer /> */}</StyledPlayer>;
}

export default React.memo(Player);
