<template>
  <swiper
    class="parallax-slider"
    :navigation="{ nextEl: '.nextArrowInside', prevEl: '.prevArrowInside' }"
    parallax
    @swiper="onSwiperInitialized"
  >
    <swiper-slide class="parallax-slide" v-for="card in 12" :key="card">
      <div
        class="parallax-slide-image"
        :data-swiper-parallax="parallaxAmount"
        :data-swiper-parallax-opacity="0.5"
      >
        <AboutCard :choosedSlide="`${card}`" :numberOfSlides="`12`" />
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

import AboutCard from "./AboutCard.vue";

SwiperCore.use([Navigation, Parallax]);

export default {
  name: "AboutSlider",
  data() {
    return {
      navState: 1,
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
    AboutCard,
    SwiperSlide,
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
}
.parallax-slide {
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
}
.parallax-slide-image {
  margin: 0 auto;
}

@font-face {
  font-family: arrowFONT;
  src: url("./../../../fonts/mainpage/BPG Nateli Mtavruli Light.ttf");
}
</style>
