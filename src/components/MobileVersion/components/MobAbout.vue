<template>
  <h1 id='services' class="text-center header-about" style="margin-top: 270px">
    ჩვენს შესახებ
  </h1>
  <div class="header-line"></div>
  <!-- <div class="container" style="border: 1px solid red; z-index: 55; height: 1200px;"></div> -->

  <div class="container1 p-4 mt-4">
    <p class="about-paragraph">
      შპს "მეკო" ანხორციელებს როგორც ამანათების ასევე დიდი მოცულობის ტვირთის
      დროულ და უსაფრთხო ტრანსპორტირებას თურქეთიდან საქართველოში.<span
        style="color: #599deb"
        >1 კგ-ს ღირებულება არის 4$, დაანგარიშება ხდება იკგ-დან</span
      >
    </p>
  </div>

  <div class="info-card-cont">
    <div v-if="!isDeviceSmall" class="default-slider">
      <CardSlider />
    </div>
    <div v-else class="one-slider">
      <AboutSlider />
    </div>
  </div>
</template>

<script>
import CardSlider from "./../../CardSlider.vue";
import AboutSlider from "./AboutSlider.vue";
export default {
  name: "MobAbout",
  components: { CardSlider, AboutSlider },
  data() {
    return {
      isDeviceSmall: false,
      width: 0,
      height: 0,
    };
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  unmounted() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.width = window.innerWidth;
      if (this.width <= 1024) {
        this.isDeviceSmall = true;
      } else {
        this.isDeviceSmall = false;
      }
    },
  },
};
</script>

<style scoped>
.info-card-cont {
  max-width: 700px;
  margin: 0 auto;
}
.header-about {
  z-index: 2;
  color: black;
  font-family: arrowFONT;
  font-weight: bold;
  font-size: 25px;
  margin-top: 150px;
}
.container1 {
  max-width: 800px;
  margin: 0 auto;
}
.default-slider {
  max-width: 900px;
  margin: 0 auto;
}
.one-slider {
  /* max-width: 480px; */
  max-width: 340px;
  margin: 0 auto;
}
.header-line {
  width: 60px;
  height: 4px;
  background-color: #19a5db;
  z-index: 2;
  margin: 0 auto;
}
.about-paragraph {
  font-family: arrowFONT;
  font-size: 17px;
  font-weight: bold;
  line-height: 1.9;
  text-align: left;
}
@media all and (max-width: 1024px) {
  .one-slider {
    /* max-width: 480px; */
    max-width: 440px;
  }
}
@media all and (max-width: 768px) {
  .one-slider {
    /* max-width: 480px; */
    max-width: 340px;
  }
}
</style>