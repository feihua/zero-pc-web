import {get} from "../../utils/request";

/**
 * 我的收藏
 */
export const queryCollectionList = () => {
    return get('/api/collection/list', {});
};
