<template>
  <Navbar
    :image="false"
    :btnColor="`1D96D9`"
    :textColor="`black !important;`"
  />
  <div style="background-color: white; width: 1920px; height: 1080px">
    <img src="./../../assets/services/menu_bg.png" />
    <div class="next-img-box">
      <img class="next-img" src="./../../assets/services/next_bg.png" />
    </div>
  </div>
  <h1 class="text-center about-us-text">ჩვენს შესახებ</h1>
  <div class="text-center about-us-line"></div>
  <div class="container1">
    <div class="row">
      <div class="col-xxl-4 col-lg-4">
        <p class="about-paragraph">
          შპს "მეკო" ანხორციელებს როგორც <br />
          ამანათების ასევე დიდი მოცულობის <br />
          ტვირთის დროულ და უსაფრთხო ტრანსპორტირებას თურქეთიდან <br />
          საქართველოში.<span style="color: #599deb"
            >1 კგ-ს ღირებულება არის 4$, დაანგარიშება ხდება<br />
            იკგ-დან</span
          >
        </p>
      </div>
      <div class="col-xxl-7 col-lg-8" style="margin-left: 0px">
        <div>
          <CardSlider />
        </div>
      </div>
    </div>
  </div>

  <div class="slide-number-container">
    <div class="number-slide-line"></div>
  </div>
  <div class="number-slide-box">
    <p style="color: black; font-family: numericFONT; font-size: 20px">2/06</p>
  </div>
  <div class="number-slide-svg-box">
    <img class="slide-number-img" src="./../../assets/services/02.svg" />
  </div>
</template>

<script>
import Navbar from "./../Navbar.vue";
import CardSlider from "./../CardSlider.vue";
export default {
  name: "SecondSlide",
  props: ["image"],
  components: { Navbar, CardSlider },
};
</script>

<style scoped>
.number-slide-box {
  position: absolute;
  z-index: 55;
  right: 110px;
  bottom: 36%;
}
.number-slide-svg-box {
  position: absolute;
  z-index: 55;
  right: 50px;
  bottom: 28%;
}
.number-slide-line {
  width: 50px;
  height: 4px;
  background-color: #029fd5;
  position: absolute;
  z-index: 55;
  right: 14%;
  bottom: 38.5%;
}
.next-img-box {
  position: absolute;
  right: 0;
  margin-top: -60px;
}
.next-img {
  width: 150px;
}
.container1 {
  position: absolute;
  left: 150px;
  right: 180px;
  top: 350px;
  max-width: 100%;
}
.about-paragraph {
  font-family: arrowFONT;
  font-size: 25px;
  font-weight: bold;
  line-height: 1.9;
}
.about-us-line {
  margin-top: -530px;
  margin-left: -20px;
  position: absolute;
  width: 80px;
  height: 3px;
  background-color: #19a5db;
  z-index: 55;
}
.about-us-text {
  position: absolute;
  z-index: 555;
  color: black;
  font-family: arrowFONT;
  font-weight: bold;
  font-size: 50px;
  top: 0;
  margin-top: 200px;
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
  font-family: paragraphFONT;
  src: url("./../../fonts/mainpage/Gotham Pro Medium.ttf");
}
.slide-number-img {
  width: 230px;
  height: 230px;
}
@media all and (min-width: 1249px) {
  .about-us-text {
    font-size: 30px;
  }
  .about-us-line {
    margin-top: -600px;
  }
  .about-paragraph {
    font-size: 19px;
  }
  .container1 {
    /* width: 1300px; */
    top: 270px;
  }
}
@media all and (min-width: 1440px) {
  .about-paragraph {
    font-size: 21px;
  }
  .number-slide-box {
    right: 105px;
    bottom: 27%;
  }
  .number-slide-svg-box {
    right: 50px;
    bottom: 19%;
  }
  .number-slide-line {
    right: 13%;
    bottom: 29.5%;
  }
  .container1 {
    top: 280px;
  }
}
@media all and (min-width: 1640px) {
  .next-img-box {
    position: absolute;
    right: 0;
    /* margin-top: -70px; */
    margin-top: -20px;
  }
  .next-img {
    width: 160px;
  }
  .about-paragraph {
    font-size: 23px;
  }
  .number-slide-box {
    right: 105px;
    bottom: 19%;
  }
  .number-slide-svg-box {
    right: 50px;
    bottom: 11%;
  }
  .number-slide-line {
    right: 11%;
    bottom: 21.5%;
  }
}
@media all and (min-width: 1740px) {
  .next-img-box {
    position: absolute;
    right: 0;
    margin-top: 35px;
  }
  .next-img {
    width: 160;
  }
  .about-paragraph {
    font-size: 25px;
  }
  .number-slide-box {
    right: 105px;
    bottom: 14%;
  }
  .number-slide-svg-box {
    right: 50px;
    bottom: 6%;
  }
  .number-slide-line {
    right: 10%;
    bottom: 16.5%;
  }
}
</style>