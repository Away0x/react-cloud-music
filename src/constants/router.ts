/** 推荐页的 path */
export class RecommondRoutePath {
  public static Root = '/recommend';

  public static Detail = `${RecommondRoutePath.Root}/:id`;
  public static buildDetailPath(id: number): string {
    return this.Detail.replace(':id', String(id));
  }
}

/** 歌手页的 path */
export class SingersRoutePath {
  public static Root = '/singers';

  public static Detail = `${SingersRoutePath.Root}/:id`;
  public static buildDetailPath(id: number): string {
    return this.Detail.replace(':id', String(id));
  }
}

/** 排行榜页的 path */
export class RankRoutePath {
  public static Root = '/rank';

  public static Detail = `${RankRoutePath.Root}/:id`;
  public static buildDetailPath(id: number): string {
    return this.Detail.replace(':id', String(id));
  }
}

/** 搜索页的 path */
export class SearchRoutePath {
  public static Root = '/search';
}

/** 特殊页面的 path */
export class SpecialRoutePath {
  public static Root = '/';
  public static Login = '/login';
  public static Any = '*';
}
