import React from 'react';

import StyledSingers from './style';

interface SingersProps {}

function Singers({}: SingersProps) {
  return <StyledSingers>Singers</StyledSingers>;
}

export default React.memo(Singers);
