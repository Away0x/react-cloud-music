/* COMPONENT DOCUMENT
 * author: wutong
 * desc: 请求响应类型描述
 * date: 2020/08/11
 */

declare namespace Response {
  /** 处理后的接口通用响应类型 */
  export interface CommonApiResponse<T = any> {
    status: boolean;
    message: string;
    data: T;
  }

  /** 登录 */
  export interface Login {
    token: string;
    user: Data.UserData;
  }

  /** 获取歌手信息的响应类型 */
  export interface SingerInfoRequestResp {
    artist: Data.ArtistInfo;
    hotSongs: Data.HotSongInfo[];
    code: number;
  }
}
