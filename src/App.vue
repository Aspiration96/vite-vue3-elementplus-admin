<script setup>

</script>

<template>
    <router-view #default="{route,Component}">
        <transition  :enter-active-class="`animate__animated ${route.meta.transition}`">
            <component :is="Component"></component>
        </transition>
    </router-view>
</template>

<style>
body{
  @apply bg-gray-100;
}
#nprogress .bar{
  background-color: green !important;
  height: 3px !important;
}
#nprogress .spinner .peg{
  background-color: green !important;
}

::-webkit-scrollbar{
  width:4px;
  height:6px;
}

::-webkit-scrollbar-corner{
  display:block;
}

::-webkit-scrollbar-thumb{
  border-radius: 8px;
  background-color:rgba(0, 0, 0, 0.2)
}

::-webkit-scrollbar-thumb,
::-webkit-scrollbar-track{
  border-right-color: transparent;
  border-left-color: transparent;
  background-color:rgba(0, 0, 0, 0.1)
}


</style>
