<template>
  <swiper
    class="parallax-slider"
    :navigation="{ nextEl: '.nextArrowInside', prevEl: '.prevArrowInside' }"
    parallax
    @swiper="onSwiperInitialized"
  >
    <swiper-slide
      class="parallax-slide"
      v-for="card in cards"
      :key="card.id"
    >
      <div
        v-if="card.id == 1"
        class="parallax-slide-image"
        :data-swiper-parallax="parallaxAmount"
        :data-swiper-parallax-opacity="0.5"
      >
        <CardBox :choosedSlide='`1`' :numberOfSlides='`6`' />
      </div>
            <div
        v-if="card.id == 2"
        class="parallax-slide-image"
        :data-swiper-parallax="parallaxAmount"
        :data-swiper-parallax-opacity="0.5"
      >
        <CardBox :choosedSlide='`2`' :numberOfSlides='`6`' />
      </div>
                  <div
        v-if="card.id == 3"
        class="parallax-slide-image"
        :data-swiper-parallax="parallaxAmount"
        :data-swiper-parallax-opacity="0.5"
      >
        <CardBox :choosedSlide='`3`' :numberOfSlides='`6`' />
      </div>
                  <div
        v-if="card.id == 4"
        class="parallax-slide-image"
        :data-swiper-parallax="parallaxAmount"
        :data-swiper-parallax-opacity="0.5"
      >
        <CardBox :choosedSlide='`4`' :numberOfSlides='`6`' />
      </div>
                  <div
        v-if="card.id == 5"
        class="parallax-slide-image"
        :data-swiper-parallax="parallaxAmount"
        :data-swiper-parallax-opacity="0.5"
      >
        <CardBox :choosedSlide='`5`' :numberOfSlides='`6`' />
      </div>
                  <div
        v-if="card.id == 6"
        class="parallax-slide-image"
        :data-swiper-parallax="parallaxAmount"
        :data-swiper-parallax-opacity="0.5"
      >
        <CardBox :choosedSlide='`6`' :numberOfSlides='`6`' />
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

import CardBox from './../components/CardBox.vue'

SwiperCore.use([Navigation, Parallax]);

export default {
  name: "CardSlider",
  data() {
    return {
      navState: 1,
      parallaxSwiperWidth: 0,
      cards: [
        {id: 1},{id:2},{id: 3},{id: 4},{id: 5},{id: 6}
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
    CardBox,
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
  /* height: 100%;
  width: 100%; */
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
  src: url("./../fonts/mainpage/BPG Nateli Mtavruli Light.ttf");
}

</style>
