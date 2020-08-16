import React, { useCallback } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import Header from 'components/Header';

import StyledSinger from './style';

interface SingerRouteParams {
  id: string;
}

function Singer() {
  const history = useHistory();
  const { id } = useParams<SingerRouteParams>();

  const goBack = useCallback(() => {
    history.goBack();
  }, [history]);

  return (
    <StyledSinger>
      <Header style={{ background: 'red' }} onBackButtonClick={goBack}>
        Singer {id}
      </Header>
    </StyledSinger>
  );
}

export default React.memo(Singer);
