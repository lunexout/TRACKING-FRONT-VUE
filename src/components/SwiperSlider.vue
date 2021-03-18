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
            <p id='goback' style='color: white;'>უკან</p>
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
          v-if="image.id == 1"
          class="parallax-slide-image"
          :data-swiper-parallax="parallaxAmount"
          :data-swiper-parallax-opacity="0.5"
        >
          <FirstSlide :image="image.imageUrl" />
        </div>
        <div
          v-if="image.id == 2 && test2(bool)"
          class="parallax-slide-image"
          :data-swiper-parallax="parallaxAmount"
          :data-swiper-parallax-opacity="0.5"
        >
          <SecondSlide :image="image.imageUrl" />
        </div>
        <div
          v-if="image.id == 3"
          class="parallax-slide-image"
          :data-swiper-parallax="parallaxAmount"
          :data-swiper-parallax-opacity="0.5"
        >
          <ThirdSlide :image="image.imageUrl" />
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

import FirstSlide from "./Slides/FirstSlide.vue";
import SecondSlide from "./Slides/SecondSlide.vue";
import ThirdSlide from "./Slides/ThirdSlide.vue";
export default {
  data() {
    return {
      navState: 1,
      parallaxSwiperWidth: 0,
      images: [
        { id: 1, imageUrl: require("../assets/images/image1.jpg") },
        { id: 2, imageUrl: require("../assets/images/image1.jpg") },
        { id: 3, imageUrl: require("../assets/images/image3.jpg") },
      ],
    };
  },
  computed: {
    parallaxAmount() {
      return this.parallaxSwiperWidth * 0.5;
    },
    // set(){
    //   console.log(1);
    // }
  },
  components: {
    Swiper,
    SwiperSlide,
    FirstSlide,
    SecondSlide,ThirdSlide
    // FontAwesomeIcon,
  },
  methods: {
    onSwiperInitialized(swiper) {
      this.parallaxSwiperWidth = swiper.width;
    },
    test2: function(bool) { 
      // document.getElementById('goback').style.color = 'black'
      console.log(document);
    return bool;}
  },
};
</script>

<style scoped>
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
  top:40%;
  z-index: 2;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  justify-content: space-between;
  height: 0;
}

.parallax-slide-image {
  /* max-width: 100%;
    height: auto;
    width: auto; */
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
@media all and(max-width: 1249px) {
  .parallax-slider-navigation {
      top:20%;
  }
}
@media all and (min-width: 1440px) {
.parallax-slider-navigation {
    top:40%;
    }
}
@media all and (min-width: 1640px) {
  .parallax-slider-navigation {
      top:45%;
    }
}
@media all and (min-width: 1740px) {
  .parallax-slider-navigation {
    top:50%;
    }
}
</style>
