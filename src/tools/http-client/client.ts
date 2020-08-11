import Axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import qs from 'qs';

type ErrorResp<T = any> = {
  resolved: boolean;
  result: T;
};

export interface RequestConfig extends AxiosRequestConfig {
  json?: boolean;
  formData?: boolean;
  mockCallback?: (config: RequestConfig) => any;
}

const JSON_CONTENT_TYPE = { 'Content-Type': 'application/json;charset=UTF-8' };
const FORMDATA_CONTENT_TYPE = {
  'Content-Type': 'multipart/form-data;charset=UTF-8',
};

export class HTTPClient<Req extends RequestConfig = RequestConfig, Resp = any> {
  private axiosInstance: AxiosInstance;
  private baseURL?: string;

  constructor(
    options: RequestConfig,
    // 处理响应
    private responseResolve: (requestConfig: Req, response: any) => Resp,
    // 错误处理
    private errorResolve: (requestConfig?: Req | null, err?: any) => Resp,
    // 请求参数处理
    private requestResolve?: (requestConfig: Req) => Req,
  ) {
    this.baseURL = options.baseURL;
    this.axiosInstance = Axios.create(options);

    this.axiosInstance.interceptors.request.use(
      (config: RequestConfig) => {
        return config;
      },
      (error: any) => {
        return {
          resolved: true,
          result: this.errorResolve(null, error),
        } as ErrorResp<Resp>;
      },
    );

    this.axiosInstance.interceptors.response.use(
      (response: any) => {
        return response;
      },
      (error: any) => {
        return {
          resolved: true,
          result: this.errorResolve(null, error),
        } as ErrorResp<Resp>;
      },
    );
  }

  private async request(config: Req): Promise<Resp> {
    let _config = config;

    if (!_config.baseURL && this.baseURL) {
      _config.baseURL = this.baseURL;
    }

    if (this.requestResolve) {
      _config = this.requestResolve(_config);
    }

    try {
      if (_config.method === 'POST') {
        if (!_config.data) _config.data = {};

        if (_config.formData) {
          const form = new FormData();

          for (const key in _config.data) {
            if (_config.data.hasOwnProperty(key)) {
              const val = _config.data[key];
              form.append(key, val);
            }
          }

          _config.data = form;
          _config.headers = Object.assign({}, _config.headers, FORMDATA_CONTENT_TYPE);
        } else {
          if (!_config.json) {
            _config.data = qs.stringify(_config.data);
          } else {
            _config.headers = Object.assign({}, _config.headers, JSON_CONTENT_TYPE);
          }
        }
      }

      if (_config.mockCallback) {
        return _config.mockCallback(_config);
      }

      const result = await this.axiosInstance(_config);

      if ((result as any).resolved) {
        return (result as any).result;
      }

      return this.responseResolve(_config, result);
    } catch (err) {
      console.warn(`[HTTPClient] `, err);
      return this.errorResolve(_config, err);
    }
  }

  public updateBaseURL(baseURL: string) {
    this.baseURL = baseURL;
  }

  public get(config: Req) {
    return this.request(Object.assign({}, config, { method: 'GET' }));
  }

  public post(config: Req) {
    return this.request(Object.assign({}, config, { method: 'POST' }));
  }
}
