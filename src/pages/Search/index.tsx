import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { forceCheck } from 'react-lazyload';
import { useRequest } from 'ahooks';

import SearchBox from 'components/SearchBox';
import AnimatePage from 'components/AnimatePage';
import Scroll from 'components/Scroll';
import { Loading } from 'components/Loading';
import {
  getHotKeyWordsService,
  // getSuggestListService,
  // getResultSongsListService
} from 'services';

import StyledSearch, { ShortcutWrapper, HotKey } from './style';

function Search() {
  const history = useHistory();

  const [showPage, setShowPage] = useState(true);
  const [query, setQuery] = useState('');

  const { loading, data: hotKeyList } = useRequest(getHotKeyWordsService, {
    loadingDelay: 300,
  });

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
        {/* 热门搜索 */}
        <ShortcutWrapper show={!query}>
          <Scroll>
            <HotKey>
              <h1>热门搜索</h1>
              <ul>
                {hotKeyList &&
                  hotKeyList.map((item) => {
                    return (
                      <li key={item.first} onClick={() => setQuery(item.first)}>
                        <span>{item.first}</span>
                      </li>
                    );
                  })}
              </ul>
            </HotKey>
          </Scroll>
        </ShortcutWrapper>
        {/* 搜索结果 */}
        <ShortcutWrapper show={!!query}>
          <Scroll onScroll={forceCheck}>
            <div></div>
          </Scroll>
        </ShortcutWrapper>

        {loading && <Loading full />}
      </StyledSearch>
    </AnimatePage>
  );
}

export default React.memo(Search);
