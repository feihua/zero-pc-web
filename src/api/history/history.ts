import {get} from "../../utils/request";

/**
 * 获取商品分类
 */
export const queryHistoryList = () => {
    return get('/app/api/history/list', {});
};
