import React from 'react';

import StyledPlayList from './PlayList-style';

interface PlayListProps {}

function PlayList({}: PlayListProps) {
  return <StyledPlayList>PlayList</StyledPlayList>;
}

export default React.memo(PlayList);
