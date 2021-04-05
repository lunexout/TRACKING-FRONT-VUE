<template>
  <nav
    class="navbar navbar-expand-xxl navbar-light fixed-top m-0"
    :style="`background-color: ${color};`"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="#"
        ><img
          style="width: 60px; height: 60px"
          src="./../../../assets/mainpage/logo.svg"
          alt='Meko Logo'
      /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click='() => {emitter.emit("openmobmenu"); emitter.emit("openloggedusermenu")}'
      >
        <img
          style="width: 44px; height: 44px; margin-top: -15px;"
          src="./../../../assets/mainpage/menu.svg"
          alt='Menu Icon'
        />
        <p class="menu-text">მენიუ</p>
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  name: "MobNavbar",
  data() {
    return {
      navColor: this.color,
    };
  },
  props: ["color", "scrollPosition"],
  // methods: {
  //   setMenuBgColor(){
  //     if(this.scrollPosition == 0){
  //       this.navColor = '#09253C'
  //     }
  //   }
  // }
};
</script>

<style scoped>
.navbar-toggler {
  outline: none !important;
  border: none !important;
}
.navbar-toggler:focus {
  text-decoration: none;
  outline: 0;
  box-shadow: 0 0 0 0rem;
}
.menu-text {
  position: absolute;
  margin-top: -5px;
  font-family: arrowFONT;
  font-size: 15px;
  margin-left: 0.5%;
  font-weight: bold;
  z-index: 555;
  color: white;
}
@font-face {
  font-family: phoneFONT;
  src: url("./../../../fonts/mainpage/BPG Nateli Mtavruli Light.ttf");
}
.phoneFONT {
  font-family: phoneFONT;
  font-weight: bolder;
  font-size: 20px;
}
</style>