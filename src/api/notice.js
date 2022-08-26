import axios from '~/axios'

//公告列表
export function getNoticeList(page){
    return axios.get(`/admin/notice/${page}`);
}

//增加公告
export function createNotice(data){
    return axios.post("/admin/notice",data);
}