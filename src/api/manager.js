import axios from '~/axios'

//登录接口
export function login(username,password){
    return axios.post('/admin/login',{
        username,
        password
    })
}

//获取用户信息接口
export function getinfo(){
    return axios.post("/admin/getinfo");
}

//退出接口
export function logout(){
    return axios.post("/admin/logout");
}

//修改密码
export function updatepassword(data){
    return axios.post("/admin/updatepassword",data);
}
