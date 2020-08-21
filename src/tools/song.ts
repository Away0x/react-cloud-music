// 处理歌手列表拼接歌手名字
export function getSingerName(list: { name: string }[]): string {
  let str = '';
  list.map((item, index) => {
    str += index === 0 ? item.name : '/' + item.name;
    return item;
  });
  return str;
}

export function getSongUrl(id: number) {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
}
