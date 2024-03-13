import {get} from "../../utils/request";

/**
 * 获取商品列表
 */
export const queryProductList = () => {
    return get('/api/product/queryProductList/', {});
};

/**
 * 商品详情
 */
export const queryProductDetail = () => {
    return get('/api/product/queryProduct/', {});
};
