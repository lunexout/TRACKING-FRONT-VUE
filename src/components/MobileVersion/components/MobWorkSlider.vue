<template>
  <swiper
    style="max-width: 900px"
    class="parallax-slider"
    :navigation="{ nextEl: '.nextArrowInside', prevEl: '.prevArrowInside' }"
    parallax
    @swiper="onSwiperInitialized"
  >
    <swiper-slide class="parallax-slide" v-for="card in 2" :key="card">
      <div
        v-if="card == 1"
        class="parallax-slide-image"
        :data-swiper-parallax="parallaxAmount"
        :data-swiper-parallax-opacity="0.5"
      >
        <WorkTextCard />
      </div>
      <div
        v-if="card == 2"
        class="parallax-slide-image"
        :data-swiper-parallax="parallaxAmount"
        :data-swiper-parallax-opacity="0.5"
      >
        <WorkCalculate />
      </div>
    </swiper-slide>
  </swiper>
  <!-- </div> -->
</template>

<script>
import SwiperCore, { Navigation, Parallax } from "swiper";
// <font-awesome-icon :icon="['fas', 'chevron-right']" />
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

import WorkTextCard from "./WorkTextCard.vue";
import WorkCalculate from "./WorkCalculate.vue";
SwiperCore.use([Navigation, Parallax]);

export default {
  name: "WorkSlider",
  data() {
    return {
      parallaxSwiperWidth: 0,
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
    WorkTextCard,
    WorkCalculate,
  },
  methods: {
    onSwiperInitialized(swiper) {
      this.parallaxSwiperWidth = swiper.width;
    },
  },
};
</script>

<style scoped>
.parallax-slider:hover {
  cursor: default;
  /* position: relative;d */
}
.parallax-slide {
  /* height: 100% !important; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
}
.parallax-slide-image {
  margin: 0 auto;
  /* height: 100%;
  width: 100%; */
  width: 100%;
  /* position: absolute;
 top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;  */
}

@font-face {
  font-family: arrowFONT;
  src: url("./../../../fonts/mainpage/BPG Nateli Mtavruli Light.ttf");
}
</style>
