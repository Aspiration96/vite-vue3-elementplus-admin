import axios from '~/axios'


//首页四个卡片的数据
export function getStatistics1(){
    return axios.get("/admin/statistics1");
}
//首页echart右边的数据
export function getStatistics2(){
    return axios.get("/admin/statistics2");
}
//echart表格数据
export function getStatistics3(type){
    return axios.get("/admin/statistics3?type=" + type);
}

