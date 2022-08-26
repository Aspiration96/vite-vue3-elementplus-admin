import axios from '~/axios'

//公告列表
export function getNoticeList(page){
    return axios.get(`/admin/notice/${page}`);
}