<template>
  <Navbar :image='true' :btnColor="`white`" :textColor="`white`"/>
  <img class="main-image" :src="image" />
  <h1 class="text-center header-first-slide">
    ამანათების ტრანსპორტირება<br />
    თურქეთის ნებისმიერი წერტილიდან
  </h1>
  <div class="text-center header-line"></div>

  <div
    class="text-center registerContainer"
    style="position: absolute; margin-left: -20px"
  >
    <button class="registreBtn">
      რეგისტრაცია
      <!-- <div> -->
      <div class="register-arrow-box">
        <img
          style="width: 35px; height: 35x; margin-top: 8px"
          src="./../../assets/mainpage/right-arrow.svg"
        />
        <!-- </div> -->
      </div>
    </button>
  </div>
  <div class="soc-card-container">
    <img class="soc-cards" src="./../../assets/mainpage/fb.svg" />

    <img class="soc-cards" src="./../../assets/mainpage/istagram.svg" />
    <img class="soc-cards" src="./../../assets/mainpage/youtub.svg" />
    <img class="soc-cards" src="./../../assets/mainpage/linkdin.svg" />
  </div>
  <div class="slide-number-line">
    <div style="width: 50px; height: 4px; background-color: white"></div>
  </div>
  <div class="carousel-number-text">
    <p style="color: white; font-family: numericFONT; font-size: 20px">1/06</p>
  </div>
  <div>
    <img class="slide-number-img" src="./../../assets/mainpage/01.svg" />
  </div>
</template>

<script>
import Navbar from "./../Navbar.vue";
export default {
  name: "FirstSlide",
  props: ["image"],
  components: { Navbar },
};
</script>

<style scoped>
.soc-card-container {
  position: absolute;
  z-index: 55;
  left: 5%;
  bottom: 38%;
  display: flex;
}
.register-arrow-box {
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: #11bdf7;
  margin-left: 280px;
  margin-top: -37px;
}
.slide-number-line {
  position: absolute;
  z-index: 55;
  right: 160px;
  bottom: 39.5%;
}
.soc-cards {
  width: 70px;
  height: 70px;
  margin-left: 12px;
  border-radius: 25px;
}

.slide-number-img {
  width: 300px;
  height: 300px;
  position: absolute;
  z-index: 55;
  right: 10px;
  bottom: 28%;
}
.carousel-number-text {
  position: absolute;
  z-index: 55;
  right: 80px;
  bottom: 37%;
}
.header-first-slide {
  position: absolute;
  z-index: 555;
  color: white;
  font-family: arrowFONT;
  font-weight: bold;
  font-size: 50px;
  margin-top: -290px;
}
.header-line {
  margin-top: -150px;
  margin-left: -20px;
  position: absolute;
  width: 60px;
  height: 4px;
  background-color: #19a5db;
  z-index: 55;
}
.registerContainer {
  border-radius: 70px;
  outline: none;
  border: 1px solid white;
  padding: 9px;
  text-align: center;
  height: 82px;
  width: 370px;
  margin-top: 500px;
}
.registreBtn {
  border-radius: 70px;
  outline: none;
  padding: 10px;
  width: 350px;
  font-family: arrowFONT;
  font-weight: bold;
  height: 60px;
  text-align: center;
  font-size: 28px;
  color: white;
  background-color: #009ce7;
  border: none;
}
@font-face {
  font-family: arrowFONT;
  src: url("./../../fonts/mainpage/BPG Nateli Mtavruli Light.ttf");
}
@font-face {
  font-family: numericFONT;
  src: url("./../../fonts/mainpage/Gotham Pro Medium.ttf");
}
@media all and (max-width: 13360px) {
  .header-first-slide {
    position: absolute;
    z-index: 555;
    color: white;
    font-family: arrowFONT;
    font-weight: bold;
    font-size: 30px;
    margin-top: -500px;
  }
  .header-line {
    margin-top: -400px;
    margin-left: -20px;
    position: absolute;
    width: 60px;
    height: 4px;
    background-color: #19a5db;
    z-index: 55;
  }
  .registerContainer {
    border-radius: 70px;
    outline: none;
    border: 1px solid white;
    padding: 9px;
    text-align: center;
    height: 82px;
    width: 370px;
    margin-top: -50px;
  }
  .slide-number-img {
    width: 250px;
    height: 250px;
    /* position: absolute; z-index: 55; right: 30px; bottom: 120px; */
  }
  .main-image {
    position: absolute;
    top: 0;
    /* max-width: 100%; */
    height: auto;
    width: auto;
    background-size: cover;
  }
}
@media all and (min-width: 1249px) {
  .soc-card-container {
    bottom: 35%;
  }
  .soc-cards {
    width: 50px;
    height: 50px;
    margin-left: 12px;
    border-radius: 25px;
  }
  .header-first-slide {
    position: absolute;
    z-index: 555;
    color: white;
    font-family: arrowFONT;
    font-weight: bold;
    font-size: 30px;
    margin-top: -450px;
  }
  .header-line {
    margin-top: -380px;
    margin-left: -20px;
    position: absolute;
    width: 60px;
    height: 3px;
    background-color: #19a5db;
    z-index: 55;
  }
  .registerContainer {
    text-align: center;
    height: 82px;
    margin-top: 10px;
  }
  .registreBtn {
    border-radius: 70px;
    outline: none;
    padding: 9px;
    width: 350px;
    font-family: arrowFONT;
    font-weight: bold;
    height: 60px;
    text-align: center;
    font-size: 22px;
    color: white;
    background-color: #009ce7;
    border: none;
  }
   .slide-number-img {
    width: 250px;
    height: 250px;
    position: absolute;
    z-index: 55;
    right: -35px;
    bottom: 26%;
  }
  .carousel-number-text {
    position: absolute;
    z-index: 55;
    right: 40px;
    bottom: 34.5%;
  }
    .slide-number-line {
    bottom: 37%;
    right: 9%;
  }
}
@media all and (min-width: 1440px) {
  .slide-number-line {
    bottom: 32%;
    right: 10%;
  }
  .soc-cards {
    width: 70px;
    height: 70px;
    margin-left: 12px;
    border-radius: 25px;
  }
  .soc-card-container {
    bottom: 25%;
  }
  .slide-number-img {
    width: 300px;
    height: 300px;
    position: absolute;
    z-index: 55;
    right: -35px;
    bottom: 18%;
  }
  .carousel-number-text {
    position: absolute;
    z-index: 55;
    right: 60px;
    bottom: 29%;
  }
  .header-first-slide {
    position: absolute;
    z-index: 555;
    color: white;
    font-family: arrowFONT;
    font-weight: bold;
    font-size: 40px;
    margin-top: -400px;
  }
  .header-line {
    margin-top: -300px;
    margin-left: -20px;
    position: absolute;
    width: 60px;
    height: 4px;
    background-color: #19a5db;
    z-index: 55;
  }
  .registerContainer {
    text-align: center;
    height: 82px;
    margin-top: 200px;
  }
  .registreBtn {
    border-radius: 70px;
    outline: none;
    padding: 9px;
    width: 350px;
    font-family: arrowFONT;
    font-weight: bold;
    height: 60px;
    text-align: center;
    font-size: 22px;
    color: white;
    background-color: #009ce7;
    border: none;
  }
}
@media all and (min-width: 1640px) {
  .header-first-slide {
    position: absolute;
    z-index: 555;
    color: white;
    font-family: arrowFONT;
    font-weight: bold;
    font-size: 40px;
    margin-top: -300px;
  }
  .header-line {
    margin-top: -200px;
    margin-left: -20px;
    position: absolute;
    width: 60px;
    height: 4px;
    background-color: #19a5db;
    z-index: 55;
  }
  .registerContainer {
    margin-top: 350px;
  }
  .slide-number-line {
    bottom: 24%;
    right: 9%;
  }
  .soc-cards {
    width: 70px;
    height: 70px;
    margin-left: 12px;
    border-radius: 25px;
  }
  .soc-card-container {
    bottom: 17%;
  }
  .slide-number-img {
    width: 300px;
    height: 300px;
    position: absolute;
    z-index: 55;
    right: -30px;
    bottom: 10%;
  }
  .carousel-number-text {
    position: absolute;
    z-index: 55;
    right: 65px;
    bottom: 21%;
  }
}
@media all and (min-width: 1740px) {
  .register-arrow-box {
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background-color: #11bdf7;
    margin-left: 280px;
    margin-top: -48px;
  }
  .header-first-slide {
    position: absolute;
    z-index: 555;
    color: white;
    font-family: arrowFONT;
    font-weight: bold;
    font-size: 50px;
    margin-top: -290px;
  }
  .header-line {
    margin-top: -150px;
    margin-left: -20px;
    position: absolute;
    width: 60px;
    height: 4px;
    background-color: #19a5db;
    z-index: 55;
  }
  .registerContainer {
    border-radius: 70px;
    outline: none;
    border: 1px solid white;
    padding: 9px;
    text-align: center;
    height: 82px;
    width: 370px;
    margin-top: 400px;
  }
  .registreBtn {
    border-radius: 70px;
    outline: none;
    padding: 10px;
    width: 350px;
    font-family: arrowFONT;
    font-weight: bold;
    height: 60px;
    text-align: center;
    font-size: 28px;
    color: white;
    background-color: #009ce7;
    border: none;
  }
  .slide-number-line {
    bottom: 21%;
    right: 11%;
  }
  .soc-cards {
    width: 70px;
    height: 70px;
    margin-left: 12px;
    border-radius: 25px;
  }
  .soc-card-container {
    bottom: 15%;
  }
  .slide-number-img {
    width: 300px;
    height: 300px;
    position: absolute;
    z-index: 55;
    right: 30px;
    bottom: 7%;
  }
  .carousel-number-text {
    position: absolute;
    z-index: 55;
    right: 125px;
    bottom: 18%;
  }
  .soc-card-container {
    bottom: 13%;
  }
}
</style>