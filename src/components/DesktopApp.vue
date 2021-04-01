<template>
  <UserLogged v-if="isUserLogged" />
  <SwiperSlider v-else />
</template>

<script>
import SwiperSlider from "./SwiperSlider.vue";
import UserLogged from "./DesktopUser/UserLogged.vue";
export default {
  name: "DesktopApp",
  components: { SwiperSlider, UserLogged },
  data() {
    return {
      isUserLogged: false,
    };
  },
  mounted() {
    if (localStorage.getItem("UserLogged") == 'true') {
       this.isUserLogged = true;
    }else {
       this.isUserLogged = false;
        this.emitter.on("onLogin", (logdata) => {
        if (logdata.email == "admin" && logdata.passw == 'admin') {
          this.isUserLogged = true;
          localStorage.setItem("UserLogged", true);
        }
      });
    }
      this.emitter.on("onLogout", () => {
        this.isUserLogged = false;
        localStorage.setItem("UserLogged", false);
      });

      
  },
};
</script>

<style>
html,
body {
  margin: 0;
  overflow: hidden;
}
</style>