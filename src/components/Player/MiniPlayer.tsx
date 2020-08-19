import React from 'react';

import StyledMiniPlayer, { IconWrapper, ImgWrapper, TextWrapper, Control } from './MiniPlayer-style';

interface MiniPlayerProps {}

function MiniPlayer({}: MiniPlayerProps) {
  return <StyledMiniPlayer>MiniPlayer</StyledMiniPlayer>;
}

export default React.memo(MiniPlayer);
