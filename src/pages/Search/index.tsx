import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';

import SearchContainer from 'containers/SearchContainer';
import SearchBox from 'components/SearchBox';
import AnimatePage from 'components/AnimatePage';
import { Loading } from 'components/Loading';

import StyledSearch from './style';
import HotKeyList from './HotKeyList';
import ResultList from './ResultList';
import { useMount } from 'ahooks';

function Search() {
  const history = useHistory();
  const { loading, hotList, suggestList, songsList, getHotKeyWords, getSuggestList } = SearchContainer.useContainer();

  const [showPage, setShowPage] = useState(true);
  const [query, setQuery] = useState('');

  const handleBackButtonClick = useCallback(() => {
    setShowPage(false);
  }, []);

  const goBack = useCallback(() => {
    history.goBack();
  }, [history]);

  const onSearch = useCallback(
    (q: string) => {
      setQuery(q);
      if (!q) return;
      getSuggestList(q);
    },
    [getSuggestList],
  );

  const enterDetail = useCallback(
    (path: string) => {
      history.push(path);
    },
    [history],
  );

  const handleHotKeyItemClick = useCallback((q: string) => {
    setQuery(q);
  }, []);

  useMount(() => {
    if (!hotList.length) getHotKeyWords();
  });

  return (
    <AnimatePage showPage={showPage} onExited={goBack} anim="move">
      <StyledSearch>
        <SearchBox newQuery={query} onSearch={onSearch} onBackButtonClick={handleBackButtonClick} />
        {/* 热门搜索 */}
        <HotKeyList show={!query} list={hotList} onItemClick={handleHotKeyItemClick} />
        {/* 搜索结果 */}
        <ResultList show={!!query} suggestList={suggestList} songsList={songsList} onItemClick={enterDetail} />
        {loading && <Loading full />}
      </StyledSearch>
    </AnimatePage>
  );
}

export default React.memo(Search);
