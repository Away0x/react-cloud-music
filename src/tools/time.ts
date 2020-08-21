//转换歌曲播放时间
export function formatPlayTime(interval: number) {
  interval = interval | 0;
  const minute = (interval / 60) | 0;
  const second = (interval % 60).toString().padStart(2, '0');
  return `${minute}:${second}`;
}
