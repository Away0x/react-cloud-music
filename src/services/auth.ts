import { commonHttpClient as client, ApiPrefix } from './common-http-client';

/** 登录 */
export async function loginService(
  username: string,
  password: string,
): Promise<Response.CommonApiResponse<Data.UserData | null>> {
  const result = await client.post({
    apiPrefix: ApiPrefix.AUTH,
    url: `/api-m/user/jxb-login`,
    data: { username, password },
    dontUpdateToken: true,
  });

  if (!result.status) {
    return { status: false, message: result.message || '登录失败', data: null };
  }

  if (!result.token) {
    return { status: false, message: 'Token not found!', data: null };
  }

  if (!result.data) {
    return { status: false, message: '用户数据有误', data: null };
  }

  return result;
}

/** 获取用户信息 */
export async function getUserService(): Promise<Response.CommonApiResponse<Data.UserData | null>> {
  const { status, message, data } = await client.get({
    apiPrefix: ApiPrefix.AUTH,
    url: `/api/user/efficiency-select-one`,
  });

  if (!status) {
    return { status: false, message: message || '获取用户信息失败', data: null };
  }

  if (!data || !data.userEntity) {
    return { status: false, message: '用户数据有误', data: null };
  }
  const user = data.userEntity;
  const realUser: Data.UserData = {
    usercode: user.usercode,
    userid: user.userid,
    username: user.username,
  };

  return {
    status,
    message,
    data: realUser,
  };
}
