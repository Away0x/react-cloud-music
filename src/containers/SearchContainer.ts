import { useCallback } from 'react';
import { createContainer } from 'unstated-next';
import { useImmer } from 'use-immer';

import { getHotKeyWordsService, getSuggestListService, getResultSongsListService } from 'services';

export interface SearchState {
  hotList: Data.HotKeyWordItem[];
  suggestList: Data.SuggestData | null;
  songsList: Data.SongListItem[];
  loading: boolean;
}

interface SearchComputedState {}

interface SearchActions {
  getHotKeyWords: () => Promise<void>;
  getSuggestList: (query: string) => void;
}

type UseSearch = SearchState & SearchComputedState & SearchActions;

function useSearch(): UseSearch {
  const [searchState, updateSearchState] = useImmer<SearchState>({
    hotList: [],
    suggestList: null,
    songsList: [],
    loading: false,
  });

  const getHotKeyWords = useCallback(async () => {
    try {
      const data = await getHotKeyWordsService();
      updateSearchState((state) => {
        state.hotList = data;
      });
    } catch (err) {
      console.warn('[UseSearch#getHotKeyWords] error: ', err);
    }
  }, [updateSearchState]);

  const getSuggestList = useCallback(
    (query: string) => {
      updateSearchState((state) => {
        state.loading = true;
      });

      getSuggestListService(query)
        .then((data) => {
          updateSearchState((state) => {
            state.suggestList = data;
          });
        })
        .catch(catchFn);

      getResultSongsListService(query)
        .then((data) => {
          updateSearchState((state) => {
            state.songsList = data;
            state.loading = false;
          });
        })
        .catch(catchFn);

      function catchFn(err: any) {
        console.warn('[UseSearch#getSuggestList] error: ', err);
        updateSearchState((state) => {
          state.loading = false;
        });
      }
    },
    [updateSearchState],
  );

  return { ...searchState, getHotKeyWords, getSuggestList };
}

const SearchContainer = createContainer(useSearch);

export default SearchContainer;
