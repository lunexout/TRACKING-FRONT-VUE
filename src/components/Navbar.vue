<template>
  <nav class="navbar navbar-expand-lg navbar-light main-nav">
    <!-- <div class="container" style="max-width: 1920px"> -->
    <div class="container-fluid" style="max-width: 1920px">
      <div class="navbar-brand" style="margin-left: 80px">
        <div><img class="logo-img" src="./../assets/mainpage/menu.svg" /></div>
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
      <div style="margin-right: 100px">
        <ul class="navbar-nav">
          <li class="nav-item">
            <div style="display: flex">
              <a
                class="nav-link phoneFONT"
                style="
                  color: white;
                  font-size: 22px;
                  margin-left: 35px;
                  margin-top: 5px;
                "
              >
                ქა</a
              >
              <img
                style="margin-top: -5px; margin-left: -20px"
                class="lang-img"
                src="./../assets/mainpage/downarrow.svg"
              />
            </div>
          </li>
          <li class="nav-item">
            <div style="display: flex">
              <div
                style="
                  background-color: #337bbb;
                  margin-top: 28px;
                  width: 35px;
                  height: 3px;
                  z-index: 55;
                  margin-left: 125px;
                "
              />
              <p
                class="phoneFONT"
                style="
                  color: white;
                  font-size: 25px;
                  margin-left: 35px;
                  margin-top: 10px;
                "
              >
                (+ 995) 599 710 202
              </p>
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
  margin-left: 70px;
}
.logo-img {
  width: 85px;
  height: 85px;
}
.lang-img {
  width: 70px;
  height: 70px;
  margin-left: 0px;
}

.main-nav {
  height: 70px;
  background-color: transparent;
  z-index: 999;
}
.nav-link {
  color: white !important;
}
.navbar-brand {
  color: white !important;
}
.loginBtn {
  margin-left: 80px;
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
</style>