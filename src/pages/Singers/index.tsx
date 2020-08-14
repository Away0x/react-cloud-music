import React, { useCallback, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { forceCheck } from 'react-lazyload';
import { useMount } from 'ahooks';

import { SingersRoutePath } from 'constants/router';
import SingersContainer, { categoryTypes, alphaTypes } from 'containers/SingersContainer';
import HorizenList from 'components/HorizenList';
import SingerList from 'components/SingerList';
import Scroll, { ScrollerHandlers } from 'components/Scroll';
import { Loading } from 'components/Loading';

import StyledSingers, { NavContainer, ListContainer } from './style';

function Singers() {
  const history = useHistory();
  const {
    category,
    alpha,
    singerList,
    enterLoading,
    pullUpLoading,
    pullDownLoading,
    updateCategory,
    updateAlpha,
    getHotSingers,
    loadMore,
    refresh,
  } = SingersContainer.useContainer();
  const scrollRef = useRef<ScrollerHandlers | null>(null);

  const handleUpdateCatetory = useCallback(
    (item: Data.HorizenItem) => {
      if (category === item.key) return;
      updateCategory(item.key);
      scrollRef.current?.refresh();
    },
    [category, updateCategory],
  );

  const handleUpdateAlpha = useCallback(
    (item: Data.HorizenItem) => {
      if (alpha === item.key) return;
      updateAlpha(item.key);
      scrollRef.current?.refresh();
    },
    [alpha, updateAlpha],
  );

  const handlePullUp = useCallback(() => {
    loadMore();
  }, [loadMore]);

  const handlePullDown = useCallback(() => {
    refresh();
  }, [refresh]);

  const enterDetail = useCallback(
    (item: Data.SingerListItem) => {
      history.push(SingersRoutePath.buildDetailPath(item.id));
    },
    [history],
  );

  useMount(() => {
    if (!singerList.length && !category && !alpha) getHotSingers();
  });

  return (
    <StyledSingers>
      <NavContainer>
        <HorizenList title={'分类(默认热门):'} list={categoryTypes} onClick={handleUpdateCatetory} oldVal={category} />
        <HorizenList title={'首字母:'} list={alphaTypes} onClick={handleUpdateAlpha} oldVal={alpha} />
      </NavContainer>
      <ListContainer>
        <Scroll
          ref={scrollRef}
          onScroll={forceCheck}
          pullUpLoading={pullUpLoading}
          pullDownLoading={pullDownLoading}
          pullUp={handlePullUp}
          pullDown={handlePullDown}>
          <div>
            <SingerList list={singerList} onItemClick={enterDetail} />
          </div>
        </Scroll>
      </ListContainer>

      {enterLoading && <Loading full />}
    </StyledSingers>
  );
}

export default React.memo(Singers);
