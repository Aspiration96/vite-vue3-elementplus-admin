import { router, addRoutes} from "./router";
import { getToken } from "~/composables/auth";
import { toast, showFullLoading, hideFullLoading } from "~/composables/util";
import store from "./store";
//全局前置守卫
let hasGetInfo = false;
router.beforeEach(async (to,from,next) => {

    const token = getToken();
    //更换路由上方显示一条进度条的loading
    showFullLoading();

    //如果没有登录，强制跳转回登录页
    if(!token && to.path != "/login"){
        toast("请先登录","error")
        return next({ path: "/login" });
    }

    //防止重复登录
    if(token && to.path == "/login"){
        toast("请勿重复登录","error")
        return next({ path: from.path ? from.path : "/" });
    }

    //如果用户登录了，自动获取用户信息，并存储在vuex中

    let hasNewRoutes = false;

    if(token && !hasGetInfo){
        let { menus } = await store.dispatch("getinfo");
        hasGetInfo = true;
        //动态添加路由
        hasNewRoutes = addRoutes(menus);
    }


    //设置页面标题
    let title = (to.meta.title ? to.meta.title : "") + "- 商城后台管理系统";
    document.title = title;


    hasNewRoutes ? next(to.fullPath) : next();
})


//全局后置守卫
router.afterEach((to, from) => {
    //渲染隐藏上方进度条loading
    hideFullLoading();
})