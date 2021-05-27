import axios from '../utils/http';

export function getOrder(params) {
    return axios.request({
        url: '/wyvern/v1/orders',
        params: params
    })
}