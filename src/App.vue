<template>
  <div v-if='!isDeviceSmall'>
    <DesktopApp />
  </div>
  <div v-else>
    <MobileApp/>
  </div>

</template>

<script>
import DesktopApp from "./components/DesktopApp";
import MobileApp from "./components/MobileVersion/MobileApp";
export default {
  name: "App",
  components: {
    DesktopApp,MobileApp
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

<style scoped>
</style>
