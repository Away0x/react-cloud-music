/* COMPONENT DOCUMENT
 * author: wutong
 * date: 2020/08/18
 * desc: 搜索历史存储
 */

import Storage from 'aw-easy-storage';

import { LOCALSTROAGE_PREFIX } from 'config';

export default class SearchHistoryStorage {
  private static readonly key = `${LOCALSTROAGE_PREFIX}searchhistory`;
  private static storage = new Storage({
    hasMeta: false,
  });
  private static MAX_LENGTH = 20;
  private static tempStore: string[] | null = null;

  public static get(): string[] {
    if (this.tempStore) return this.tempStore;

    const str = this.storage.getString(this.key) || '';
    const data = str.split(',').filter((s) => !!s);

    this.tempStore = data;
    return data;
  }

  public static set(keyword: string): string[] {
    keyword = keyword.trim();
    let list = this.get();
    if (!keyword) return list;

    const index = list.indexOf(keyword);
    if (index !== -1) {
      list.splice(index, 1);
    }
    list.unshift(keyword);

    if (list.length > this.MAX_LENGTH) list = list.slice(0, this.MAX_LENGTH);

    this.tempStore = [...list];
    this.storage.setString(this.key, list.join(','));

    return this.tempStore;
  }

  public static remove(keyword: string): string[] {
    const list = this.get();
    const index = list.indexOf(keyword);
    if (index !== -1) {
      list.splice(index, 1);
    }

    this.tempStore = [...list];
    this.storage.setString(this.key, list.join(','));

    return this.tempStore;
  }

  public static clean() {
    this.storage.remove(this.key);
    this.tempStore = null;
  }
}
