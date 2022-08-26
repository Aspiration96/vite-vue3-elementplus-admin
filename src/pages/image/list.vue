<template>
  <el-container class="bg-white rounded" :style="{height: h + 'px'}">
    <el-header class="image-header">
      <el-button type="primary" size="small" @click="handleOpenCreate">新增图片分类</el-button>
      <el-button type="warning" size="small" @click="handleOpenUpload">上传图片</el-button>
      </el-header>
    <el-container>
      <ImageAside ref="ImageAsideRef" @change="handleAsideChange"/>
      <ImageMain ref="ImageMainRef"/>
    </el-container>
  </el-container>
</template>
<script setup>
import { ref } from 'vue';
import ImageAside from '~/components/ImageAside.vue';
import ImageMain from '~/components/ImageMain.vue';

const windowHeigh = window.innerHeight || document.body.clientHeight;
const h = windowHeigh - 64 - 44 - 40;


// function rec(t,d){
//   return t.replace(/{{(.*?)}}/g,(m,g)=>{
//     const c = g.trim();
//     return d[c];
//   } )
// }
// const t = `<div>{{name}}<span>{{age}}</span></div>`;
// const d = { name :'singh' , age :27};
// console.log(rec(t,d));


const ImageAsideRef = ref(null);

const handleOpenCreate = ()=>ImageAsideRef.value.handleCreate();

//上传图片
const handleOpenUpload = ()=>ImageMainRef.value.openUploadFile();

const ImageMainRef = ref(null);
const handleAsideChange = (image_class_id)=>ImageMainRef.value.loadData(image_class_id);
//const handleOpenCreate = ()=>ImageAsideRef.value.handleOpenCreate();
</script>

<style scoped>
.image-header{
  border-bottom: 1px solid #eeeeee;
  @apply flex items-center;
}
</style>