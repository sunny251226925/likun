import { get, put, post } from './http';
import { HTTPHOST } from './config';

const api = {
    //获取agent列表
    getAgentList: (type) => {
        if(type){
            return get(HTTPHOST + '/agents?type=' + type )
        } else {
            return get(HTTPHOST + '/agents')
        }
    },

    //更新资源
    putSource: (id, data) => {
        return put(HTTPHOST + '/agents/' + id, data)
    },

    //添加资源
    addSource: (id, data) => {
        return post(HTTPHOST + '/agents/' + id, data)
    },

    //添加agent list
    addAgent: (data) => {
        return post(HTTPHOST + '/agents/' + data)
    }
};

export default api;