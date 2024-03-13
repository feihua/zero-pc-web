import {get} from "../../utils/request";

/**
 * 订单列表
 */
export const queryOrderList = () => {
    return get('/api/order/orderList/', {});
};

/**
 * 订单详情
 */
export const queryOrderDetail = () => {
    return get('/api/order/orderDetail/', {});
};
