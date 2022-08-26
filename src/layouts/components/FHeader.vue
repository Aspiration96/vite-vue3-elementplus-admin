<template>
    <div class="f-header">
        <span class="logo">
            <el-icon class="mr-1">
                <ElementPlus />
            </el-icon>
            商城管理
        </span>
        <el-icon class="icon-btn" @click="$store.commit('handleAsideWidth')">
            <Fold v-if="$store.state.asideWidth == '250px'"/>
            <Expand v-else/>
        </el-icon>
        <el-tooltip effect="dark" content="刷新" placement="bottom">
            <el-icon class="icon-btn" @click="handleRefresh">
                <RefreshLeft />
            </el-icon>
        </el-tooltip>
        <div class="ml-auto flex justify-center items-center">
            <el-tooltip effect="dark" :content="isFullscreen ? '正常显示' : '全屏显示'" placement="bottom">
                <el-icon class="icon-btn" @click="toggle">
                    <FullScreen v-if="!isFullscreen" />
                    <Rank v-else />
                </el-icon>
            </el-tooltip>
            <el-dropdown class="dropdown" @command="handleCommand">
                <span class="flex justify-center items-center text-light-50">
                    <el-avatar class="mr-2" :size="25" :src="$store.state.user.avatar" />
                    {{ $store.state.user.username }}
                    <el-icon class="el-icon--right">
                        <arrow-down />
                    </el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item command="rePassword">修改密码</el-dropdown-item>
                        <el-dropdown-item command="logout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>

        </div>
    </div>

    <!-- <el-drawer v-model="showDrawer" title="修改密码" size="30%" :close-on-click-modal="false">

    </el-drawer> -->

    <form-drawer ref="formDrawerRef" title="修改密码" destroyOnClose @submit="onSubmit">
        <el-form ref="formRef" :rules="rules" :model="form" label-width="90px" size="small">
            <el-form-item prop="oldpassword" label="旧密码">
                <el-input v-model="form.oldpassword" placeholder="请输入旧密码">
                </el-input>
            </el-form-item>
            <el-form-item prop="password" label="新密码">
                <el-input type="password" v-model="form.password" placeholder="请输入新密码" show-password>
                </el-input>
            </el-form-item>
            <el-form-item prop="repassword" label="确认新密码">
                <el-input type="password" v-model="form.repassword" placeholder="请确认新密码" show-password>
                </el-input>
            </el-form-item>
        </el-form>
    </form-drawer>
</template>

<script setup>
import FormDrawer from "~/components/FormDrawer.vue"
import { toast } from '~/composables/util';
import { useFullscreen } from '@vueuse/core';//全屏插件
import { useRepassword, useLogout} from '~/composables/useManager'

//是否全屏
const {
    //是否全屏状态
    isFullscreen,
    //切换全屏
    toggle
} = useFullscreen();

const {         
        formRef,
        formDrawerRef,
        form,
        rules,
        openRepasswordForm,
        onSubmit
    } = useRepassword();
const { handleLogout } = useLogout();


//下拉选择
const handleCommand = (c) => {
    switch (c) {
        case "logout":
            handleLogout();
            break;
        default:
            toast("演示使用 暂不允许外人修改密码","error");
            //openRepasswordForm();
            break;
    }
}

//刷新按钮
const handleRefresh = () => location.reload();


//退出按钮
// function handleLogout() {
//     showModal("是否要退出登录？").then(result => {
//         logout().finally(() => {
//             store.dispatch("logout");
//             //跳转回登录页面
//             router.push("/login");
//             //提示退出登录成功
//             toast("退出成功");
//         })
//     })
// }


</script>

<style lang="postcss">
.f-header {
    @apply flex items-center bg-indigo-700 text-light-50 fixed top-0 left-0 right-0;
    height: 64px;
    z-index: 30;
}

.logo {
    width: 250px;
    @apply flex justify-center items-center text-xl font-thin
}

.icon-btn {
    @apply flex justify-center items-center;
    width: 42px;
    height: 64px;
    cursor: pointer;
}

.icon-btn:hover {
    @apply bg-indigo-600;
}

.f-header .dropdown {
    height: 64px;
    cursor: pointer;
    @apply flex justify-center items-center mx-5;

}
</style>