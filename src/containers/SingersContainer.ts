import { useCallback, useRef } from 'react';
import { createContainer } from 'unstated-next';
import { useImmer } from 'use-immer';

import { categoryTypes, alphaTypes } from 'constants/category';
import { getHotSingerListService, getSingerListService } from 'services';

export interface SingersImmerState {
  singerList: Data.SingerListItem[]; // 歌手列表
  enterLoading: boolean; // 控制进场 Loading
  pullUpLoading: boolean; // 控制上拉加载动画
  pullDownLoading: boolean; // 控制下拉加载动画
  listOffset: number; // 列表偏移量
}

export interface SingersParamsState {
  category: string; // 类别
  alpha: string; // 字母
}

export type SingersState = SingersImmerState & SingersParamsState;

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
  // 请求参数通过 ref 保存，便于修改完参数后同步发送请求时，能在请求函数中获取到修改后的参数值
  const paramsRef = useRef<SingersParamsState>({
    category: '',
    alpha: '',
  });
  const [singersState, updateSingersState] = useImmer<SingersImmerState>({
    singerList: [],
    enterLoading: true,
    pullUpLoading: false,
    pullDownLoading: false,
    listOffset: 0,
  });

  const refresh = useCallback(async () => {
    updateSingersState((state) => {
      state.listOffset = 0;
      state.pullDownLoading = true;
    });

    const category = paramsRef.current.category;
    const alpha = paramsRef.current.alpha;
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
  }, [updateSingersState]);

  const updateCategory = useCallback(
    (category: string) => {
      paramsRef.current.category = category;
      refresh();
    },
    [refresh],
  );

  const updateAlpha = useCallback(
    (alpha: string) => {
      paramsRef.current.alpha = alpha;
      refresh();
    },
    [refresh],
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

      const category = paramsRef.current.category;
      const alpha = paramsRef.current.alpha;
      const listOffset = singersState.listOffset;
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
    [singersState.listOffset, updateSingersState],
  );

  return {
    ...singersState,
    category: paramsRef.current.category,
    alpha: paramsRef.current.alpha,
    updateCategory,
    updateAlpha,
    getHotSingers,
    loadMore,
    refresh,
  };
}

const SingersContainer = createContainer(useSingers);

export default SingersContainer;

export { categoryTypes, alphaTypes };
