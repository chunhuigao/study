import axios from 'axios'
import qs from 'qs'

//配置axios的默认URL
axios.defaults.baseURL = 'https://sales.yingyinglicai.com:8443/sales/init/loanMarketList.do';
//配置允许跨域携带cookie
axios.defaults.withCredentials = true;
//配置超时时间
axios.defaults.timeout = 30000;
//标识这是一个 ajax 请求
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

// http request 拦截器
axios.interceptors.request.use(

    config => {
		//在这里设置请求头与携带token信息
        // if (Cookies.get('user')) {
        //     config.headers.Authorization = Cookies.get('user');
        // }
        config.headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        };

        return config;
    },
    err => {
        return Promise.reject(err);
});

// http response 拦截器
axios.interceptors.response.use(
    response => {
		//网络超时在这里操作
        if (response.data.timeout) {

        }
        return response;
    },
    error => {

        if (error.response) {
            if (error.response.status === 404) {

            }
		}
        return Promise.reject(error);
});
export default axios