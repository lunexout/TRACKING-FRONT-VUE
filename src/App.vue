<template>
  <div>
    <!-- v-if='!isDeviceSmall' -->
    <SwiperSlider />
  </div>
  <!-- <div v-else>
    <h1>Mobile version coming soon</h1>
  </div> -->

</template>

<script>
import SwiperSlider from "./components/SwiperSlider";
// import Navbar from "./components/Navbar";
export default {
  name: "App",
  components: {
    SwiperSlider,
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
            if(this.width < 1249){this.isDeviceSmall = true}
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
