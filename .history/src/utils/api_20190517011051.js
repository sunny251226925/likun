import { get, put, post } from './http';
import { HTTPHOST } from './config';

const api = {

    //更新资源
    getList: () => {
        return get(HTTPHOST + '/realJSON.json')
    }

};

export default api;