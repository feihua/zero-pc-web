import {get, post} from "../../utils/request";

export interface ILogin {
    mobile: string;
    password: string;
}

/**
 * 登录
 */
export const userLogin = (params: ILogin) => {
    return post('/api/member/login', params);
};

/**
 * 获取用户信息
 */
export const queryMemberInfo = () => {
    return get('/api/member/info', {});
};
