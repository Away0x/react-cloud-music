import React, { useState } from 'react';

import SearchBox from '.';

export default {
  title: 'Components/SearchBox',
  component: SearchBox,
};

export const Default = () => {
  const [query, setQuery] = useState('');

  return (
    <SearchBox
      newQuery={query}
      onSearch={(q) => {
        console.log('search: ' + q);
        setQuery(q);
      }}
      onBackButtonClick={() => alert('back')}
    />
  );
};
