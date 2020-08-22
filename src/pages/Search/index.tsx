import React, { useCallback, useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import SearchContainer from 'containers/SearchContainer';
import PlayerContainer from 'containers/PlayerContainer';
import SearchBox from 'components/SearchBox';
import SubPage, { SubPageHandlers } from 'components/SubPage';
import MusicNote, { MusicNoteHandlers } from 'components/MusicNote';

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
    getSongDetail,
  } = SearchContainer.useContainer();
  const { changePlayList } = PlayerContainer.useContainer();

  const subPageRef = useRef<SubPageHandlers>(null);
  const musicNoteRef = useRef<MusicNoteHandlers | null>(null);
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
    (ev: React.MouseEvent, songid: number) => {
      getSongDetail(songid).then((data) => {
        changePlayList(data || []);
      });

      if (!musicNoteRef.current) return;
      musicNoteRef.current.startAnimation({
        x: ev.nativeEvent.clientX,
        y: ev.nativeEvent.clientY,
      });
    },
    [changePlayList, getSongDetail],
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
      <MusicNote ref={musicNoteRef} />
    </SubPage>
  );
}

export default React.memo(Search);
