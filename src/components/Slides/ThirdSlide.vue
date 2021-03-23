<template>
  <Navbar :image="true" :btnColor="`white`" :textColor="`white`" />
  <img style="background-size: cover" :src="image" />
  <h1 class="text-center main-header">პირობები</h1>
  <div class="text-center header-line"></div>
  <div
    class="container1"
    style="
      position: absolute;
      left: 150px;
      right: 180px;
      top: 300px;
      max-width: 100%;
    "
  >
    <div class="row main-row">
      <div class="col-xl-12 conditions-column">
        <div class="conditions-main-box">
          <div class="conditions-inside-box">
            <img
              src="./../../assets/conditions/p01.svg"
              class="conditions-img"
            />
          </div>
        </div>
        <p class="conditions-paragraph">
          შპს "მეკო" ანხორციელებს როგორც ამანათების ასევე დიდი მოცულობის ტვირთის
          დროულ და უსაფრთხო<br />
          ტრანსპორტირებას თურქეთიდან საქართველოში.<br />
          1კგ-ს ღირებულება არის 4$, დაანგარიშება ხდება იკგ-დან.
        </p>
      </div>
      <div class="col-xl-12 conditions-column mt-3">
        <div class="conditions-main-box">
          <div class="conditions-inside-box">
            <img
              src="./../../assets/conditions/p02.svg"
              class="conditions-img"
            />
          </div>
        </div>
        <p class="conditions-paragraph">
          შპს "მეკო" ანხორციელებს როგორც ამანათების ასევე დიდი მოცულობის ტვირთის
          დროულ და უსაფრთხო<br />
          ტრანსპორტირებას თურქეთიდან საქართველოში.<br />
          1კგ-ს ღირებულება არის 4$, დაანგარიშება ხდება იკგ-დან.
        </p>
      </div>
      <div class="col-xl-12 conditions-column mt-3">
        <div class="conditions-main-box">
          <div class="conditions-inside-box">
            <img
              src="./../../assets/conditions/p03.svg"
              class="conditions-img"
            />
          </div>
        </div>
        <p class="conditions-paragraph">
          შპს "მეკო" ანხორციელებს როგორც ამანათების ასევე დიდი მოცულობის ტვირთის
          დროულ და უსაფრთხო<br />
          ტრანსპორტირებას თურქეთიდან საქართველოში.<br />
          1კგ-ს ღირებულება არის 4$, დაანგარიშება ხდება იკგ-დან.
        </p>
      </div>
    </div>
  </div>
  <div class="slide-number-container">
    <div class="number-slide-line"></div>
  </div>
  <div class="number-slide-box">
    <p class="number-slide-paragraph">3/06</p>
  </div>
  <div sclass="number-slide-svg-box">
    <img class="slide-number-img" src="./../../assets/conditions/03.svg" />
  </div>
</template>

<script>
import Navbar from "./../Navbar.vue";
export default {
  name: "ThirdSlide",
  props: ["image"],
  components: { Navbar },
};
</script>

<style scoped>
/* .number-slide-box {
  position: absolute; z-index: 55; right: 65px; bottom: 125px
}
.number-slide-paragpraph {
  color: white; font-family: numericFONT; font-size: 20px;
} */
.number-slide-line {
  width: 50px;
  height: 4px;
  background-color: white;
  position: absolute;
  z-index: 55;
  right: 13%;
  bottom: 38.5%;
}
.number-slide-box {
  position: absolute;
  right: 5%;
  bottom: 35.5%;
  color: white;
  font-family: numericFONT;
  font-weight: 500;
  font-size: 20px;
}

.slide-number-img {
  width: 230px;
  height: 230px;
  position: absolute;
  z-index: 55;
  right: 30px;
  bottom: 28%;
}
.header-line {
  margin-top: -610px;
  margin-left: 10px;
  position: absolute;
  width: 60px;
  height: 3px;
  background-color: #19a5db;
  z-index: 55;
}
.main-header {
  position: absolute;
  z-index: 555;
  color: white;
  font-family: arrowFONT;
  font-weight: bold;
  font-size: 30px;
  margin-top: -640px;
}
.conditions-img {
  margin-top: -45px;
  margin-left: -20px;
  width: 50px;
  height: 50px;
}

.conditions-paragraph {
  font-size: 16px;
  margin-top: -110px;
  margin-left: 150px;
}
.conditions-main-box {
  width: 100px;
  height: 100px;
  border: 35px solid #1f3751;
  border-radius: 100px;
  background-color: transparent;
  padding: 30px;
}
.conditions-column {
  color: white;
  font-family: arrowFONT;
  font-size: 25px;
  font-weight: bold;
  line-height: 1.9;
  margin-top: -50px;
}

@font-face {
  font-family: arrowFONT;
  src: url("./../../fonts/mainpage/BPG Nateli Mtavruli Light.ttf");
}
@font-face {
  font-family: numericFONT;
  src: url("./../../fonts/mainpage/Gotham Pro Medium.ttf");
}
@media all and (max-width: 1249px) {
}

/* @media screen and(min-width: 949px) {
  .main-header {
    color: blue !important;
  }
} */
@media all and (min-width: 1440px) {
  .main-row {
    margin-top: 20px;
  }
  .number-slide-box {
    bottom: 27%;
  }

  .slide-number-img {
    right: 30px;
    bottom: 19%;
  }
  .number-slide-line {
    right: 12%;
    bottom: 29.5%;
  }
  .conditions-paragraph {
    font-size: 20px;
    margin-top: -110px;
    margin-left: 150px;
  }
  .main-header {
    font-size: 30px;
  }
}
@media all and (min-width: 1640px) {
  .number-slide-box {
    bottom: 20%;
  }

  .slide-number-img {
    right: 30px;
    bottom: 12%;
  }
  .number-slide-line {
    right: 10%;
    bottom: 22.5%;
  }
  .conditions-img {
    margin-top: -45px;
    margin-left: -20px;
    width: 50px;
    height: 50px;
  }
  .header-line {
    margin-top: -560px;
    margin-left: 10px;
    position: absolute;
    width: 60px;
    height: 3px;
    background-color: #19a5db;
    z-index: 55;
  }
  .main-header {
    position: absolute;
    z-index: 555;
    color: white;
    font-family: arrowFONT;
    font-weight: bold;
    font-size: 40px;
    margin-top: -600px;
  }
  .conditions-paragraph {
    font-size: 22px;
    margin-top: -140px;
    margin-left: 200px;
  }
  .conditions-main-box {
    width: 130px;
    height: 130px;
    border: 45px solid #1f3751;
    border-radius: 100px;
    background-color: transparent;
    padding: 45px;
  }
}
@media all and (min-width: 1740px) {
  .number-slide-box {
    bottom: 14%;
  }

  .slide-number-img {
    right: 30px;
    bottom: 6%;
  }
  .number-slide-line {
    right: 9%;
    bottom: 16.5%;
  }
  .conditions-img {
    margin-top: -45px;
    margin-left: -20px;
    width: 50px;
    height: 50px;
  }

  .conditions-paragraph {
    font-size: 25px;
    margin-top: -160px;
    margin-left: 220px;
  }
  .conditions-main-box {
    width: 150px;
    height: 150px;
    border: 50px solid #1f3751;
    border-radius: 100px;
    background-color: transparent;
    padding: 50px;
  }
  .main-row {
    margin-top: 10px;
  }
}
</style>