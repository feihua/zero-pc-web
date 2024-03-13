import {get} from "../../utils/request";

/**
 * 获取购物车商品列表
 */
export const queryCartList = () => {
    return get('/api/cart/list', {});
};

/**
 * 添加商品进购物车
 */
export const addCartList = () => {
    return get('/api/cart/add', {});
};
