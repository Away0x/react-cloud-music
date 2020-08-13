import { useCallback } from 'react';
import { createContainer } from 'unstated-next';
import { useImmer } from 'use-immer';

import { getRankListService } from 'services';

export interface RankState {
  rankList: Data.RankListItem[];
  loading: boolean;
}

interface RankComputedState {}

interface RankActions {
  /** 加载排行榜数据 */
  getRankList: () => Promise<void>;
}

type UseRank = RankState & RankComputedState & RankActions;

function useRank(): UseRank {
  const [rankState, updateRankState] = useImmer<RankState>({
    rankList: [],
    loading: true,
  });

  const getRankList = useCallback(async () => {
    updateRankState((state) => {
      state.loading = true;
    });

    try {
      const list = await getRankListService();
      updateRankState((state) => {
        state.loading = false;
        state.rankList = list;
      });
    } catch (err) {
      console.warn('[useRank#getRankList] error: ', err);
      updateRankState((state) => {
        state.loading = false;
      });
    }
  }, [updateRankState]);

  return { ...rankState, getRankList };
}

const RankContainer = createContainer(useRank);

export default RankContainer;
