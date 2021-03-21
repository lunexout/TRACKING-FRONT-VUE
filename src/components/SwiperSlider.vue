<template>
  <div class="container p-0" style="max-width: 1920px; margin-top: -98px">
        <div v-if='isSpinner' style="display: flex;">
      <div class="spinner-grow text-info" style="position: absolute; 
      top:30%; font-size: 300px; left: 48%; " role="status">
      </div>
            <div class="spinner-grow text-info" style="position: absolute; 
      top:30%; font-size: 300px; left: 49%; " role="status">
      </div>
            <div class="spinner-grow text-info" style="position: absolute; 
      top:30%; font-size: 300px; left: 50%; " role="status">
      </div>
      </div>
    <swiper
      v-else
      class="parallax-slider"
      :navigation="{ nextEl: '.nextArrow', prevEl: '.prevArrow' }"
      parallax
      grabCursor
      @swiper="onSwiperInitialized"
    >
      <div class="parallax-slider-navigation" style="display: none;">
        <div class="nav-indicator prevArrow">
          <div style="display: flex">
            <p id='goback' style="display: none;">უკან</p>
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
        <NavigationArrows :color='`white`' :lineColor='`white`' :toggle='true'/>
          <FirstSlide :image="image.imageUrl" />
        </div>
        <div
          v-if="image.id == 2"
          class="parallax-slide-image"
          :data-swiper-parallax="parallaxAmount"
          :data-swiper-parallax-opacity="0.5"
        > 

          <NavigationArrows :color='`black`' :lineColor='`black`'  :toggle='false' />
          <SecondSlide :image="image.imageUrl" />
        </div>
        <div
          v-if="image.id == 3"
          class="parallax-slide-image"
          :data-swiper-parallax="parallaxAmount"
          :data-swiper-parallax-opacity="0.5"
        >
          <NavigationArrows :color='`white`'  :lineColor='`white`'  :toggle='false'/>
          <ThirdSlide :image="image.imageUrl" />
        </div>
        <div
          v-if="image.id == 4"
          class="parallax-slide-image"
          :data-swiper-parallax="parallaxAmount"
          :data-swiper-parallax-opacity="0.5"
        >
          <NavigationArrows :color='`black`'  :lineColor='`#00A4E1`'  :toggle='false'/>
          <FourthSlide :image="image.imageUrl" />
        </div>
        <div
          v-if="image.id == 5"
          class="parallax-slide-image"
          :data-swiper-parallax="parallaxAmount"
          :data-swiper-parallax-opacity="0.5"
        >
          <NavigationArrows :color='`white`'  :lineColor='`#white`'  :toggle='false'/>
          <FifthSlide :image="image.imageUrl" />
        </div>
                <div
          v-if="image.id == 6"
          class="parallax-slide-image"
          :data-swiper-parallax="parallaxAmount"
          :data-swiper-parallax-opacity="0.5"
        >
          <NavigationArrows :color='`white`'  :lineColor='`#00A4E1`'  :toggle='false' :toggleNext='true'/>
          <SixSlide :image="image.imageUrl" />
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
import FourthSlide from './Slides/FourthSlide.vue'
import FifthSlide from './Slides/FifthSlide.vue'

import SixSlide from './Slides/SixSlide.vue'

import NavigationArrows from './NavigationArrows.vue'


export default {
  name: 'SwiperSlider',
  data() {
    return {
      navState: 1,
      parallaxSwiperWidth: 0,
      images: [
        { id: 1, imageUrl: require("../assets/images/image1.jpg") },
        { id: 2, imageUrl: require("../assets/images/image1.jpg") },
        { id: 3, imageUrl: require("../assets/images/image3.jpg") },
        { id: 4, imageUrl: require("../assets/images/image3.jpg") },
        { id: 5, imageUrl: require("../assets/images/image5.jpg") },
        { id: 6, imageUrl: require("../assets/images/image1.jpg") },
      ],
      isSpinner: true
    };
  },
  beforeMount() {
    this.isSpinner=true
  },
    mounted(){
    setTimeout(()=> {
this.isSpinner=false
    }, 1500)
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
    SecondSlide,ThirdSlide,FourthSlide,FifthSlide,
    SixSlide,
    NavigationArrows
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

@font-face {
  font-family: arrowFONT;
  src: url("./../fonts/mainpage/BPG Nateli Mtavruli Light.ttf");
}
/* @media all and(max-width: 1249px) {
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
} */
</style>
