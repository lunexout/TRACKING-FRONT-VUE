<template>
  <UserLogged v-if="isUserLogged" />
  <SwiperSlider v-else />
</template>

<script>
import SwiperSlider from "./SwiperSlider.vue";
import UserLogged from "./DesktopUser/UserLogged.vue";
import axios from 'axios'
import env from './../env.json'
export default {
  name: "DesktopApp",
  components: { SwiperSlider, UserLogged },
  data() {
    return {
      isUserLogged: false,
    };
  },
  mounted() {
    if (localStorage.getItem("token")) {
      this.isUserLogged = true;
    } else {
      this.isUserLogged = false;
      this.emitter.on("onLogin", (logdata) => {
        const logData = {
          email: logdata.email,
          password: logdata.password
        }
        console.log(logData);
        axios.post(`${env.API_URL}/api/login`, logData).then(r => {
          if(r.data.verified){
            this.isUserLogged = true;
            localStorage.setItem('token', r.data.token);
            localStorage.setItem('user', r.data.user);
            localStorage.setItem('id', r.data.id);
          }else{
            this.emitter.emit('erroOnLog')
            this.isUserLogged = false;
          }
        })
        // if (logdata.email == "admin" && logdata.password == "admin") {
        //   this.isUserLogged = true;
        //   localStorage.setItem("UserLogged", true);

        // }
      });
    }
    this.emitter.on("onLogout", () => {
      this.isUserLogged = false;
      localStorage.clear()
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