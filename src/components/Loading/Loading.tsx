import React from 'react';

import { StyledLoading } from './style';

function Loading() {
  return (
    <StyledLoading>
      <div></div>
      <div></div>
    </StyledLoading>
  );
}

export default React.memo(Loading);
