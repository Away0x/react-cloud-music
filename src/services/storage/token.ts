/* COMPONENT DOCUMENT
 * author: wutong
 * date: 2020/05/18
 * desc: token 存储
 */

import Storage from 'aw-easy-storage';

import { TOKEN_KEY } from 'config';
import Cookies from 'tools/cookie';

export class TokenStorage {
  public static readonly key = TOKEN_KEY;
  private static tokenStore: null | string = null; // 内存缓存

  private static storage = new Storage({
    session: true,
    hasMeta: false,
  });

  public static set(token: string) {
    Cookies.set(this.key, token);
    this.storage.setString(this.key, token);

    this.tokenStore = token; // 同步到内存
  }

  public static get(): string {
    if (this.tokenStore) {
      return this.tokenStore;
    }

    let tokenFromLocal = '';
    tokenFromLocal = Cookies.get(this.key);
    if (!tokenFromLocal) {
      tokenFromLocal = this.storage.getString(this.key) || '';
      Cookies.set(this.key, tokenFromLocal);
    }

    this.tokenStore = tokenFromLocal;
    return this.tokenStore || '';
  }

  public static clean() {
    Cookies.remove(this.key);
    this.storage.remove(this.key);
    this.tokenStore = null;
  }
}

(window as any).__TokenStorage = TokenStorage;
