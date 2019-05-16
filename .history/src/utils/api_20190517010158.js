import { get, put, post } from './http';
import { HTTPHOST } from './config';

const api = {

    //更新资源
    putSource: (id, data) => {
        return put(HTTPHOST + '/agents/' + id, data)
    }

};

export default api;