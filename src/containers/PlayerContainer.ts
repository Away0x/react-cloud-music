import { useCallback, useEffect } from 'react';
import { createContainer } from 'unstated-next';
import { useImmer } from 'use-immer';

import { PlayMode } from 'constants/player';
import ThemeContainer from 'containers/ThemeContainer';

export interface PlayerState {
  mode: PlayMode; // 播放模式
  fullScreen: boolean; // 播放器是否为全屏模式
  playing: boolean; // 当前歌曲是否播放
  currentIndex: number; // 当前歌曲在播放列表的索引位置
  currentSong: null | Data.SongListItem;
  sequencePlayList: Data.SongListItem[]; // 顺序列表 (因为之后会有随机模式，列表会乱序，因从拿这个保存顺序列表)
  playList: Data.SongListItem[];
  speed: number; // 播放速度
}

interface PlayerComputedState {}

interface PlayerActions {
  /** 切换播放模式 */
  changePlayMode(): void;
  /** 切换播放器全屏显示 */
  changeFullScreen(status: boolean): void;
  /** 切换播放状态 */
  changePlaying(status: boolean): void;
  /** 切换歌曲 */
  changeCurrentSongIndex(index: number): void;
  /** 播放列表 */
  changePlayList(list: Data.SongListItem[], selectIndex?: number): void;
  /** 删除歌曲 */
  deleteSong(index: number): void;
  /** 修改播放速度 */
  changeSpeed(speed: number): void;
}

type UsePlayer = PlayerState & PlayerComputedState & PlayerActions;

function usePlayer(): UsePlayer {
  const { setPlayerPageBottom } = ThemeContainer.useContainer();

  const [playerState, updatePlayerState] = useImmer<PlayerState>({
    mode: PlayMode.sequence,
    fullScreen: false,
    playing: false,
    currentIndex: -1,
    sequencePlayList: [],
    playList: [],
    currentSong: null,
    speed: 1,
  });

  const changePlayMode = useCallback(() => {
    updatePlayerState((state) => {
      state.mode = (state.mode + 1) % 3;
    });
  }, [updatePlayerState]);

  const changeFullScreen = useCallback(
    (status: boolean) => {
      updatePlayerState((state) => {
        state.fullScreen = status;
      });
    },
    [updatePlayerState],
  );

  const changePlaying = useCallback(
    (status: boolean) => {
      updatePlayerState((state) => {
        state.playing = status;
      });
    },
    [updatePlayerState],
  );

  const changeCurrentSongIndex = useCallback(
    (songIndex: number) => {
      const song = playerState.playList[songIndex] || null;
      updatePlayerState((state) => {
        state.currentIndex = songIndex;
        state.currentSong = song;
      });
    },
    [playerState, updatePlayerState],
  );

  const changePlayList = useCallback(
    (list: Data.SongListItem[], selectIndex = 0) => {
      updatePlayerState((state) => {
        state.playList = list;
        state.currentIndex = selectIndex;
        state.currentSong = list.length ? list[selectIndex] : null;
      });
    },
    [updatePlayerState],
  );

  const deleteSong = useCallback(
    (index: number) => {
      updatePlayerState((state) => {
        state.playList.splice(index, 1);
        if (state.playList.length === 0) {
          state.currentIndex = 0;
          state.currentSong = null;
        }
      });
    },
    [updatePlayerState],
  );

  const changeSpeed = useCallback(
    (speed: number) => {
      updatePlayerState((state) => {
        state.speed = speed;
      });
    },
    [updatePlayerState],
  );

  useEffect(() => {
    setPlayerPageBottom(!!playerState.currentSong);
  }, [playerState.currentSong, setPlayerPageBottom]);

  return {
    ...playerState,
    changePlayMode,
    changeFullScreen,
    changePlaying,
    changeCurrentSongIndex,
    changePlayList,
    deleteSong,
    changeSpeed,
  };
}

const PlayerContainer = createContainer(usePlayer);

export default PlayerContainer;
