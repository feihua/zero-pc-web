import {get} from "../../utils/request";

/**
 * 我的关注
 */
export const queryFocusList = () => {
    return get('/api/member/attention/list', {});
};
