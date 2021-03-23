<template>
  <MobNavbar :color="`${bgColor}`" :scrollPosition="scrollPosition" />
  <MobMainPage />
  <MobAbout />
  <ConditionSlider />
  <MobClearance />
  <div class="container" style="height: 1200px"></div>
</template>

<script>
import MobNavbar from "./components/Navbar.vue";
import MobMainPage from "./components/MobMainPage.vue";
import MobAbout from "./components/MobAbout.vue";
import ConditionSlider from "./components/ConditionSlider.vue";
import MobClearance from "./components/MobClearance.vue";
export default {
  name: "MobileApp",
  data() {
    return {
      bgColor: "transparent",
      scrollPosition: 0,
    };
  },
  components: {
    MobNavbar,
    MobMainPage,
    MobAbout,
    ConditionSlider,
    MobClearance,
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      console.log(window.scrollY);
      if (window.scrollY < 400) {
        (this.bgColor = "transparent"), (this.scrollPosition = window.scrollY);
      }
      if (window.scrollY > 400 && window.scrollY < 1100) {
        this.bgColor = "#485A67";
      }
      if (window.scrollY >= 1100) {
        this.bgColor = "#082139";
      }
      if (window.scrollY >= 1600) {
        this.bgColor = "#485A67";
      }
    },
  },
};
</script>

<style scoped>
</style>