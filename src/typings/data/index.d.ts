/* COMPONENT DOCUMENT
 * author: wutong
 * desc: 具体数据类型
 * date: 2020/08/11
 */

declare namespace Data {
  /** 用户数据 */
  export interface UserData {
    userid: number;
    username: string;
  }

  /** banner item */
  export interface BannerListItem {
    imageUrl: string;
  }

  /** 推荐列表 item */
  export interface RecommendListItem {
    id: number;
    picUrl: string;
    playCount: number;
    name: string;
  }

  /** Horizen item */
  export interface HorizenItem {
    key: string;
    name: string;
  }

  /** singer item */
  export interface SingerListItem {
    id: number;
    picUrl: string;
    name: string;
    accountId: number;
  }

  /** rank song item */
  export interface RankSongItem {
    first: string;
    second: string;
  }

  /** rank item */
  export interface RankListItem {
    id: number;
    name: string;
    coverImgId: string | number;
    coverImgUrl: string;
    updateFrequency: string;
    tracks: RankSongItem[];
  }

  /** album creator */
  export interface AlbumCreator {
    avatarUrl: string;
    nickname: string;
  }

  /** album detail */
  export interface AlbumDetail {
    id: number;
    name: string;
    coverImgUrl: string;
    subscribedCount: number;
    creator: AlbumCreator;
    tracks: SongListItem[];
  }

  /** 歌手信息 */
  export interface ArtistInfo {
    name: string;
    picUrl: string;
  }

  /** 歌曲列表 */
  export interface SongListItem {
    id: number;
    name: string;
    ar: { name: string }[];
    artists?: { name: string }[];
    al: { name: string };
    album?: { name: string };
  }

  export interface HotKeyWordItem {
    first: string;
  }

  export interface SuggestData {
    artists?: SingerListItem[];
    playlists?: AlbumListItem[];
  }
}
