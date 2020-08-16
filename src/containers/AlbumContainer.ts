import { createContainer } from 'unstated-next';
import { useImmer } from 'use-immer';
import { useCallback } from 'react';

import { getAlbumDetailService } from 'services';

export interface AlbumState {
  currentAlbum: Data.AlbumDetail | null;
  loading: boolean;
}

interface AlbumComputedState {}

interface AlbumActions {
  getAlbumList: (id: number) => Promise<void>;
}

type UseAlbum = AlbumState & AlbumComputedState & AlbumActions;

function useAlbum(): UseAlbum {
  const [albumState, updateAlbumState] = useImmer<AlbumState>({
    currentAlbum: null,
    loading: false,
  });

  const getAlbumList = useCallback(
    async (id: number) => {
      updateAlbumState((state) => {
        state.loading = true;
      });

      try {
        const data = await getAlbumDetailService(id);
        updateAlbumState((state) => {
          state.currentAlbum = data;
          state.loading = false;
        });
      } catch (err) {
        updateAlbumState((state) => {
          state.loading = false;
        });
      }
    },
    [updateAlbumState],
  );

  return { ...albumState, getAlbumList };
}

const AlbumContainer = createContainer(useAlbum);

export default AlbumContainer;
