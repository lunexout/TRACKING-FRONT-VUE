<template>
  <!-- <img :src="image" /> -->
  <!-- <SecondNavbar /> -->
  <Navbar :image='false' :btnColor="`white`" :textColor="`white !important;`"/>
  <div style="background-color: white; width: 1920px; height: 1080px">
    <img src="./../../assets/clearance/left-svg.png" />
  </div>
  <!-- <div class="right-svg-box">
    <img src="./../../assets/clearance/right-svg.jpg" />
  </div> -->
  <div>
    <img class='right-truck' src="./../../assets/contact/bg.png" />
  </div>
  <h1 class="text-center contact-us-text">
      <span style="color: black">საკონტაქტო ინფო&nbsp;&nbsp;</span> <span style="color: white;">მოგვწერეთ</span>
  </h1>

  <div class="slide-number-container">
    <div class="number-slide-line"></div>
  </div>
  <div class="number-slide-box">
    <p style="color: white; font-family: numericFONT; font-size: 20px">4/06</p>
  </div>
  <div class="number-slide-svg-box">
    <img class="slide-number-img" src="./../../assets/clearance/04.svg" />
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
.contact-us-text {
position: absolute;
margin-top: -620px;
font-size: 25px;
font-weight: bold;
font-family: arrowFONT;
margin-left: 30px;
}
.right-truck {
    width: 50%;
    /* background-size: cover; */
    right: 0;top: 0;bottom: 0;
    position: absolute;
    /* max-width: 1920px; */
    height: 100%;
}
@font-face {
  font-family: arrowFONT;
  src: url("./../../fonts/mainpage/BPG Nateli Mtavruli Light.ttf");
}
@font-face {
  font-family: paragraphFONT;
  src: url("./../../fonts/mainpage/Gotham Pro Medium.ttf");
}
/* @media all and (min-width: 1249px) {
} */
@media all and (min-width: 1440px) {
  
}
@media all and (min-width: 1640px) {
  
}
@media all and (min-width: 1740px) {
  
}
</style>