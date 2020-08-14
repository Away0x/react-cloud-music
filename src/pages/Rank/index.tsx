import React, { useCallback, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { useMount } from 'ahooks';

import { RankRoutePath } from 'constants/router';
import RankContainer from 'containers/RankContainer';
import Scroll from 'components/Scroll';
import { Loading } from 'components/Loading';
import RankList from 'components/RankList';

import StyledRank, { Title } from './style';

//处理数据，找出第一个没有歌名的排行榜的索引
function getGlobalStartIndex(list: Data.RankListItem[]) {
  for (let i = 0; i < list.length - 1; i++) {
    if (list[i].tracks.length && !list[i + 1].tracks.length) {
      return i + 1;
    }
  }
}

function Rank() {
  const history = useHistory();
  const { loading, rankList, getRankList } = RankContainer.useContainer();

  const listMap = useMemo(() => {
    const globalStartIndex = getGlobalStartIndex(rankList);

    return {
      official: rankList.slice(0, globalStartIndex),
      global: rankList.slice(globalStartIndex),
    };
  }, [rankList]);

  const enterDetail = useCallback(
    (item: Data.RankListItem) => {
      history.push(RankRoutePath.buildDetailPath(item.id));
    },
    [history],
  );

  useMount(() => {
    if (!rankList.length) getRankList();
  });

  return (
    <StyledRank>
      <Scroll>
        <div>
          <Title show={!loading}>官方榜</Title>
          <RankList list={listMap.official} onItemClick={enterDetail} />
          <Title show={!loading}>全球榜</Title>
          <RankList global list={listMap.global} onItemClick={enterDetail} />
          {loading && <Loading full />}
        </div>
      </Scroll>
    </StyledRank>
  );
}

export default React.memo(Rank);
