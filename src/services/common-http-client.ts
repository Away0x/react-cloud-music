/* COMPONENT DOCUMENT
 * author: wutong
 * date: 2020/05/17
 * desc: 通用的 api client
 */

import { HTTPClient, RequestConfig } from 'tools/http-client';
import { API_ROOT } from 'config';
import MOCK_DATA from 'services/mock';

export interface CommonRequestConfig extends RequestConfig {
  hideGlobalErrorToast?: boolean; // 隐藏全局 error toast
  mock?: boolean; // 是否使用 mock 数据
}

export const commonHttpClient = new HTTPClient<CommonRequestConfig, Response.CommonApiResponse>(
  {
    baseURL: API_ROOT,
    timeout: 1000 * 25,
  },
  // 处理响应
  (_, response) => {
    return {
      status: true,
      message: '',
      data: response.data,
    };
  },
  // 错误处理
  (requestConfig, err) => {
    console.error(err);
    const errMsg = '网络连接异常，请稍后重试';

    if (requestConfig) {
      if (!requestConfig.hideGlobalErrorToast) {
        alert(errMsg);
      }
    }

    return {
      status: false,
      message: errMsg,
      data: null,
    };
  },
  // 请求参数处理
  (requestConfig) => {
    if (requestConfig.mock) {
      requestConfig.mockCallback = mockCallback;
    }

    return requestConfig;
  },
);

function mockCallback(config: CommonRequestConfig): Response.CommonApiResponse {
  const key = config.url || '';
  let mockData = MOCK_DATA[key];

  if (!mockData) {
    const msg = `[mockCallback] mock data(${mockCallback}) not found`;
    console.error(msg);
    return {
      status: false,
      message: msg,
      data: null,
    };
  }

  if (typeof mockData === 'function') {
    mockData = mockData(config);
  }

  return {
    status: true,
    message: '',
    data: mockData,
  };
}
