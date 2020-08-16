// 处理歌手列表拼接歌手名字
export function getSingerName(list: { name: string }[]): string {
  let str = '';
  list.map((item, index) => {
    str += index === 0 ? item.name : '/' + item.name;
    return item;
  });
  return str;
}
