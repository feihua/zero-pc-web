import {get} from "../../utils/request";

/**
 * 获取品牌列表
 */
export const queryBrandList = () => {
    return get('/api/brand/list', {});
};

/**
 * 品牌详情
 */
export const queryBrandDetail = () => {
    return get('/api/brand/detail/', {});
};
