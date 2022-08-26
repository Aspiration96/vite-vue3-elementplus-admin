<template>
    <el-container>
        <el-header>
            <f-header />
        </el-header>
        <el-container>
            <el-aside :width="$store.state.asideWidth">
                <f-menu />
            </el-aside>
            <el-main>
                <f-tag-list />
                <router-view v-slot="{ Component }">
                    <!-- 全局动画 -->
                    <transition name="fade">
                        <!-- 使用keep-alive进行页面缓存 -->
                        <keep-alive :max="10">
                            <component :is="Component"></component>
                        </keep-alive>
                    </transition>
                </router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script setup>
import FHeader from './components/FHeader.vue';
import FMenu from './components/FMenu.vue';
import FTagList from './components/FTagList.vue';
import 'animate.css';
</script>

<style >
.el-aside {
    transition: all 0.3s;
}

/*进入前动画*/
.fade-enter-from {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
}
/*进入后动画*/
.fade-enter-to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
}
/*离开前动画*/
.fade-leave-from {
    opacity: 1;
}

/*离开后动画*/
.fade-leave-to {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
}

/*进入离开动画时间*/
.fade-enter-active,
.fade-leave-active {
    transition: all 0.3s;
}

/*进入动画延迟0.3s*/
.fade-enter-active{
    transition-delay: 0.3s;
}


</style>