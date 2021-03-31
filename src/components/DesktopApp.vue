<template>
  <UserLogged v-if='false'/>
  <SwiperSlider v-if='true'/>
</template>

<script>
import SwiperSlider from './SwiperSlider.vue'
import UserLogged from './DesktopUser/UserLogged.vue'
export default {
    name: 'DesktopApp',
    components: {SwiperSlider,UserLogged}
}
</script>

<style>
html,body {
    margin: 0;
    overflow: hidden;
}
</style>