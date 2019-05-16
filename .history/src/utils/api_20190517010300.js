import { get, put, post } from './http';
import { HTTPHOST } from './config';

const api = {

    //更新资源
    getList: () => {
        return put(HTTPHOST + '/agents/')
    }

};

export default api;