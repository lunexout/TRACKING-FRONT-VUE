<template>
  <!-- <img :src="image" /> -->
  <SecondNavbar />
  <div style="background-color: white; width: 1920px; height: 1080px">
    <img src="./../../assets/clearance/left-svg.png" />
    <!-- <div class="next-img-box">
      <img class="next-img" src="./../../assets/clearance/left-svg.png" />
    </div> -->
  </div>
  <div class="right-svg-box">
    <img src="./../../assets/clearance/right-svg.jpg" />
  </div>
  <div class="truck-img-box">
    <img class="truck-img" src="./../../assets/clearance/truck.png" />
  </div>
  <h1 class="text-center about-us-text">დეკლარირება და განბაჟება</h1>
  <div class="text-center about-us-line"></div>

  <div
    class="container"
    style="position: absolute; left: 11.5%; top: 360px; max-width: 180%"
  >
    <div class="row" style="position: absolute; margin-top: -90px">
      <div class="mb-3">
        <p class="geo-font header-paragraph">
          დეკლარაცია უნდა შეივსოს ამანათის გამოგზავნიდან არაუგვიანეს 24 საათში.
          საბაჟოზე შესვლის მომენტისთვის თუ ამანათი არ<br />
          იქნება დეკლარებული, ამანათი მოხდება "პრობლემურ ნუსხაში" და
          გადაიგზავნება საბაჟო ექსპერტიზაზე, ღირებულების<br />
          დასადგებად.
        </p>
        <h4 class="mt-3 header-paragrap2">
          შედეგად ამანათს ვერ გაიტანთ მინიმუმ 5 სამუშაო დღის განმავლობაში
        </h4>
      </div>
    </div>
  </div>

  <div class="container accord-container">
    <div class="row">
      <div class="col-xl-12">
        <div class="accordion" id="accordion1">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button accord-btn"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                რა უნდა ვიცოდეთ განბაჟებაზე?
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show accord-box"
              aria-labelledby="headingOne"
              data-bs-parent="#accordion1"
            >
              <div class="accordion-body">
                <p class="mt-1 geo-font services-text">
                  1. განსაბაჟებელია ამანათი(ები) როდესაც ერთ მაღაზიაში შეძენილი
                  ნივთის რებულება, ერთეულის ან ჯამურად, აღემატება 300 ლარს.
                </p>
                <p class="mt-3 geo-font services-text">
                  2. 300კგ-ზე მეტი წონის ამანათები ექვემდებარება განბაჟებას
                  (ფასის მიუხედავად)
                </p>
                <p class="mt-3 geo-font services-text">
                  3. 5-ზე მეტი ერთგვაროვანი საქონელი ექვემდებარება განბაჟებას
                  (ფასის მიუხედავად)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-12 mt-3">
        <div class="accordion" id="accordion2">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button accord-btn"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="true"
                aria-controls="collapseTwo"
              >
                ფორმულის გამოთვლა
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse accord-box"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordion2"
            >
              <div class="accordion-body">Some text</div>
            </div>
          </div>
        </div>
        <!--  -->
        <div class="col-xl-12 mt-3">
          <!--  -->
          <div class="accordion" id="accordion3">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button
                  class="accordion-button accord-btn"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="true"
                  aria-controls="collapseThree"
                >
                  რა უნდა ვიცოდეთ განბაჟებაზე?
                </button>
              </h2>
              <div
                id="collapseThree"
                class="accordion-collapse collapse accord-box"
                aria-labelledby="headingThree"
                data-bs-parent="#accordion3"
              >
                <div class="accordion-body">Some text</div>
              </div>
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
    <p style="color: white; font-family: numericFONT; font-size: 20px">4/06</p>
  </div>
  <div class="number-slide-svg-box">
    <img class="slide-number-img" src="./../../assets/clearance/04.svg" />
  </div>
</template>

<script>
import SecondNavbar from "./../SecondNavbar.vue";
export default {
  name: "FourthSlide",
  props: ["image"],
  components: { SecondNavbar },
};
</script>

<style scoped>
.services-text {
  font-weight: bold;
  font-size: 17px;
}
.header-paragraph {
  font-weight: bold;
  font-size: 16px;
}
.header-paragrap2 {
  font-weight: bold;
  font-size: 16px;
  font-family: arrowFONT;
}
.accord-btn {
  /* font-family: arrowFONT;
  font-weight: bold;
  color: #00a8f0; */
}
.accord-container {
  position: absolute;
  left: 11.5%;
  top: 390px;
  max-width: 52%;
}
.accordion-button:not(.collapsed) {
  font-family: arrowFONT;
  font-weight: bold;
  color: #00a8f0;
  background-color: #fff;
  border: none;
  outline: none;
}
.accord-box {
  border: none;
  border-bottom-left-radius: 25px !important;
  border-bottom-right-radius: 25px !important;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
}
.accord-btn {
  font-family: arrowFONT;
  font-weight: bold;
  color: #00a8f0;
  border: none;
  border-top-left-radius: 25px !important;
  border-top-right-radius: 25px !important;
  box-shadow: rgba(17, 17, 0, 0.1) 0px 0px 20px;
}
.panel-body {
  width: 700px;
  overflow: hidden;
}
.accordion-button::after {
  flex-shrink: 0;
  width: 30px;
  height: 30px;
  margin-left: auto;
  content: "";
  background-image: url("./../../assets/mainpage/downarrow.svg");
  background-repeat: no-repeat;
  background-size: 40px;
  transition: transform 0.2s ease-in-out;
}
.accordion-body {
  max-height: 100px;
  overflow-y: scroll;
}
::-webkit-scrollbar {
  width: 3px;
}

::-webkit-scrollbar-track {
  border-radius: 2px;
}

::-webkit-scrollbar-thumb {
  background: #00a8f0;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #00a8f0;
}
.right-svg-box {
  height: 60%;
}
.truck-img-box {
  position: absolute;
  bottom: 40%;
  right: 4%;
}
.truck-img {
  width: auto;
  height: 200px;
}
.about-us-line {
  margin-top: -600px;
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
  font-size: 25px;
  top: 0;
  margin-top: 200px;
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
  bottom: 29%;
}
.number-slide-line {
  width: 30px;
  height: 3px;
  background-color: #029fd5;
  position: absolute;
  z-index: 55;
  right: 12%;
  bottom: 38%;
}
.slide-number-img {
  width: 200px;
  height: 200px;
}
.geo-font {
  font-family: arrowFONT;
  font-weight: bold;
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
  .accord-btn {
    font-family: arrowFONT;
    font-weight: bold;
    color: #00a8f0;
    border: none;
    border-top-left-radius: 25px !important;
    border-top-right-radius: 25px !important;
    box-shadow: rgba(17, 17, 0, 0.1) 0px 0px 20px;
  }
  .accordion-body {
    max-height: 150px;
    overflow-y: scroll;
  }
  .number-slide-box {
    position: absolute;
    z-index: 55;
    right: 90px;
    bottom: 27%;
  }
  .number-slide-svg-box {
    position: absolute;
    z-index: 55;
    right: 50px;
    bottom: 19%;
  }
  .number-slide-line {
    width: 40px;
    height: 4px;
    background-color: #029fd5;
    position: absolute;
    z-index: 55;
    right: 12%;
    bottom: 30%;
  }
  .slide-number-img {
    width: 240px;
    height: 240px;
  }
  .truck-img-box {
    bottom: 33%;
    right: -2%;
  }
  .truck-img {
    height: 280px;
  }
  .header-paragraph {
    font-size: 18px;
  }
  .header-paragraph2 {
    font-size: 19px;
  }
  .accord-container {
    top: 410px;
  }
}
@media all and (min-width: 1640px) {
  .services-text {
    font-size: 20px;
  }
  .accord-btn {
    font-size: 20px;
  }
  .truck-img-box {
    bottom: 27%;
    right: -1%;
  }
  .truck-img {
    height: 300px;
  }
  .number-slide-box {
    right: 7%;
    bottom: 19.5%;
  }
  .number-slide-svg-box {
    bottom: 9%;
  }
  .number-slide-line {
    width: 50px;
    height: 4px;
    right: 12.5%;
    bottom: 22.5%;
  }
  .slide-number-img {
    width: 300px;
    height: 300px;
  }
  .accord-container {
    top: 420px;
    max-width: 54%;
  }
  .accordion-body {
    max-height: 250px;
    overflow-y: scroll;
  }
  .header-paragraph {
    font-weight: bold;
    font-size: 23px;
  }
  .header-paragrap2 {
    font-size: 23px;
  }
  .accord-container {
    top: 430px;
  }
}
@media all and (min-width: 1740px) {
  .accord-container {
    top: 450px;
  }
  .accordion-body {
    max-height: 300px;
    overflow-y: scroll;
  }
  .truck-img-box {
    bottom: 23%;
    right: -1%;
  }
  .truck-img {
    height: 300px;
  }
  .number-slide-box {
    right: 7%;
    bottom: 14.5%;
  }
  .number-slide-svg-box {
    bottom: 4%;
  }
  .number-slide-line {
    width: 50px;
    height: 4px;
    right: 12.5%;
    bottom: 17.5%;
  }
  .slide-number-img {
    width: 300px;
    height: 300px;
  }
  .right-svg-box {
    height: 50%;
  }
  .accordion-body {
    max-height: 300px;
    overflow-y: scroll;
  }
  .header-paragraph {
    font-weight: bold;
    font-size: 25px;
  }
}
</style>