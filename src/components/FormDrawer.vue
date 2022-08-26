<template>
    <el-drawer v-model="showDrawer" 
                :title="title" 
                :size="size" 
                :close-on-click-modal="false"
                :destroy-on-close="destroyOnClose">
        <div class="formDrawer">
            <div class="body">
                <slot></slot>
            </div>
            <div class="actions">
                <el-button round type="primary" @click="submit" :loading="loading">{{ confirmText }}</el-button>
                <el-button round  @click="close" type="default">取消</el-button>
            </div>
        </div>
    </el-drawer>
</template>

<script setup>
import { ref } from "vue"

//定义模态弹窗的显隐
const showDrawer = ref(false);

//定义暴露出去的props属性的类型默认值等
const props = defineProps({
    title:String,
    size:{
        type:String,
        default:"45%"
    },
    destroyOnClose:{
        type:Boolean,
        default:false
    },
    confirmText:{
        type:Boolean,
        default:"提交"
    }
})

//提交loading
const loading = ref(false);
const showLoading = ()=>loading.value = true;
const hideLoading = ()=>loading.value = false;
//打开
const open = ()=> showDrawer.value = true;

//关闭
const close = ()=> showDrawer.value = false;

//提交按钮
const emit = defineEmits(["submit"]);
const submit = ()=> emit("submit");

//向父组件暴露以下方法
defineExpose({
    open,
    close,
    showLoading,
    hideLoading
})

</script>

<style lang="postcss">

.formDrawer{
    width:100%;
    height:100%;
    position:relative;
    @apply flex flex-col;
}

.formDrawer .body{
    flex: 1;
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:50px;
    overflow-y: auto;
}

.formDrawer .actions{
    height:50px;
    @apply mt-auto flex items-center;
}

</style>