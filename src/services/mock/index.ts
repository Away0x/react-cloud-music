import { CommonRequestConfig } from 'services/common-http-client';

interface MockData {
  [k: string]: any;
}

const mockData: MockData = {
  /** 登录 */
  '/login': (config: CommonRequestConfig): Response.Login => {
    return {
      token: `mocktoken${config.data.password}`,
      user: {
        userid: 1,
        username: config.data.username,
      },
    };
  },
  /** 获取用户信息 */
  '/get-user': {
    userid: 1,
    username: 'Away0x',
  } as Data.UserData,
};

export default mockData;
