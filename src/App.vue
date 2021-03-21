<template>
  <div v-if='!isDeviceSmall'>
    <SwiperSlider />
  </div>
  <div v-else>
    <MobileApp/>
  </div>

</template>

<script>
import SwiperSlider from "./components/SwiperSlider";
import MobileApp from "./components/MobileVersion/MobileApp";
export default {
  name: "App",
  components: {
    SwiperSlider,MobileApp
  },
data(){
        return {
            isDeviceSmall: false,
            width: 0,
            height: 0
        }
    },
    mounted() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    unmounted() {
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
        handleResize() {
            this.width = window.innerWidth;
            if(this.width < 1311){this.isDeviceSmall = true}
            else {this.isDeviceSmall = false}    
        }
    }
};
</script>

<style>
html,
body {
  margin: 0;
  overflow: hidden;
}
</style>
