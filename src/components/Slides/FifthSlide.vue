<template>
  <Navbar :image="true" :btnColor="`white`" :textColor="`white !important;`" />
  <img class="main-image" :src="image" />
  <div class="left-svg-box">
    <img src="./../../assets/howworks/left-svg.png" />
  </div>
  <h1 class="text-center header-first-slide">როგორ მუშაობს</h1>
  <div class="text-center header-line"></div>

  <div class="container">
    <div class="row">
      <div class="col-xl-7">
        <p class="how-works-paragraph">
          ტრანსპორტირების ღირებულება დამოკიდებულია<br />
          რეალური და მოცულობითი წონის თანაფარდობაზე<br /><br />
          მოცულობითი წონა შემდეგნაირად გამოითველბა:<br />
          <span class="how-works-large">სიგრძე * სიგანე * სიმაღლე : 6000</span
          ><br />
          <span class="how-works-large"
            >მაგ: 20სმ*30სმ*20სმ=12000/6000=2კგ</span
          >
          <br /><br />
          რეალური წონა: რეალური წონა იანგარიშება ამანათის<br />
          რეალური წონის შესაბამისად, ანუ რასაც ამანათი<br />
          იწონის ფიზიკურად.
          <br /><br />
          თუ მოცულობითი წონა აჭარბებს რეალურს, <br />
          ღირებულება დამოკიდებული იქნება მოცულობით<br />
          წონაზე!
          <br /><br />
          <span class="how-works-large">1კგ-ს ღირებულება არის 4$,</span><br />
          დაანგარიშება ხდება იკგ-დან.
        </p>
      </div>
      <div
        class="col-xl-5"
        style="background-color: gray; padding: 5px; max-width: 400px"
      >
        <div style="background-color: white">
          <form>
            <h5
              class="text-center"
              style="
                font-size: 18px;
                font-weight: bold;
                color: black;
                font-family: arrowFONT;
                padding-top: 15px;
              "
            >
              ტრანსპორტირების<br />
              ღირებულების დათვლა:
            </h5>
            <h4
              class="text-center"
              style="
                font-size: 23px;
                font-weight: bold;
                color: #11bdf7;
                font-family: arrowFONT;
              "
            >
              წონის კალკულატორი
            </h4>

            <div class="row">
              <div class="col-xl-3 text-right">
                <label class="input-label">სიგრძე</label>
                <label class="input-label">სიგანე</label>
                <label class="input-label">სიმაღლე</label>
              </div>
              <div class="col-xl-9">
                <input
                  v-model="sigr"
                  @change='calc'
                  class="input-box mt-3"
                  type="number"
                  placeholder=""
                /><br />
                <input
                  v-model="siga"
                  @change='calc'
                  class="input-box mt-3"
                  type="number"
                  placeholder=""
                /><br />
                <input
                  v-model="sima"
                  @change='calc'
                  class="input-box mt-3"
                  type="number"
                  placeholder=""
                />
                <!-- <button @click.prevent='calc'>calc</button>
                            <input :value='total'>{{answer}}/> -->
              </div>
            </div>
            <div
              class="mt-4"
              style="
                margin-left: 20px;
                display: flex;
                justify-content: space-between;
                width: 350px;
                height: 50px;
                border: 1px solid #029fd5;
              "
            >
              <h1 class="p-2 price-text">{{kg}}კგ</h1>
              <h1 class="p-2 price-text">{{price}}$</h1>
            </div>

            <!-- <input :value="answer" /> -->

            <button
              @keyup.enter="calc"
              @click.prevent="calc"
              class="registreBtn mb-4"
            >
              რეგისტრაცია
              <!-- <div> -->
              <div class="register-arrow-box">
                <img
                  style="width: 17px; height: 17x; margin-top: 10px"
                  src="./../../assets/mainpage/right-arrow.svg"
                />
                <!-- </div> -->
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>

  <div class="slide-number-line">
    <div class="slide-line-style"></div>
  </div>
  <div class="carousel-number-text">
    <p class="carousel-number-font">5/06</p>
  </div>
  <div>
    <img class="slide-number-img" src="./../../assets/howworks/05.svg" />
  </div>
</template>

    <script>
import Navbar from "./../Navbar.vue";
export default {
  name: "FifthSlide",
  props: ["image"],
  components: { Navbar },
  data() {
    return {
      sigr: 0,
      siga: 0,
      sima: 0,
      answer: 0,
      kg: 0,
      price: 0,
    };
  },
  methods: {
    calc() {
      if(this.sigr != 0 && this.siga != 0 && this.sima != 0){
        this.kg =
        (parseInt(this.sigr) * parseInt(this.siga) * parseInt(this.sima)) /
        6000;

        this.price = this.kg * 4
      }
      // let calculatedTotal = this.sigr.toInt() + this.siga.toInt();
      // this.answer = calculatedTotal;

      // return calculatedTotal;
    },
  },
};
</script>

<style scoped>
/* .registerContainer {
    text-align: center;
    height: 82px;
    margin-top: 10px;
  } */
.registreBtn {
  border-radius: 70px;
  outline: none;
  padding: 9px;
  width: 350px;
  margin-top: 40px;
  margin-left: 20px;
  font-family: arrowFONT;
  font-weight: bold;
  height: 60px;
  text-align: center;
  font-size: 22px;
  color: white;
  background-color: #009ce7;
  border: none;
}
.how-works-large {
  font-size: 22px;
  font-weight: bold;
  font-family: arrowFONT;
}
.how-works-paragraph {
  font-weight: 500;
  z-index: 56;
  position: absolute;
  font-size: 17px;
  font-family: arrowFONT;
  color: white;
}
.price-text {
  font-size: 30px;
  font-family: arrowFONT;
  font-weight: bolder;
  color: #009ce7;
}
.input-label {
  margin-left: 20px;
  margin-top: 28px;
  font-size: 18px;
  font-family: arrowFONT;
  color: #009ce7;
  font-weight: bold;
}
.input-box {
  padding: 8px;
  outline: none;
  border: 1px solid #11bdf7;
  margin-left: 20px;
  width: 87%;
}
.container {
  position: absolute;
  left: 11.5%;
  top: 240px;
  max-width: 70%;
  /* border: 1px solid red; */
}
.left-svg-box {
  /* height: 30%; */
  /* width: 200px;
  height: 300px; */
  z-index: 55;
  position: absolute;
  left: 0;
  top: 0;
}
.register-arrow-box {
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: #11bdf7;
  margin-left: 290px;
  margin-top: -47px;
}
.slide-number-line {
  position: absolute;
  z-index: 55;
  right: 140px;
  bottom: 39.5%;
}
.carousel-number-font {
  color: white;
  font-family: numericFONT;
  font-size: 20px;
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
  right: 43px;
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

@media all and (min-width: 1249px) {
  .slide-number-line {
    right: 115px;
    bottom: 38%;
  }

  .slide-number-img {
    width: 220px;
    height: 220px;
    right: 10px;
    bottom: 28%;
  }
  .carousel-number-text {
    right: 35px;
    bottom: 35.5%;
  }
  .carousel-number-font {
    font-size: 15px;
  }
  .slide-line-style {
    width: 50px;
    height: 3px;
    background-color: white;
  }
  .header-first-slide {
    font-size: 24px;
    margin-top: -680px;
  }
  .header-line {
    margin-top: -640px;
    margin-left: 10px;
    height: 3px;
  }
  /* .registerContainer {
    text-align: center;
    height: 82px;
    margin-top: 10px;
  } */
  .registreBtn {
    padding: 9px;
    height: 60px;
    font-size: 28px;
  }
}
@media all and (min-width: 1440px) {
  .how-works-paragraph {
    font-size: 20px;
  }
  .carousel-number-font {
    font-size: 18px;
  }
  .slide-line-style {
    width: 50px;
    height: 3px;
    background-color: white;
  }
  .slide-number-line {
    bottom: 30.5%;
    right: 8.5%;
  }
  .slide-number-img {
    width: 240px;
    height: 240px;
    position: absolute;
    z-index: 55;
    right: 15px;
    bottom: 19.7%;
  }
  .carousel-number-text {
    position: absolute;
    z-index: 55;
    right: 45px;
    bottom: 28%;
  }
  .header-first-slide {
    font-size: 30px;
    margin-top: -670px;
  }
  .header-line {
    margin-top: -630px;
    margin-left: -20px;
    width: 60px;
    height: 3px;
  }
  /* .registerContainer {
    text-align: center;
    height: 82px;
    margin-top: 200px;
  } */
  .registreBtn {
    height: 60px;
    font-size: 29px;
  }
  .register-arrow-box {
    margin-top: -48px;
  }
}
@media all and (min-width: 1640px) {
  .how-works-paragraph {
    font-size: 23px;
  }
  .header-first-slide {
    font-family: arrowFONT;
    font-weight: bold;
    font-size: 35px;
    margin-top: -630px;
  }
  .header-line {
    margin-top: -590px;
    margin-left: 13px;
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
    right: 9.5%;
  }

  .slide-number-img {
    width: 300px;
    height: 300px;
    position: absolute;
    z-index: 55;
    right: 20px;
    bottom: 10%;
  }
  .carousel-number-text {
    position: absolute;
    z-index: 55;
    right: 55px;
    bottom: 21%;
  }
  .container {
    margin-top: 40px;
  }
}
@media all and (min-width: 1740px) {
  .register-arrow-box {
    margin-left: 290px;
    margin-top: -46px;
  }
  .header-first-slide {
    font-size: 45px;
    margin-top: -590px;
  }
  .header-line {
    margin-top: -540px;
    margin-left: 13px;
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
    right: 10%;
  }

  .slide-number-img {
    width: 300px;
    height: 300px;
    position: absolute;
    z-index: 55;
    right: 40px;
    bottom: 7%;
  }
  .carousel-number-text {
    position: absolute;
    z-index: 55;
    right: 70px;
    bottom: 18%;
  }
  .container {
    margin-top: 80px;
  }
}
</style>