import React from 'react';
import { useParams } from 'react-router-dom';

import SubPage from 'components/SubPage';

import StyledSinger from './style';

interface SingerRouteParams {
  id: string;
}

function Singer() {
  const { id } = useParams<SingerRouteParams>();

  return (
    <SubPage headerStyle={{ background: 'red' }} title={`Singer ${id}`}>
      <StyledSinger>
        <p></p>
      </StyledSinger>
    </SubPage>
  );
}

export default React.memo(Singer);
