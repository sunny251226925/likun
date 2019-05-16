import axios from 'axios'

axios.defaults.withCredentials = true; //跨域允许传递 cookie
axios.defaults.timeout = 10000; // 请求超时

axios.interceptors.request.use( config => {
    config.headers["Content-Type"] = "application/json";
    return config;
})

axios.interceptors.response.use( response => {
    // if (response.status >= 200 && response.status <= 300) {
    //     return response;
    // } else {
    //     return response;
    // }
    console.log(response);
}, error => {
    // 对响应错误做点什么
    return Promise.reject(error);
})

export function get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        }).then(res => {
            if(res){
                resolve(res.data)
            } else {
                resolve(res);
            }
        }).catch(err => {
            reject(err)
        })
    })
}

export function post(url, data) {
    return new Promise((resolve, reject) => {
        axios.post(url, data).then(res => {
            if(res){
                resolve(res.data)
            } else {
                resolve(res);
            }
        }).catch(err => {
            reject(err)
        })
    })
}

export function put(url,data) {
    return new Promise((resolve, reject) => {
        axios.put(url,data).then(res => {
            if(res){
                resolve(res.data)
            } else {
                resolve(res);
            }
        }).catch(err => {
            reject(err)
        })
    })
}