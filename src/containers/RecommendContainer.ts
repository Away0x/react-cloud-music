import { useMemo, useCallback } from 'react';
import { createContainer } from 'unstated-next';
import { useImmer } from 'use-immer';

import { getBannerService, getRecommendListService } from 'services';

export interface RecommendState {
  bannerList: Data.BannerListItem[];
  recommendList: Data.RecommendListItem[];
  loading: boolean;
}

export interface RecommendComputedState {
  bannerImages: string[];
}

interface RecommendActions {
  getBannerList(): Promise<void>;
  getRecommendList(): Promise<void>;
}

type UseRecommend = RecommendState & RecommendComputedState & RecommendActions;

function useRecommend(): UseRecommend {
  const [recommendState, updateRecommendState] = useImmer<RecommendState>({
    loading: true,
    bannerList: [],
    recommendList: [],
  });

  const bannerImages = useMemo(() => {
    return recommendState.bannerList.map((b) => b.imageUrl);
  }, [recommendState.bannerList]);

  const getBannerList = useCallback(async () => {
    try {
      const result = await getBannerService();

      updateRecommendState((state) => {
        state.loading = false;
        state.bannerList = result;
      });
    } catch (err) {
      console.warn('[useRecommend#getBannerList] error: ', err);
      updateRecommendState((state) => {
        state.loading = false;
      });
    }
  }, [updateRecommendState]);

  const getRecommendList = useCallback(async () => {
    try {
      const result = await getRecommendListService();

      updateRecommendState((state) => {
        state.loading = false;
        state.recommendList = result;
      });
    } catch (err) {
      console.warn('[useRecommend#getRecommendList] error: ', err);
      updateRecommendState((state) => {
        state.loading = false;
      });
    }
  }, [updateRecommendState]);

  return { ...recommendState, bannerImages, getBannerList, getRecommendList };
}

const RecommendContainer = createContainer(useRecommend);

export default RecommendContainer;
