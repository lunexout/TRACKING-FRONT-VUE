<template>
  <template v-if="!isUserLogged">
    <ShowLoginModal v-if="isMobLoginModal" />
    <ShowMobMenu v-if="isMobMenuOpen" />
    <ShowMobRegister v-if="isMobRegisterModal" />
    <ShowMobRegisterRules v-if="isMobRegisterRuleModal" />
    <template v-if="isMobRegisterModal == false || !isMobLoginModal == false">
      <MobNavbar :color="`${bgColor}`" :scrollPosition="scrollPosition" />
      <MobMainPage />
      <MobAbout />
      <ConditionSlider />
      <MobClearance />
      <MobWorkSlider />
      <MobContact />
      <MobSendMail />
    </template>
  </template>
  <template v-else>
    <MobUserLogged />
  </template>
</template>

<script>
import MobNavbar from "./components/Navbar.vue";
import MobMainPage from "./components/MobMainPage.vue";
import MobAbout from "./components/MobAbout.vue";
import ConditionSlider from "./components/ConditionSlider.vue";
import MobClearance from "./components/MobClearance.vue";
import MobContact from "./components/MobContact.vue";
import MobSendMail from "./components/MobSendMail.vue";
import MobWorkSlider from "./components/MobWorkSlider.vue";
import ShowLoginModal from "./../../components/ShowLoginModal.vue";
import ShowMobMenu from "./components/ShowMobMenu.vue";
import ShowMobRegister from "./components/ShowMobRegister.vue";
import ShowMobRegisterRules from "./components/ShowMobRegisterRules.vue";

// logged

import MobUserLogged from "./components/MobileUser/MobUserLogged.vue";
import axios from 'axios'
import env from './../../env.json'
export default {
  name: "MobileApp",
  data() {
    return {
      bgColor: "transparent",
      scrollPosition: 0,
      isMobLoginModal: false,
      isMobMenuOpen: false,
      isMobRegisterModal: false,
      isMobRegisterRuleModal: false,
      isUserLogged: false,
    };
  },
  components: {
    ShowLoginModal,
    ShowMobMenu,
    ShowMobRegister,
    ShowMobRegisterRules,
    MobNavbar,
    MobMainPage,
    MobAbout,
    ConditionSlider,
    MobClearance,
    MobWorkSlider,
    MobContact,
    MobSendMail,
    MobUserLogged,
  },
  mounted() {
    this.emitter.on("mobloginmodal", () => {
      this.isMobLoginModal = true;
    });
    this.emitter.on("closeloginmodal", () => {
      this.isMobLoginModal = false;
    });
    this.emitter.on("mobregistermodal", () => {
      this.isMobRegisterModal = true;
    });
    this.emitter.on("closemobregistermodal", () => {
      this.isMobRegisterModal = false;
    });
    this.emitter.on("mobregisterrulemodal", () => {
      this.isMobRegisterRuleModal = true;
    });
    this.emitter.on("closemobregisterrulemodal", () => {
      this.isMobRegisterRuleModal = false;
    });
    this.emitter.on("closemobmenu", () => {
      this.isMobMenuOpen = false;
    });
    this.emitter.on("openmobmenu", () => {
      this.isMobMenuOpen = true;
    });

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
      })
    }
    this.emitter.on("onLogout", () => {
      this.isUserLogged = false;
      localStorage.clear()
    });
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      // console.log(window.scrollY);
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
      if (window.scrollY >= 2200) {
        this.bgColor = "#062030";
      }
      if (window.scrollY >= 3100) {
        this.bgColor = "#485A67";
      }
      if (window.scrollY >= 4030) {
        this.bgColor = "#062030";
      }
    },
  },
};
</script>

<style scoped>
</style>