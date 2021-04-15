<template>
  <nav class="navbar navbar-expand-lg navbar-light main-nav">
    <div class="container-fluid" style="max-width: 1920px">
      <div class="navbar-brand">
        <div style="" @click="showMenu">
          <img class="logo-img" src="./../assets/mainpage/menu.svg" />
          <p class="menu-text">{{ $t("menu") }}</p>
        </div>
      </div>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <img
              v-if="image"
              class="logo-img1"
              src="./../assets/mainpage/logo.svg"
            />
            <img v-else class="logo-img2" src="./../assets/services/logo.svg" />
          </li>
        </ul>
      </div>
      <div class="right-nav-items">
        <ul class="navbar-nav">
          <li class="nav-item">
            <div style="display: flex">
              <select
                v-model="$i18n.locale"
                class="lang-select"
                :style="menuTextColor"
              >
                <option
                  class="lang-item"
                  v-for="(lang, i) in langs"
                  :key="`Lang${i}`"
                  :value="lang"
                >
                  <div
                    style="background-color: transparent"
                    v-if="lang == 'geo'"
                  >
                    ქა
                  </div>
                  <div style="background-color: transparent" v-else>
                    {{ lang }}
                  </div>
                </option>
              </select>

              <img
                @click="
                  () => {
                    document.getElementById('LangSelect').click();
                  }
                "
                style="margin-top: -5px; margin-left: -20px"
                class="lang-img"
                src="./../assets/mainpage/downarrow.svg"
              />
            </div>
          </li>
          <li class="nav-item">
            <div style="display: flex; width: 440%">
              <div class="line-phone" />
              <p class="phoneFONT phoneNumber" :style="menuTextColor">
                (+ 995) 599 710 202
              </p>
            </div>
          </li>

          <li v-if="!isLogged" class="nav-item">
            <button
              class="loginBtn"
              @click="emitter.emit('openloginmodal')"
              :style="menuBtnColor"
            >
              {{ $t("login") }}
            </button>
          </li>
          <li v-else class="nav-item">
            <button
              class="loginBtn"
              @click="emitter.emit('onLogout')"
              :style="menuBtnColor"
            >
              <!-- <img src='./../assets/mainpage/logout.svg' style='margin-right: 20px;width: 40px; height: 40px; color: #fff;'/> -->
              <!-- <p class='mt-2'>{{ `გამოსვლა` }}</p> -->
              {{ `გამოსვლა` }}
            </button>
          </li>
        </ul>
      </div>
    </div>
    <!-- </div> -->
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      isMenuOpen: false,
      imagelink1: "./../assets/mainpage/logo.svg",
      imagelink2: "./../assets/services/logo.svg",
      langs: ["geo", "Tü"],
      isLogged: false,
    };
  },
  methods: {
    showMenu() {
      this.emitter.emit("showmenu");
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
    setLocale(locale) {
      this.$root.$i18n.locale = locale;
    },
  },
  props: ["image", "textColor", "btnColor"],
  computed: {
    menuTextColor() {
      return "color: " + this.textColor;
    },
    menuBtnColor() {
      return (
        "border: 1px solid #" + this.btnColor + "; color: #" + this.btnColor
      );
    },
  },
  mounted() {
    if (localStorage.getItem("UserLogged") == "true") {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  },
};
</script>

<style scoped>
.lang-select {
  border: none;
  position: absolute;
  z-index: 2;
  margin-left: -35px;
  font-size: 20px;
  font-family: arrowFONT;
  margin-top: 8px;
  color: white;
  border: none;
  outline: none;
  background-color: transparent;
  appearance: none;
  width: 60px;
  height: 25px;
  /* padding: 10px; */
}
.lang-item:hover {
  color: white;
}
.lang-item {
  background-color: #029fd5;
  color: white;
}
.container-fluid {
  margin-top: 60px;
}
.logo-img2 {
  width: 85px;
  height: 85px;
  margin-left: 25%;
}
.logo-img1 {
  width: 95px;
  height: 95px;
  margin-left: 25%;
}
.logo-img {
  width: 85px;
  height: 85px;
}
.lang-txt {
  color: white;
  font-size: 22px;
  margin-left: 10%;
  margin-top: 5px;
}
.line-phone {
  background-color: #337bbb;
  margin-top: 28px;
  width: 45px;
  height: 3px;
  z-index: 55;
  margin-left: 20%;
}
.lang-img {
  width: 70px;
  height: 70px;
  margin-left: 0px;
}
.right-nav-items {
  margin-left: 50%;
}
.phoneNumber {
  color: white;
  font-size: 25px;
  margin-left: 10%;
  margin-top: 10px;
}
.main-nav {
  left: 50%;
  height: 70px;
  background-color: transparent;
  z-index: 999;
  position: absolute;
  top: 8%;
  transform: translate(-120%, 0%);
}
/* .main-nav {
  left: 5%;
  height: 70px;
  background-color: transparent;
  z-index: 999;
  position: absolute;
  top: 100px;
} */
.nav-link {
  color: white !important;
}
.navbar-brand {
  color: white !important;
}
.loginBtn {
  margin-left: 200%;
  width: 160px;
  height: 50px;
  color: white;
  border: 1px solid white;
  font-family: arrowFONT;
  font-size: 22px;
  border-radius: 4px;
  background-color: transparent;
}
.logoutBtn {
  margin-left: 160%;
  width: 160px;
  height: 50px;
  color: white;
  border: none;
  font-family: arrowFONT;
  font-size: 20px;
  font-weight: bold;
  border-radius: 4px;
  background-color: transparent;
}
.menu-text {
  position: absolute;
  margin-top: -25px;
  font-family: arrowFONT;
  font-size: 15px;
  margin-left: 2%;
  font-weight: bold;
  z-index: 555;
  color: white;
}
@font-face {
  font-family: arrowFONT;
  src: url("./../fonts/mainpage/BPG Nateli Mtavruli Light.ttf");
}
@font-face {
  font-family: phoneFONT;
  src: url("./../fonts/mainpage/Gotham Pro Medium.ttf");
}
.phoneFONT {
  font-family: arrowFONT;
  font-weight: 600;
}
@media all and (max-width: 1200px) {
}
@media all and (min-width: 1249px) {
  .logo-img2 {
    margin-left: 120%;
  }
  .right-nav-items {
    margin-left: 107%;
  }
  .lang-txt {
    font-size: 18px;
  }
  .lang-img {
    width: 50px;
    height: 60px;
    margin-left: 0px;
  }
  .loginBtn {
    width: 120px;
    height: 40px;
    font-size: 17px;
    margin-left: 210%;
  }
  .phoneNumber {
    color: white;
    font-size: 18px;
    margin-left: 13%;
    margin-top: 10px;
  }
  .line-phone {
    background-color: #337bbb;
    margin-top: 22px;
    width: 35px;
    height: 2px;
    z-index: 55;
    margin-left: 55%;
  }
  .line-phone {
    background-color: #337bbb;
    margin-top: 22px;
    width: 35px;
    height: 2px;
    z-index: 55;
    margin-left: 15%;
  }
  .lang-txt {
    color: white;
    font-size: 15px;
    margin-left: 0%;
    margin-top: 5px;
  }
  .logo-img1 {
    width: 70px;
    height: 70px;
    margin-top: 8px;
    margin-left: 25%;
  }
  .logo-img {
    width: 75px;
    height: 75px;
  }
}
@media all and (min-width: 1440px) {
  .logo-img2 {
    margin-left: 120%;
  }
  .right-nav-items {
    margin-left: 113%;
  }
  .lang-txt {
    font-size: 18px;
  }
  .logo-img1 {
    width: 75px;
    height: 75px;
    margin-left: 25%;
  }
  .logo-img {
    width: 75px;
    height: 75px;
  }
  .loginBtn {
    width: 120px;
    height: 40px;
    font-size: 17px;
    margin-left: 210%;
  }
  .phoneNumber {
    color: white;
    font-size: 18px;
    margin-left: 13%;
    margin-top: 10px;
  }
  .line-phone {
    background-color: #337bbb;
    margin-top: 22px;
    width: 35px;
    height: 2px;
    z-index: 55;
    margin-left: 55%;
  }
  .line-phone {
    background-color: #337bbb;
    margin-top: 22px;
    width: 45px;
    height: 2px;
    z-index: 55;
    margin-left: 15%;
  }
  .lang-txt {
    color: white;
    font-size: 18px;
    margin-left: 0%;
    margin-top: 5px;
  }
}
@media all and (min-width: 1640px) {
  .right-nav-items {
    margin-left: 117%;
  }
  .loginBtn {
    width: 160px;
    height: 50px;
    font-size: 22px;
    margin-left: 210%;
  }
  .logo-img1 {
    width: 75px;
    height: 75px;
    margin-left: 25%;
  }
  .logo-img {
    width: 75px;
    height: 75px;
  }
  .phoneNumber {
    color: white;
    font-size: 25px;
    margin-left: 13%;
    margin-top: 10px;
  }
  .line-phone {
    background-color: #337bbb;
    margin-top: 28px;
    width: 45px;
    height: 3px;
    z-index: 55;
    margin-left: 15%;
  }
  .lang-txt {
    color: white;
    font-size: 22px;
    margin-left: 0%;
    margin-top: 5px;
  }
}
@media all and (min-width: 1740px) {
  .right-nav-items {
    margin-left: 120%;
  }
  .logo-img2 {
    margin-left: 120%;
    margin-top: -20px;
  }
  .logo-img1 {
    margin-top: -20px;
    width: 75px;
    height: 75px;
    margin-left: 25%;
  }
  .logo-img {
    margin-top: -30px;
    width: 75px;
    height: 75px;
  }
  .loginBtn {
    width: 160px;
    height: 50px;
    font-size: 22px;
    margin-left: 210%;
  }
  .phoneNumber {
    color: white;
    font-size: 25px;
    margin-left: 13%;
    margin-top: 10px;
  }
  .line-phone {
    background-color: #337bbb;
    margin-top: 28px;
    width: 45px;
    height: 3px;
    z-index: 55;
    margin-left: 15%;
  }
  .lang-txt {
    color: white;
    font-size: 22px;
    margin-left: 0%;
    margin-top: 5px;
  }
}
/* }
@media all and (max-width: 1060px) {
  .right-nav-items {
    margin-left: 80px;
  }
}
@media all and (min-width: 900px) {
  .right-nav-items {
    margin-left: 70px;
  }
    .line-phone {
    margin-left:40px;
  }
}
@media all and (min-width: 1450px) {
  .right-nav-items {
    margin-left: 280px;
  }
}
@media all and (min-width: 1650px) {
  .right-nav-items {
    margin-left: 480px;
  }
}
@media all and (min-width: 1919px) {
  .right-nav-items {
    margin-left: 760px;
  }
} */
</style>
