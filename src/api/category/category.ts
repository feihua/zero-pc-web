import {get} from "../../utils/request";

/**
 * 获取商品分类
 */
export const queryCategoryList = () => {
    return get('/api/category/queryProductCateList', {});
};
