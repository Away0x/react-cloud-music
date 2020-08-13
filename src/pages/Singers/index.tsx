import React, { useState, useCallback } from 'react';

import { categoryTypes, alphaTypes } from 'constants/category';
import HorizenList from 'components/HorizenList';

import StyledSingers, { NavContainer } from './style';

function Singers() {
  let [category, setCategory] = useState('');
  let [alpha, setAlpha] = useState('');

  let handleUpdateAlpha = useCallback((item: Data.HorizenItem) => {
    setAlpha(item.key);
  }, []);

  let handleUpdateCatetory = useCallback((item: Data.HorizenItem) => {
    setCategory(item.key);
  }, []);

  return (
    <StyledSingers>
      <NavContainer>
        <HorizenList title={'分类(默认热门):'} list={categoryTypes} onClick={handleUpdateCatetory} oldVal={category} />
        <HorizenList title={'首字母:'} list={alphaTypes} onClick={handleUpdateAlpha} oldVal={alpha} />
      </NavContainer>
    </StyledSingers>
  );
}

export default React.memo(Singers);
