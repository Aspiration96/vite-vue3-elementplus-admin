import { createApp } from 'vue'
// import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import { router } from './router/index'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import store from './store'

const app = createApp(App)
//vuex->注册store
app.use(store);
//注册路由
app.use(router)
//注册element Plus组件库
app.use(ElementPlus)
//全局注册element Plus 的icon图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
import 'virtual:windi.css'

//全局路由守卫
import "./permission"

//页面上方的loading进度条
import "nprogress/nprogress.css"


//某个组件 显示隐藏的权限控制
import permission from "~/directives/permission.js"
app.use(permission);


app.mount('#app')
