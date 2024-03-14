import {get, post} from "../../utils/request";

/**
 * 注册参数
 */
export interface IRegister {
    username: string;
    mobile: string;
    password: string;
    confirmPassword: string;
}

/**
 * 用户注册
 */
export const userRegister = (params: IRegister) => {
    return post('/api/member/register', params);
};


export interface ILogin {
    account: string;
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
