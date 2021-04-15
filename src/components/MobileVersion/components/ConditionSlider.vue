<template>
  <div class="container p-0" id="conditions" style="max-width: 900px">
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-slide-to="2"
          aria-label="Slide 3"
          class="carousel-line"
        ></button>
        <div class="numeric-div">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            aria-current="true"
            class="numerics"
          >
            01
          </button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-current="true"
            class="numerics"
          >
            02
          </button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-current="true"
            class="numerics"
          >
            03
          </button>
        </div>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="./../../../assets/images/image3.jpg"
            class="d-block w-100"
            style="height: 500px"
            alt="..."
          />
          <h1
            class="centered text-white"
            style="font-family: arrowFONT; margin-top: -180px"
          >
            პირობები
          </h1>
          <div class="centered c1"></div>
          <div class="conditions-main-box">
            <div class="conditions-inside-box">
              <img
                src="./../../../assets/conditions/p01.svg"
                class="conditions-img"
                alt="Condition svg"
              />
            </div>
          </div>
          <p class="conditions-paragraph">
            შპს "მეკო" ანხორციელებს როგორც ამანათების ასევე დიდი მოცულობის
            ტვირთის დროულ და უსაფრთხო<br />
            ტრანსპორტირებას თურქეთიდან საქართველოში.<br />
            1კგ-ს ღირებულება არის 4$, დაანგარიშება ხდება იკგ-დან.
          </p>
        </div>
        <div class="carousel-item">
          <img
            src="./../../../assets/images/image3.jpg"
            class="d-block w-100"
            style="height: 500px"
            alt="..."
          />
          <h1
            class="centered text-white"
            style="font-family: arrowFONT; margin-top: -180px"
          >
            პირობები
          </h1>
          <div class="centered c1"></div>
          <div class="conditions-main-box">
            <div class="conditions-inside-box">
              <img
                src="./../../../assets/conditions/p02.svg"
                class="conditions-img"
              />
            </div>
          </div>
          <p class="conditions-paragraph">
            შპს "მეკო" ანხორციელებს როგორც ამანათების ასევე დიდი მოცულობის
            ტვირთის დროულ და უსაფრთხო<br />
            ტრანსპორტირებას თურქეთიდან საქართველოში.<br />
            1კგ-ს ღირებულება არის 4$, დაანგარიშება ხდება იკგ-დან.
          </p>
        </div>
        <div class="carousel-item">
          <img
            src="./../../../assets/images/image3.jpg"
            class="d-block w-100"
            style="height: 500px"
            alt="..."
          />
          <h1
            class="centered text-white"
            style="font-family: arrowFONT; margin-top: -180px"
          >
            პირობები
          </h1>
          <div class="centered c1"></div>
          <div class="conditions-main-box">
            <div class="conditions-inside-box">
              <img
                src="./../../../assets/conditions/p03.svg"
                class="conditions-img"
              />
            </div>
          </div>
          <p class="conditions-paragraph">
            შპს "მეკო" ანხორციელებს როგორც ამანათების ასევე დიდი მოცულობის
            ტვირთის დროულ და უსაფრთხო<br />
            ტრანსპორტირებას თურქეთიდან საქართველოში.<br />
            1კგ-ს ღირებულება არის 4$, დაანგარიშება ხდება იკგ-დან.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ConditionSvg1 from "./../../../assets/conditions/p01.svg";
import ConditionSvg2 from "./../../../assets/conditions/p02.svg";
import ConditionSvg3 from "./../../../assets/conditions/p03.svg";

export default {
  name: "ConditionSlider",
  data() {
    return {
      linkk: [ConditionSvg1, ConditionSvg2, ConditionSvg3],
    };
  },
};
</script>

<style scoped>
.numeric-div {
  margin: 0 auto;
  text-align: center;
  width: 100%;
  position: absolute;
  margin-top: -30px;
  z-index: 555;
  color: white;
  font-size: 20px;
  font-family: arrowFONT;
}
.numerics {
  color: white !important;
  height: 22px;
  font-weight: bold;
  background-color: transparent;
}
.c1 {
  font-family: arrowFONT;
  color: red;
  margin-top: -155px;
  width: 50px;
  height: 3px;
  background-color: #10bdfb;
}
.carousel-line {
  position: absolute;
  width: 100%;
  border: none;
  outline: none;
  cursor: none;
  z-index: -1;
  margin-top: 12px;
  height: 2px;
  background-color: gray;
}
.conditions-main-box {
  margin-top: -80px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.conditions-img {
  margin-top: -30px;
  margin-left: -25px;
  width: 50px;
  height: 50px;
}

.conditions-main-box {
  width: 100px;
  height: 100px;
  border: 35px solid #254565;
  border-radius: 100px;
  background-color: transparent;
  padding: 30px;
}
.conditions-paragraph {
  position: absolute;
  margin-top: -290px;
  color: white;
  font-family: arrowFONT;
  padding: 25px;
  font-size: 18px;
  text-align: left;
}
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.carousel-indicators .active {
  opacity: 1;
  background-color: #10bdfb !important;
  height: 4px !important;
}
.carousel-indicators [data-bs-target] {
  background-color: gray;
  opacity: 1;
  text-indent: 0;
  height: 0px;
}
</style>