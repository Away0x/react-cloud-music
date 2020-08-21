import React, { useCallback, useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import SearchContainer from 'containers/SearchContainer';
import PlayerContainer from 'containers/PlayerContainer';
import SearchBox from 'components/SearchBox';
import SubPage, { SubPageHandlers } from 'components/SubPage';
import { getSongDetailRequestService } from 'services';

import StyledSearch from './style';
import HotKeyList from './HotKeyList';
import ResultList from './ResultList';
import { useMount } from 'ahooks';

function Search() {
  const history = useHistory();
  const {
    loading,
    hotList,
    suggestList,
    songsList,
    historyList,
    getHotKeyWords,
    getSuggestList,
    deleteHistory,
    cleanHistory,
  } = SearchContainer.useContainer();
  const { changePlayList, changeCurrentSongIndex } = PlayerContainer.useContainer();

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

  const handleSelectSong = useCallback(
    (songid: number) => {
      getSongDetailRequestService(songid).then((data) => {
        changePlayList(data || []);
        changeCurrentSongIndex(0);
      });
    },
    [changePlayList, changeCurrentSongIndex],
  );

  useMount(() => {
    if (!hotList.length) getHotKeyWords();
  });

  return (
    <SubPage
      ref={subPageRef}
      anim="move"
      loading={loading}
      header={<SearchBox newQuery={query} onSearch={onSearch} onBackButtonClick={closePage} />}>
      <StyledSearch>
        {/* 热门搜索 */}
        <HotKeyList
          show={!query}
          list={hotList}
          historyList={historyList}
          onItemClick={handleHotKeyItemClick}
          onDeleteHistory={deleteHistory}
          onCleanHistory={cleanHistory}
        />
        {/* 搜索结果 */}
        <ResultList
          show={!!query}
          suggestList={suggestList}
          songsList={songsList}
          onItemClick={enterDetail}
          onSongItemClick={handleSelectSong}
        />
      </StyledSearch>
    </SubPage>
  );
}

export default React.memo(Search);
