<template>
  <div class="container p-0" style="max-width: 1920px; margin-top: -98px">
    <swiper
      class="parallax-slider"
      :navigation="{ nextEl: '.nextArrow', prevEl: '.prevArrow' }"
      parallax
      grabCursor
      @swiper="onSwiperInitialized"
    >
      <div class="parallax-slider-navigation">
        <div class="nav-indicator prevArrow">
          <div style="display: flex">
            <p>უკან</p>
            <hr
              style="
                background-color: white;
                color: white;
                width: 35px;
                height: 2px;
                z-index: 55;
                margin-left: 15px;
              "
            />
          </div>
        </div>
        <div class="nav-indicator nextArrow">
          <div style="display: flex">
            <hr
              style="
                background-color: white;
                color: white;
                width: 35px;
                height: 2px;
                z-index: 55;
                margin-right: 15px;
              "
            />
            <p>შემდეგი</p>
          </div>
        </div>
      </div>
      <swiper-slide
        class="parallax-slide"
        v-for="image in images"
        :key="image.id"
      >
        <div
          class="parallax-slide-image"
          :data-swiper-parallax="parallaxAmount"
          :data-swiper-parallax-opacity="0.5"
        >
          <img :src="image.imageUrl" />
          <h1
            class="text-center"
            style="
              position: absolute;
              z-index: 555;
              color: white;
              font-family: arrowFONT;
              font-weight: bold;
              font-size: 50px;
              margin-top: -290px;
            "
          >
            ამანათების ტრანსპორტირება<br />
            თურქეთის ნებისმიერი წერტილიდან
          </h1>
          <div
            class="text-center"
            style="
              margin-top: -150px;
              margin-left: -20px;
              position: absolute;
              width: 60px;
              height: 4px;
              background-color: #19a5db;
              z-index: 55;
            "
          ></div>

          <div
            class="text-center registerContainer"
            style="position: absolute; margin-left: -20px"
          >
            <button class="registreBtn">რეგისტრაცია</button>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
// swiper core
import SwiperCore, { Navigation, Parallax } from "swiper";
// <font-awesome-icon :icon="['fas', 'chevron-right']" />
// swiper vue
import { Swiper, SwiperSlide } from "swiper/vue";

// import swiper css
import "swiper/swiper.scss";

// import css for components
// navigation
import "swiper/components/navigation/navigation.scss";

// font awesome icons

// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

SwiperCore.use([Navigation, Parallax]);

export default {
  data() {
    return {
      parallaxSwiperWidth: 0,
      images: [
        { id: 1, imageUrl: require("../assets/images/image1.jpg") },
        { id: 2, imageUrl: require("../assets/images/image2.jpg") },
        { id: 3, imageUrl: require("../assets/images/image3.jpg") },
      ],
    };
  },
  computed: {
    parallaxAmount() {
      return this.parallaxSwiperWidth * 0.5;
    },
  },
  components: {
    Swiper,
    SwiperSlide,
    // FontAwesomeIcon,
  },
  methods: {
    onSwiperInitialized(swiper) {
      this.parallaxSwiperWidth = swiper.width;
    },
  },
};
</script>

<style scoped>
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
.parallax-slider {
  position: relative;
}
.parallax-slide {
  height: 1080px !important;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.parallax-slider-navigation {
  position: absolute;
  top: 50%;
  z-index: 2;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  justify-content: space-between;
  height: 0;
}

.parallax-slide-image {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.nextArrow {
  margin-right: 20px;
}
.prevArrow {
  margin-left: 20px;
}
.nav-indicator {
  color: white;
  font-family: arrowFONT;
  font-size: 25px;
  /* height: 160px;
  width: 140px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: #6b77f6;
  color: #ffffff;
  border-radius: 40px;
  cursor: pointer;
  position: relative;
  transform: translateY(-50%); */
}
@font-face {
  font-family: arrowFONT;
  src: url("./../fonts/mainpage/BPG Nateli Mtavruli Light.ttf");
}
</style>
