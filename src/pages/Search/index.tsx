import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';

import SearchBox from 'components/SearchBox';
import AnimatePage from 'components/AnimatePage';

import StyledSearch from './style';

function Search() {
  const history = useHistory();

  const [showPage, setShowPage] = useState(true);
  const [query, setQuery] = useState('');

  const handleBackButtonClick = useCallback(() => {
    setShowPage(false);
  }, []);

  const goBack = useCallback(() => {
    history.goBack();
  }, [history]);

  const onSearch = useCallback((q: string) => {
    setQuery(q);
  }, []);

  return (
    <AnimatePage showPage={showPage} onExited={goBack} anim="move">
      <StyledSearch>
        <SearchBox newQuery={query} onSearch={onSearch} onBackButtonClick={handleBackButtonClick} />
      </StyledSearch>
    </AnimatePage>
  );
}

export default React.memo(Search);
