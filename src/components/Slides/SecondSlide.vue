<template>
  <!-- <img :src="image" /> -->
  <SecondNavbar />
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
        <div class="row">
          <div class="col-xl-6 col-lg-6 col-12">
            <div style="display: grid">
              <div class="box-conditions1">
                <h5 class="box-header1">რამდენ ხანში ჩამოდის ამანათი?</h5>
                <p class="box-paragraph">
                  შპს "მეკო"-ს თურქეთის ოფისში სამშაბათამდე მისული ამანათები
                  იგზავნება ოთხშაბათს, გაცემა იწყება თბილისში, შაბათს,
                  რეგიონებში სამშაბათს
                </p>
              </div>
              <div class="box-conditions2"></div>
            </div>
          </div>
          <div class="col-xl-1"></div>
          <div class="col-xl-5 col-lg-6 col-12">
            <div style="display: grid">
              <div class="box-conditions1">
                <h5 class="text-center box-header2">
                  როგორ გავიგო ჩემი ამანათი მივიდა შპს "მეკო"-ს თურქეთის ოფისში?
                </h5>
                <p class="box-paragraph">
                  თურქეთში მისულ ამანათებთან დაკავშირებით შეტყობინებას მიიღებთ
                  ელ. ფოსტით
                </p>
              </div>
              <div class="box-conditions2"></div>
            </div>
          </div>
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
import SecondNavbar from "./../SecondNavbar.vue";
export default {
  name: "SecondSlide",
  props: ["image"],
  components: { SecondNavbar },
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
.box-conditions1 {
  width: 400px;
  height: 400px;
  background-color: #029fd5;
  margin-bottom: -400px;
  z-index: 2;
  padding: 35px;
}
.box-conditions2 {
  width: 400px;
  height: 400px;
  background-color: #008dcf;
  transform: rotateY(0deg) rotate(5deg);
  transition: transform 2s;
}
.box-paragraph {
  font-family: arrowFONT;
  font-weight: 600;
  font-size: 20px;
  color: white;
  margin-top: 80px;
}
.box-header1 {
  font-family: arrowFONT;
  font-weight: 600;
  color: white;
  text-align: center;
}
.box-header2 {
  font-family: arrowFONT;
  font-weight: 600;
  color: white;
  text-align: center;
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
  .box-header1 {
    font-size: 20px;
  }
  .box-header2 {
    font-size: 20px;
  }
  .box-conditions1 {
    width: 300px;
    height: 300px;
  }
  .box-conditions2 {
    width: 300px;
    height: 300px;
  }
  .box-paragraph {
    margin-top: 30px;
    font-size: 16px;
  }
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
    top: 280px;
  }
}
@media all and (min-width: 1440px) {
  .box-paragraph {
    margin-top: 30px;
    font-size: 19px;
  }
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
  .box-conditions1 {
    width: 350px;
    height: 350px;
  }
  .box-conditions2 {
    width: 350px;
    height: 350px;
  }
}
@media all and (min-width: 1640px) {
  .next-img-box {
    position: absolute;
    right: 0;
    margin-top: -10px;
  }
  .next-img {
    width: 150px;
  }
  .box-conditions1 {
    width: 380px;
    height: 380px;
  }
  .box-conditions2 {
    width: 380px;
    height: 380px;
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
    margin-top: 45px;
  }
  .next-img {
    width: 150px;
  }
  .box-paragraph {
    margin-top: 30px;
    font-size: 25px;
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
  .box-conditions1 {
    width: 400px;
    height: 400px;
  }
  .box-conditions2 {
    width: 400px;
    height: 400px;
  }
}
</style>