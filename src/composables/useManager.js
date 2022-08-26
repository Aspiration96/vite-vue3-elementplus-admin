import { ref, reactive } from 'vue'
import { logout,updatepassword } from "~/api/manager"
import { toast,showModal } from '~/composables/util';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

export function useRepassword() {
    const router = useRouter();
    const store = useStore();
    const formRef = ref(null);
    //修改密码
    const formDrawerRef = ref(null)
    //form表单属性
    const form = reactive({
        oldpassword: '',
        password: '',
        repassword: ''
    })
    //form校验规则
    const rules = {
        oldpassword: [{
            required: true,
            message: '旧密码不能为空',
            trigger: 'blur'
        }],
        password: [{
            required: true,
            message: '新密码不能为空',
            trigger: 'blur'
        }],
        repassword: [{
            required: true,
            message: '确认密码不能为空',
            trigger: 'blur'
        }]
    }
    const openRepasswordForm = ()=> formDrawerRef.value.open();
    const onSubmit = () => {
        formRef.value.validate((valid) => {
            if (!valid) {
                return false
            }
            formDrawerRef.value.showLoading();
            updatepassword(form)
                .then(res => {
                    toast("修改密码成功，请重新登录")
                    store.dispatch("logout")
                    // 跳转回登录页
                    router.push("/login")
                })
                .finally(() => {
                    formDrawerRef.value.hideLoading();
                })

        })
    }
    return {
        formRef,
        formDrawerRef,
        form,
        rules,
        openRepasswordForm,
        onSubmit
    }
}

export function useLogout(){
    const router = useRouter();
    const store = useStore();
    function handleLogout() {
        showModal("是否要退出登录？").then(result => {
            logout().finally(() => {
                store.dispatch("logout");
                //跳转回登录页面
                router.push("/login");
                //提示退出登录成功
                toast("退出成功");
            })
        })
    }
    return {
        handleLogout
    }
}