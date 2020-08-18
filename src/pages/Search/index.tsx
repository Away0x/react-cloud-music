import React, { useCallback, useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import SearchContainer from 'containers/SearchContainer';
import SearchBox from 'components/SearchBox';
import SubPage, { SubPageHandlers } from 'components/SubPage';
import { Loading } from 'components/Loading';

import StyledSearch from './style';
import HotKeyList from './HotKeyList';
import ResultList from './ResultList';
import { useMount } from 'ahooks';

function Search() {
  const history = useHistory();
  const { loading, hotList, suggestList, songsList, getHotKeyWords, getSuggestList } = SearchContainer.useContainer();

  const subPageRef = useRef<SubPageHandlers>(null);
  const [query, setQuery] = useState('');

  const onSearch = useCallback(
    (q: string) => {
      setQuery(q);
      if (!q) return;
      getSuggestList(q);
    },
    [getSuggestList],
  );

  const closePage = useCallback(() => {
    if (!subPageRef.current) return;
    subPageRef.current.close();
  }, []);

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
    <SubPage
      ref={subPageRef}
      anim="move"
      header={<SearchBox newQuery={query} onSearch={onSearch} onBackButtonClick={closePage} />}>
      <StyledSearch>
        {/* 热门搜索 */}
        <HotKeyList show={!query} list={hotList} onItemClick={handleHotKeyItemClick} />
        {/* 搜索结果 */}
        <ResultList show={!!query} suggestList={suggestList} songsList={songsList} onItemClick={enterDetail} />
        {loading && <Loading full />}
      </StyledSearch>
    </SubPage>
  );
}

export default React.memo(Search);
