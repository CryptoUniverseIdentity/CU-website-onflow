import axios from 'axios';
import { SUPPORT_NET } from '../constant';
axios.defaults.baseURL = SUPPORT_NET === 'Rinkeby' ? 'https://rinkeby-api.opensea.io' : 'https://api.opensea.io'; 

axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response.data;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default axios;