import { get } from './http';
import { HTTPHOST } from './config';

const api = {

    //更新资源
    getList: () => {
        return get(HTTPHOST + '/api/lk/getVo.do')
    }

};

export default api;