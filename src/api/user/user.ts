import {get} from "../../utils/request";

/**
 * 登录
 */
export const userLogin = () => {
    return get('/api/member/login', {});
};

/**
 * 获取用户信息
 */
export const queryMemberInfo = () => {
    return get('/api/member/info', {});
};
