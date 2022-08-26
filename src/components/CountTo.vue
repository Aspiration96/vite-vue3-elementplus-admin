<template>
    {{isDecimal(d.num) ? d.num.toFixed(2) : d.num.toFixed(0)}}
</template>

<script setup>
import { reactive, watch } from 'vue';
import gsap from 'gsap';

const props = defineProps({
    value:{
        type:Number,
        default:0
    }
})

//判断是否有小数点
function isDecimal(number){
    let str = number+"";
    if (str.indexOf(".") == -1) {
        return false;
    } else {
        return true;
    }
}

const d = reactive({
    num:0
})

function AnimateToValue(){
    gsap.to(d,{
        duration:0.5,
        num:props.value
    })
}

AnimateToValue();

watch(()=>props.value,()=>AnimateToValue());
</script>