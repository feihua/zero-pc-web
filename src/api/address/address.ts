import {get} from "../../utils/request";

/**
 * 获取收货地址
 */
export const queryAddressList = () => {
    return get('/api/member/address/list', {});
};
