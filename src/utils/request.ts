import axios, { AxiosResponse } from "axios";

// axios实例
const instance = axios.create({
    // baseURL: "http://110.41.179.89/app",
    timeout: 10 * 1000
});

/**
 * 对返回体错误信息分类
 */
instance.interceptors.response.use(
    response => response,
    error => {
        const { response } = error;
        if (response) {
            const { status } = response;
            if (status >= 500) {
                // 服务端报错
            } else if (status === 400) {
                // 接口参数异常
            } else if (status === 401) {
                // 登陆信息过期，需要重新登陆
            } else {
                // 其它错误类型，统一按照接口报错处理
            }
        } else {
            // 网络异常
        }
        return Promise.reject(error);
    }
);

/**
 * 发起请求
 * @param url 请求地址
 * @param params 参数
 * @param method 请求类型
 */
export const request = (url: string, params: any, method: string): Promise<AxiosResponse<any, any>> => {
    if (method === "get") {
        return get(url, params);
    } else {
        return post(url, params);
    }
};

/**
 * 发起get请求
 * @param url 请求地址
 * @param params 参数
 */
export const get = (url: string, params: any): Promise<AxiosResponse<any, any>> => {
    return instance.get(url, {
        params: params
    });
};

/**
 * 发起post请求
 * @param url 请求地址
 * @param params 参数
 */
export const post = (url: string, params: any): Promise<AxiosResponse<any, any>> => {
    return instance.post(url, params);
};
