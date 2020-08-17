import React, { useRef, useState, useEffect, useCallback } from 'react';
import { useDebounceFn } from 'ahooks';

import StyledSearchBox, { IconBack, IconDelete, InputBox } from './style';

interface SearchBoxProps {
  newQuery: string;
  onSearch?: (q: string) => void;
  onBackButtonClick?: () => void;
}

function SearchBox({ newQuery, onSearch, onBackButtonClick }: SearchBoxProps) {
  const queryInputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState('');

  const { run: onSearchDebounce } = useDebounceFn(
    (q: string) => {
      onSearch && onSearch(q);
    },
    {
      wait: 500,
    },
  );

  const handleChange = useCallback((ev: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(ev.currentTarget.value);
  }, []);

  const clearQuery = useCallback(() => {
    if (!queryInputRef.current) return;
    setQuery('');
    queryInputRef.current.value = '';
    queryInputRef.current.focus();
  }, []);

  useEffect(() => {
    if (!queryInputRef.current) return;
    queryInputRef.current.focus();
  }, []);

  useEffect(() => {
    if (!queryInputRef.current) return;

    let curQuery = query;
    if (newQuery !== query) {
      curQuery = newQuery;
      queryInputRef.current.value = newQuery;
    }
    setQuery(curQuery);
    // eslint-disable-next-line
  }, [newQuery]);

  useEffect(() => {
    onSearchDebounce(query);
    // eslint-disable-next-line
  }, [query]);

  return (
    <StyledSearchBox>
      <IconBack className="iconfont" onClick={() => onBackButtonClick && onBackButtonClick()}>
        &#xe655;
      </IconBack>
      <InputBox ref={queryInputRef} placeholder="搜索歌曲、歌手、专辑" onChange={handleChange} />
      <IconDelete hide={!query} className="iconfont" onClick={clearQuery}>
        &#xe600;
      </IconDelete>
    </StyledSearchBox>
  );
}

export default React.memo(SearchBox);
