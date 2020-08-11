/* COMPONENT DOCUMENT
 * author: wutong
 * desc: 请求响应类型描述
 * date: 2020/08/11
 */

declare namespace Response {
  /** 接口通用响应类型 */
  export interface CommonRawApiResponse {
    readonly code: number; // 状态码
    readonly msg: string; // 信息
    readonly token?: string; // token
    readonly data: any; // 具体数据
  }

  /** 处理后的接口通用响应类型 */
  export interface CommonApiResponse<T = any> {
    status: boolean;
    message: string;
    data: T;
    token?: string;
  }

  /** 分页数据 */
  export interface CommonApiPageResponse {
    cur: number;
    line: number;
    total: number;
  }
}
