import React from 'react';

import { StyledLoadingV2 } from './style';

function LoadingV2() {
  return (
    <StyledLoadingV2>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <span> 拼命加载中...</span>
    </StyledLoadingV2>
  );
}

export default React.memo(LoadingV2);
