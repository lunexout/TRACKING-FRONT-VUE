<template>
  <nav class="navbar navbar-expand-lg navbar-light main-nav">
    <div class="container-fluid" style="max-width: 1920px">
      <div class="navbar-brand">
        <div style="">
          <img class="logo-img" src="./../assets/mainpage/menu.svg" />
        </div>
      </div>
      <!-- <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button> -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <!-- <a class="nav-link active" aria-current="page" href="#">Home</a>
             -->
            <img class="logo-img1" src="./../assets/mainpage/logo.svg" />
          </li>
        </ul>
      </div>
      <div class="right-nav-items">
        <ul class="navbar-nav">
          <li class="nav-item">
            <div style="display: flex">
              <a class="nav-link phoneFONT lang-txt"> ქა</a>
              <img
                style="margin-top: -5px; margin-left: -20px"
                class="lang-img"
                src="./../assets/mainpage/downarrow.svg"
              />
            </div>
          </li>
          <li class="nav-item">
            <div style="display: flex; width: 440%">
              <div class="line-phone" />
              <p class="phoneFONT phoneNumber">(+ 995) 599 710 202</p>
            </div>
          </li>

          <li class="nav-item">
            <button class="loginBtn">შესვლა</button>
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
};
</script>

<style scoped>
.container-fluid {
  margin-top: 60px;
}
.logo-img1 {
  width: 85px;
  height: 85px;
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
  left: 5%;
  height: 70px;
  background-color: transparent;
  z-index: 999;
  position: absolute;
  top: 100px;
}
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
  .right-nav-items {
    margin-left: 105%;
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
  width: 60px;
  height: 60px;
  margin-left: 25%;
}
.logo-img {
  width: 75px;
  height: 75px;
}
}
@media all and (min-width: 1440px) {
  .right-nav-items {
    margin-left: 120%;
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
    margin-left: 105%;
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