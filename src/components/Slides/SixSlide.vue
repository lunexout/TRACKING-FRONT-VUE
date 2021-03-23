<template>
  <Navbar :image="false" :btnColor="`white`" :textColor="`white !important;`" />
  <div style="background-color: white; width: 1920px; height: 1080px">
    <img
      style="width: 320px; height: 270px; position: aboslute"
      src="./../../assets/clearance/left-svg.png"
    />
  </div>
  <div>
    <img class="right-truck" src="./../../assets/contact/bg.png" />
  </div>
  <div class="next-img-box">
    <img class="next-img" src="./../../assets/services/next_bg.png" />
  </div>
  <h1 class="text-center contact-us-text">
    <span style="color: black">საკონტაქტო ინფო&nbsp;&nbsp;</span>
    <span style="color: white">მოგვწერეთ</span>
  </h1>
  <div class="text-center header-line1"></div>
  <div class="text-center header-line2"></div>

  <div class="container" style="margin-top: -30px">
    <div class="row">
      <div class="col-xl-1"></div>
      <div class="col-xl-9">
        <div style="display: flex">
          <img
            style="width: 50px; height: 50px; margin-top: -20px"
            src="./../../assets/contact/adres.svg"
          />
          <p style="font-family: arrowFONT; font-weight: bold; color: #008dcf">
            დ. უზნაძის ქ. 6
          </p>
          <img
            style="
              width: 50px;
              height: 50px;
              margin-top: -15px;
              margin-left: 20px;
            "
            src="./../../assets/contact/mail.svg"
          />
          <p style="font-family: arrowFONT; font-weight: bold; color: #008dcf">
            info@meko.ge
          </p>
          <img
            style="
              width: 50px;
              height: 50px;
              margin-top: -20px;
              margin-left: 20px;
            "
            src="./../../assets/contact/phone.svg"
          />
          <p style="font-family: arrowFONT; font-weight: bold; color: #008dcf">
            (+ 995) 599 710 202
          </p>
        </div>
      </div>
      <!-- <div class="col-xl-4"></div> -->
    </div>
  </div>

  <div class="container social-box">
    <div class="row">
      <div class="col-xl-1"></div>
      <div class="col-xl-2">
        <div style="display: flex; justify-content: space-between">
          <img
            style="width: 40px; height: 40px"
            src="./../../assets/contact/fb.svg"
          />
          <img
            style="width: 40px; height: 40px"
            src="./../../assets/contact/ig.svg"
          />

          <img
            style="width: 40px; height: 40px"
            src="./../../assets/contact/lin.svg"
          />

          <img
            style="width: 40px; height: 40px"
            src="./../../assets/contact/yt.svg"
          />
        </div>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row">
      <div class="col-xl-7">
        <div class="mapouter">
          <div class="gmap_canvas">
            <iframe
              width="1080"
              height="380"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=tbilisi%20meko&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            >
            </iframe>
            <!-- <a href="https://123movies-to.org"> </a><br />
            <a href="https://www.embedgooglemap.net"
              >how to add a google map to my website</a
            > -->
          </div>
        </div>
      </div>
      <div class="col-xl-5" style="z-index: 55; color: White">
        <!-- <label style="font-family: arrowFONT; margin-top: 5px; position: absolute;">სახელი*</label> -->
        <form style="margin-left: -20px">
          <input
            style="
              width: 165px;
              border-radius: 25px;
              padding: 8px;
              background-color: transparent;
              border: 1px solid white;
              outline: none;
              color: white;
              font-family: arrowFONT;
            "
            type="text"
            placeholder="სახელი*"
          />
          <input
            type="text"
            style="
              width: 165px;
              border-radius: 25px;
              padding: 8px;
              margin-left: 20px;
              background-color: transparent;
              border: 1px solid white;
              outline: none;
              color: white;
              font-family: arrowFONT;
            "
            placeholder="ელ. ფოსტა*"
          />
          <input
            style="
              width: 165px;
              border-radius: 25px;
              padding: 8px;
              margin-left: 20px;
              background-color: transparent;
              border: 1px solid white;
              outline: none;
              color: white;
              font-family: arrowFONT;
            "
            placeholder="ტელეფონი"
          /><br />
          <input
            style="
              width: 535px;
              margin-top: 20px;
              border-radius: 25px;
              padding: 20px;
              background-color: transparent;
              border: 1px solid white;
              outline: none;
              color: white;
              font-family: arrowFONT;
            "
            placeholder="წერილი*"
          />
        </form>
        <div class="text-center registerContainer" style="position: absolute">
          <button class="registreBtn">
            გაგზავნა
            <div class="register-arrow-box">
              <img
                style="width: 28px; height: 28x; margin-top: 8px"
                src="./../../assets/mainpage/right-arrow.svg"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>

  <div class="slide-number-container">
    <div class="number-slide-line"></div>
  </div>
  <div class="number-slide-box">
    <p style="color: white; font-family: numericFONT; font-size: 20px">6/06</p>
  </div>
  <div class="number-slide-svg-box">
    <img class="slide-number-img" src="./../../assets/contact/06.svg" />
  </div>
</template>

<script>
import Navbar from "./../Navbar.vue";
export default {
  name: "SixSlide",
  props: ["image"],
  components: { Navbar },
};
</script>

<style scoped>
::-webkit-input-placeholder {
  /* Chrome/Opera/Safari */
  color: white;
}
::-moz-placeholder {
  /* Firefox 19+ */
  color: white;
}
:-ms-input-placeholder {
  /* IE 10+ */
  color: white;
}
:-moz-placeholder {
  /* Firefox 18- */
  color: white;
}
.container {
  /* border: 1px solid red; */
  position: absolute;
  left: 0;
  padding: 0;
  right: 180px;
  top: 305px;
  max-width: 100%;
}
.next-img-box {
  position: absolute;
  left: 0;

  z-index: 1;
  margin-top: -180px;
  transform: rotate(180deg);
}
.next-img {
  width: 120px;
}
.mapouter {
  position: relative;
  text-align: right;
  height: 320px;
  width: 1080px;
}
.gmap_canvas {
  overflow: hidden;
  background: none !important;
  height: 320px;
  width: 1080px;
}
.slide-number-img {
  width: 230px;
  height: 230px;
}
.number-slide-box {
  position: absolute;
  z-index: 55;
  right: 90px;
  bottom: 35%;
}
.number-slide-svg-box {
  position: absolute;
  z-index: 55;
  right: 50px;
  bottom: 27%;
}
.number-slide-line {
  width: 50px;
  height: 3px;
  background-color: white;
  position: absolute;
  z-index: 55;
  right: 12.5%;
  bottom: 37.5%;
}
.header-line1 {
  margin-top: -625px;
  margin-left: -100px;
  position: absolute;
  width: 60px;
  height: 3px;
  background-color: #19a5db;
  z-index: 55;
}
.header-line2 {
  margin-top: -625px;
  margin-left: 250px;
  position: absolute;
  width: 60px;
  height: 3px;
  background-color: #19a5db;
  z-index: 55;
}
.contact-us-text {
  position: absolute;
  margin-top: -650px;
  font-size: 25px;
  font-weight: bold;
  z-index: 11;
  font-family: arrowFONT;
  margin-left: 30px;
}
.right-truck {
  width: 50%;
  right: 0;
  top: 0;
  bottom: 0;
  position: absolute;
  z-index: 1;
  height: 100%;
}
.register-arrow-box {
  width: 45px;
  height: 45px;
  border-radius: 25px;
  background-color: #0fbcfa;
  margin-left: 240px;
  margin-top: -43px;
}

.registerContainer {
  border-radius: 70px;
  outline: none;
  border: 1px solid white;
  padding: 9px;
  text-align: center;
  height: 72px;
  width: 320px;
  margin-top: 20px;
  margin-left: 90px;
}
.registreBtn {
  border-radius: 70px;
  outline: none;
  padding: 9px;
  width: 300px;
  font-family: arrowFONT;
  font-weight: bold;
  height: 52px;
  text-align: center;
  font-size: 25px;
  color: white;
  background-color: #009eea;
  border: none;
}
.social-box {
  margin-top: 325px;
}
@font-face {
  font-family: arrowFONT;
  src: url("./../../fonts/mainpage/BPG Nateli Mtavruli Light.ttf");
}
@font-face {
  font-family: paragraphFONT;
  src: url("./../../fonts/mainpage/Gotham Pro Medium.ttf");
}
@media all and (min-width: 1440px) {
  .slide-number-img {
    width: 240px;
    height: 240px;
  }
  .number-slide-box {
    right: 140px;
    bottom: 28.5%;
  }
  .number-slide-svg-box {
    right: 100px;
    bottom: 20%;
  }
  .number-slide-line {
    right: 15.5%;
    bottom: 31.5%;
  }
}
@media all and (min-width: 1640px) {
  .contact-us-text {
    margin-left: 50px;
  }
  .slide-number-img {
    width: 270px;
    height: 270px;
  }
  .number-slide-box {
    right: 150px;
    bottom: 22%;
  }
  .number-slide-svg-box {
    right: 100px;
    bottom: 12%;
  }
  .number-slide-line {
    right: 14.5%;
    bottom: 24.5%;
  }
  .mapouter {
    height: 420px;
    width: 1080px;
  }
  .gmap_canvas {
    height: 420px;
    width: 1080px;
  }
  .social-box {
    margin-top: 400px;
  }
  .next-img-box {
    margin-top: -70px;
  }
}
@media all and (min-width: 1740px) {
  .next-img-box {
    margin-top: 37px;
  }
  .contact-us-text {
    margin-left: 65px;
  }
  .slide-number-img {
    width: 300px;
    height: 300px;
  }
  .number-slide-box {
    right: 150px;
    bottom: 17%;
  }
  .number-slide-svg-box {
    right: 100px;
    bottom: 5.5%;
  }
  .number-slide-line {
    right: 14.5%;
    bottom: 20%;
  }
}
</style>