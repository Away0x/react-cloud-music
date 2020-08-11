/* COMPONENT DOCUMENT
 * author: wutong
 * date: 2020/05/17
 * desc: 通用的 api client
 */

import { ApiResponseCode } from 'constants/http';
import { HTTPClient, RequestConfig } from 'tools/http-client';
import { TokenStorage } from 'services/storage/token';
import { emitLogoutAuthEvent, emitUpdateTokenAuthEvent } from 'events/auth';
import { API_ROOT } from 'config';
import MOCK_DATA from 'services/mock';

export enum ApiPrefix {
  AUTH = '/auth',
}

interface CommonRequestConfig extends RequestConfig {
  apiPrefix?: ApiPrefix;
  hideGlobalErrorToast?: boolean; // 隐藏全局 error toast
  dontUpdateToken?: boolean; // 是否需要自动更新 token (如果接口有返回 token 的话)
  mock?: boolean; // 是否使用 mock 数据
}

export const commonHttpClient = new HTTPClient<CommonRequestConfig, Response.CommonApiResponse>(
  {
    baseURL: API_ROOT,
    timeout: 1000 * 25,
    timeoutErrorMessage: '请求超时',
  },
  // 处理响应
  (requestConfig, response) => {
    const data = (response.data || {}) as Response.CommonRawApiResponse;

    if (data.code === ApiResponseCode.TOKEN_ERROR) {
      console.warn('用户未登录', response);
      if (!requestConfig.hideGlobalErrorToast) {
        alert(data.msg || '用户未登录');
      }

      emitLogoutAuthEvent(); // 退出
      return { status: false, message: '用户未登录', data: null };
    }

    if (data.code === ApiResponseCode.UNKNOWN) {
      console.warn('网络错误', response);
      if (!requestConfig.hideGlobalErrorToast) {
        alert(data.msg || '网络错误');
      }
      return { status: false, message: data.msg || '网络错误', data: null };
    }

    if (data.token && !requestConfig.dontUpdateToken) {
      emitUpdateTokenAuthEvent(data.token); // 更新 token
    }

    return {
      status: data.code === ApiResponseCode.OK,
      message: data.msg,
      data: data.data,
      token: data.token,
    };
  },
  // 错误处理
  (requestConfig, err) => {
    console.log(err);
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
    const token = TokenStorage.get();

    if (requestConfig.apiPrefix) {
      requestConfig.url = requestConfig.apiPrefix + requestConfig.url;
    }

    if (token) {
      requestConfig.params = Object.assign({}, requestConfig.params, { token });
    }

    if (requestConfig.mock) {
      requestConfig.mockCallback = mockCallback;
    }

    return requestConfig;
  },
);

function mockCallback(config: RequestConfig): Response.CommonApiResponse {
  const key = config.url || '';
  const mockData = MOCK_DATA[key];

  if (!mockData) {
    const msg = `[mockCallback] mock data(${mockCallback}) not found`;
    console.error(msg);
    return {
      status: false,
      message: msg,
      data: null,
    };
  }

  return {
    status: true,
    message: '',
    data: {},
  };
}
