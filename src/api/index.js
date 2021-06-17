import axios from '../utils/http';

export function getOrder(params) {
    return axios.request({
        url: '/wyvern/v1/orders',
        params: params
    })
}

export function getNftById(url) {
    return axios.request({
        url: 'https://rinkeby-api.opensea.io/api/v1/asset' + url
    })
}

export function getNftInfo(url) {
    return axios.request({
        url: url
    })
}