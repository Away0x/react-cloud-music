import { useCallback, useEffect } from 'react';
import { createContainer } from 'unstated-next';
import { useImmer } from 'use-immer';

import { PlayMode } from 'constants/player';
import { shuffle } from 'tools/utils';
import ThemeContainer from 'containers/ThemeContainer';

// 找到当前的歌曲索引
function findSongIndex(song: Data.SongListItem | null, list: Data.SongListItem[]) {
  if (!song) return 0;
  return list.findIndex((item) => song.id === item.id);
}

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
    (list: Data.SongListItem[], selectIndex = 0, isSequence = true) => {
      updatePlayerState((state) => {
        state.playList = list;
        state.currentIndex = selectIndex;
        state.currentSong = list.length ? list[selectIndex] : null;

        if (isSequence) {
          state.sequencePlayList = list;
        }
      });
    },
    [updatePlayerState],
  );

  const changePlayMode = useCallback(() => {
    const newMode = (playerState.mode + 1) % 3;

    if (newMode === PlayMode.sequence) {
      const index = findSongIndex(playerState.currentSong, playerState.sequencePlayList);
      changePlayList(playerState.sequencePlayList, index);
    } else if (newMode === PlayMode.loop) {
      const index = findSongIndex(playerState.currentSong, playerState.sequencePlayList);
      changePlayList(playerState.sequencePlayList, index);
    } else if (newMode === PlayMode.random) {
      const newList = shuffle(playerState.sequencePlayList);
      const index = findSongIndex(playerState.currentSong, newList);
      changePlayList(newList, index, false);
    }

    updatePlayerState((state) => {
      state.mode = newMode;
    });
  }, [playerState.mode, playerState.currentSong, playerState.sequencePlayList, changePlayList, updatePlayerState]);

  const deleteSong = useCallback(
    (index: number) => {
      const targetSong = JSON.parse(JSON.stringify(playerState.playList[index]));
      const seIndex = findSongIndex(targetSong, playerState.sequencePlayList);

      updatePlayerState((state) => {
        state.playList.splice(index, 1);
        state.sequencePlayList.splice(seIndex, 1);

        if (state.playList.length === 0) {
          state.currentIndex = 0;
          state.currentSong = null;
        } else {
          if (index <= state.currentIndex) {
            const newIndex = state.currentIndex - 1;
            state.currentIndex = newIndex <= 0 ? 0 : newIndex;
            state.currentSong = state.playList[newIndex] || null;
          }
        }
      });
    },
    [playerState.playList, playerState.sequencePlayList, updatePlayerState],
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
