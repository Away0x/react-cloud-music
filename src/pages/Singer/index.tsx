import React, { useCallback, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import Header from 'components/Header';
import AnimatePage from 'components/AnimatePage';

import StyledSinger from './style';

interface SingerRouteParams {
  id: string;
}

function Singer() {
  const history = useHistory();
  const { id } = useParams<SingerRouteParams>();

  const [showPage, setShowPage] = useState(true);

  const handleBackButtonClick = useCallback(() => {
    setShowPage(false);
  }, []);

  const goBack = useCallback(() => {
    history.goBack();
  }, [history]);

  return (
    <AnimatePage showPage={showPage} onExited={goBack}>
      <StyledSinger>
        <Header style={{ background: 'red' }} onBackButtonClick={handleBackButtonClick}>
          Singer {id}
        </Header>
      </StyledSinger>
    </AnimatePage>
  );
}

export default React.memo(Singer);
