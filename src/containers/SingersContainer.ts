import { useCallback } from 'react';
import { createContainer } from 'unstated-next';
import { useImmer } from 'use-immer';

import { getHotSingerListService, getSingerListService } from 'services';

export interface SingersState {
  category: string; // 类别
  alpha: string; // 字母
  singerList: Data.SingerListItem[]; // 歌手列表
  enterLoading: boolean; // 控制进场 Loading
  pullUpLoading: boolean; // 控制上拉加载动画
  pullDownLoading: boolean; // 控制下拉加载动画
  listOffset: number; // 列表偏移量
}

interface SingersComputedState {}

interface SingersActions {
  /** 更改了 category */
  updateCategory: (newVal: string) => void;
  /** 更改了 alpha */
  updateAlpha: (newVal: string) => void;
  /** 加载热门歌手 */
  getHotSingers: () => Promise<void>;
  /** 上拉加载更多 */
  loadMore: (isHot?: boolean) => Promise<void>;
  /** 下拉刷新 */
  refresh: () => Promise<void>;
}

type UseSingers = SingersState & SingersComputedState & SingersActions;

function useSingers(): UseSingers {
  const [singersState, updateSingersState] = useImmer<SingersState>({
    category: '',
    alpha: '',
    singerList: [],
    enterLoading: true,
    pullUpLoading: false,
    pullDownLoading: false,
    listOffset: 0,
  });

  const updateCategory = useCallback(
    (category: string) => {
      updateSingersState((state) => {
        state.category = category;
      });
    },
    [updateSingersState],
  );

  const updateAlpha = useCallback(
    (alpha: string) => {
      updateSingersState((state) => {
        state.alpha = alpha;
      });
    },
    [updateSingersState],
  );

  const getHotSingers = useCallback(async () => {
    try {
      const list = await getHotSingerListService(0);

      updateSingersState((state) => {
        state.singerList = list;
        state.enterLoading = false;
        state.pullDownLoading = false;
        state.listOffset = list.length;
      });
    } catch (err) {
      console.warn('[useSingers#getHotSingers] error: ', err);
      updateSingersState((state) => {
        state.enterLoading = false;
        state.pullDownLoading = false;
      });
    }
  }, [updateSingersState]);

  const loadMore = useCallback(
    async (isHot = false) => {
      updateSingersState((state) => {
        state.pullUpLoading = true;
      });

      const { category, alpha, listOffset } = singersState;
      let list: Data.SingerListItem[] = [];

      try {
        if (isHot) {
          list = await getHotSingerListService(listOffset);
        } else {
          list = await getSingerListService(category, alpha, listOffset);
        }
      } catch (err) {
        console.warn('[useSingers#loadMore] error: ', err);
        updateSingersState((state) => {
          state.pullUpLoading = false;
        });
        return;
      }

      updateSingersState((state) => {
        const newList = state.singerList.concat(list);
        state.singerList = newList;
        state.pullUpLoading = false;
        state.listOffset = newList.length;
      });
    },
    [singersState, updateSingersState],
  );

  const refresh = useCallback(async () => {
    updateSingersState((state) => {
      state.listOffset = 0;
      state.pullDownLoading = true;
    });

    const { category, alpha } = singersState;
    let list: Data.SingerListItem[] = [];

    try {
      if (category === '' && alpha === '') {
        list = await getHotSingerListService(0);
      } else {
        list = await getSingerListService(category, alpha, 0);
      }
    } catch (err) {
      console.warn('[useSingers#refresh] error: ', err);
      updateSingersState((state) => {
        state.pullDownLoading = false;
      });
      return;
    }

    updateSingersState((state) => {
      state.singerList = list;
      state.pullDownLoading = false;
      state.listOffset = list.length;
    });
  }, [singersState, updateSingersState]);

  return { ...singersState, updateCategory, updateAlpha, getHotSingers, loadMore, refresh };
}

const SingersContainer = createContainer(useSingers);

export default SingersContainer;
