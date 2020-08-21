// 播放模式
export enum PlayMode {
  sequence = 0,
  loop = 1,
  random = 2,
}

export const getPlayModeText = (mode: PlayMode) => {
  let text = '顺序循环';
  switch (mode) {
    case PlayMode.sequence:
      text = '顺序循环';
      break;
    case PlayMode.loop:
      text = '单曲循环';
      break;
    case PlayMode.random:
      text = '随机播放';
      break;
  }
  return text;
};

export function getPlayModeIcon(mode: PlayMode) {
  let content;
  if (mode === PlayMode.sequence) {
    content = '&#xe625;';
  } else if (mode === PlayMode.loop) {
    content = '&#xe653;';
  } else {
    content = '&#xe61b;';
  }
  return content;
}
