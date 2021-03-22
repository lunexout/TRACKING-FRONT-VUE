<template>
  <MobNavbar :color='`${bgColor}`' :scrollPosition='scrollPosition'/>
  <MobMainPage/>
  <MobAbout/>
  <div class="container" style="height: 1200px;"></div>
</template>

<script>
import MobNavbar from './components/Navbar.vue'
import MobMainPage from './components/MobMainPage.vue'
import MobAbout from './components/MobAbout.vue'
export default {
    name: 'MobileApp',
    data(){
      return {
        bgColor: 'transparent',
        scrollPosition: 0
      }
    },
    components: {MobNavbar,MobMainPage, MobAbout},
    created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll () {
      console.log(window.scrollY);
      if(window.scrollY < 400){
        this.bgColor = 'transparent',
        this.scrollPosition = window.scrollY
      }
      if(window.scrollY > 400 && window.scrollY < 1100) {
        this.bgColor = '#485A67'
      }
      if(window.scrollY >= 1100) {
        this.bgColor = '#082139'
      }
    }
  },

}
</script>

<style>
body {
    overflow-y: scroll !important;
}
</style>