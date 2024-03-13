import {get} from "../../utils/request";

/**
 * 优惠券
 */
export const queryCouponList = () => {
    return get('/api/member/coupon/list/', {});
};
