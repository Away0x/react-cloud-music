import { createContainer } from 'unstated-next';
import { useImmer } from 'use-immer';

import { PlayMode } from 'constants/player';

export interface PlayerState {
  mode: PlayMode; // 播放模式
  fullScreen: boolean; // 播放器是否为全屏模式
  playing: boolean; // 当前歌曲是否播放
  currentIndex: number; // 当前歌曲在播放列表的索引位置
  showPlayList: boolean; // 是否展示播放列表
  sequencePlayList: any[]; // 顺序列表 (因为之后会有随机模式，列表会乱序，因从拿这个保存顺序列表)
  playList: any[];
  currentSong: null | any;
  speed: number; // 播放速度
}

interface PlayerComputedState {}

interface PlayerActions {
  /** 切换播放状态 */
  /** 切换播放器全屏显示 */
  /** 切换播放列表显示 */
  /** 切换歌曲 */
  /** 播放列表 */
  /** 修改播放速度 */
}

type UsePlayer = PlayerState & PlayerComputedState & PlayerActions;

function usePlayer(): UsePlayer {
  const [playerState] = useImmer<PlayerState>({
    mode: PlayMode.sequence,
    fullScreen: false,
    playing: false,
    currentIndex: -1,
    showPlayList: false,
    sequencePlayList: [],
    playList: [],
    currentSong: null,
    speed: 1,
  });

  return { ...playerState };
}

const PlayerContainer = createContainer(usePlayer);

export default PlayerContainer;
