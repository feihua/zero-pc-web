import {get} from "../../utils/request";

/**
 * 获取首页信息
 */
export const queryHomeInfo = () => {
    return get('/api/home/index', {});
};
