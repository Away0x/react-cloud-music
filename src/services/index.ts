import { commonHttpClient as client } from './common-http-client';

/** 登录 */
export async function loginService(
  username: string,
  password: string,
): Promise<Response.CommonApiResponse<Response.Login>> {
  const result = await client.post({
    url: '/login',
    mock: true,
    data: { username, password },
  });

  return result;
}

/** 获取用户信息 */
export async function getUserService(): Promise<Response.CommonApiResponse<Data.UserData | null>> {
  const result = await client.get({
    url: '/get-user',
    mock: true,
  });

  return result;
}

/** 获取 banner 数据 */
export async function getBannerService(): Promise<Data.BannerListItem[]> {
  const result = await client.get({
    url: '/banner',
  });

  return result.data?.banners || [];
}

/** 获取推荐列表 */
export async function getRecommendListService(): Promise<Data.RecommendListItem[]> {
  const result = await client.get({
    url: '/personalized',
  });

  return result.data?.result || [];
}

/** 获取热门歌手列表 */
export async function getHotSingerListService(count: number): Promise<Data.SingerListItem[]> {
  const result = await client.get({
    url: '/top/artists',
    params: {
      offset: count,
    },
  });

  return result.data?.artists || [];
}

/** 获取歌手列表 */
export async function getSingerListService(
  category: string,
  alpha: string,
  count: number,
): Promise<Data.SingerListItem[]> {
  const params: any = {
    initial: alpha.toLowerCase(),
    offset: count,
  };

  if (category && category.indexOf('|')) {
    const arr = category.split('|');
    params.area = arr[0];
    params.type = arr[1];
  }

  const result = await client.get({
    url: '/artist/list',
    params,
  });

  return result.data?.artists || [];
}

/** 获取排行榜列表 */
export async function getRankListService(): Promise<Data.RankListItem[]> {
  const result = await client.get({
    url: '/toplist/detail',
  });

  return result.data?.list || [];
}

/** 获取排榜单详情列表 */
export async function getAlbumDetailService(id: number): Promise<Data.AlbumDetail | null> {
  const result = await client.get({
    url: '/playlist/detail',
    params: {
      id,
    },
  });

  return result.data?.playlist || null;
}

/** 获取歌手详情 */
export async function getSingerInfoService(id: number): Promise<Response.SingerInfoRequestResp | null> {
  const result = await client.get({
    url: '/artists',
    params: {
      id,
    },
  });

  return result.data;
}

/** 获取热搜关键字 */
export async function getHotKeyWordsService(): Promise<Data.HotKeyWordItem[]> {
  const result = await client.get({
    url: '/search/hot',
  });

  return result.data?.result?.hots || [];
}

/** 关键字获取推荐列表 */
export async function getSuggestListService(query: string): Promise<Data.SuggestData | null> {
  const result = await client.get({
    url: '/search/suggest',
    params: {
      keywords: query,
    },
  });

  return result.data?.result || null;
}

/** 关键字获取歌曲列表 */
export async function getResultSongsListService(query: string): Promise<Data.SongListItem[]> {
  const result = await client.get({
    url: '/search',
    params: {
      keywords: query,
    },
  });

  return result.data?.result?.songs || [];
}

/** 获取歌曲详情 */
export async function getSongDetailRequestService(...ids: number[]): Promise<Data.SongListItem[]> {
  const result = await client.get({
    url: '/song/detail',
    params: {
      ids: ids.join(','),
    },
  });

  return result.data?.songs || [];
}

/** 获取歌词 */
export async function getLyricService(id: number): Promise<any> {
  const result = await client.get({
    url: '/lyric',
    params: { id },
  });

  return result;
}
