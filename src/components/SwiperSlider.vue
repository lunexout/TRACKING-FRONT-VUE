<template>
  <div
    v-if="isMenuOpen"
    class="animate__animated animate__fadeInDown main-menu-cont"
  >
    <button @click="() => (isMenuOpen = false)" class="close-button">X</button>
    <div class="container" style="margin-top: 5%; max-width: 1300px">
      <div class="row">
        <div class="col-xl-4">
          <div class="container12" @click="next(1)">
            <div class="box">
              <div class="text-center">
                <img
                  width="50px;"
                  style="width: 100px; margin-top: 10%"
                  src="./../assets/menu-images/main.svg"
                  alt="Main icon"
                />
              </div>
              <h4 class="text-center menu-txt">მთავარი</h4>
            </div>
          </div>
        </div>
        <div class="col-xl-4">
          <div class="container12" @click="next(2)">
            <div class="box">
              <div class="text-center">
                <img
                  width="50px;"
                  style="width: 100px; margin-top: 10%"
                  src="./../assets/conditions/p02.svg"
                  alt="Main icon"
                />
              </div>
              <h4 class="text-center menu-txt">ჩვენი სერვისები</h4>
            </div>
          </div>
        </div>
        <div class="col-xl-4">
          <div class="container12" @click="next(3)">
            <div class="box">
              <div class="text-center">
                <img
                  width="50px;"
                  style="width: 100px; margin-top: 10%"
                  src="./../assets/conditions/p03.svg"
                  alt="Main icon"
                />
              </div>
              <h4 class="text-center menu-txt">პირობები</h4>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-4">
          <div class="container12" @click="next(4)">
            <div class="box-second-row">
              <div class="text-center">
                <img
                  width="50px;"
                  style="width: 100px; margin-top: 10%"
                  src="./../assets/menu-images/clearance.svg"
                  alt="Main icon"
                />
              </div>
              <h4 class="text-center menu-txt">დეკლარირება და განბაჟება</h4>
            </div>
          </div>
        </div>
        <div class="col-xl-4">
          <div class="container12" @click="next(5)">
            <div class="box-second-row">
              <div class="text-center">
                <img
                  width="50px;"
                  style="width: 100px; margin-top: 10%"
                  src="./../assets/menu-images/howwroks.svg"
                  alt="Main icon"
                />
              </div>
              <h4 class="text-center menu-txt">როგორ მუშაობს</h4>
            </div>
          </div>
        </div>
        <div class="col-xl-4">
          <div class="container12" @click="next(6)">
            <div class="box-second-row">
              <div class="text-center">
                <img
                  width="50px;"
                  style="width: 100px; margin-top: 10%"
                  src="./../assets/menu-images/contact.svg"
                  alt="Main icon"
                />
              </div>
              <h4 class="text-center menu-txt">კონტაქტი</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <ShowRegisterModal v-if="isRegisterModalOpen" />
  <ShowLoginModal v-if="isLoginModalOpen" />
  
  <Spinner v-if="isSpinner" />
  <div v-else class="container p-0" style="max-width: 1920px; margin-top: -98px">
      
    <swiper
      class="parallax-slider"
      :navigation="{ nextEl: '.nextArrow', prevEl: '.prevArrow' }"
      parallax
      grabCursor
      @swiper="onSwiperInitialized"
    >
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
          <NavigationArrows
            :color="`white`"
            :lineColor="`white`"
            :toggle="true"
          />
          <FirstSlide :image="image.imageUrl" />
        </div>
        <div
          v-if="image.id == 2"
          class="parallax-slide-image"
          :data-swiper-parallax="parallaxAmount"
          :data-swiper-parallax-opacity="0.5"
        >
          <NavigationArrows
            :color="`black`"
            :lineColor="`black`"
            :toggle="false"
          />
          <SecondSlide :image="image.imageUrl" />
        </div>
        <div
          v-if="image.id == 3"
          class="parallax-slide-image"
          :data-swiper-parallax="parallaxAmount"
          :data-swiper-parallax-opacity="0.5"
        >
          <NavigationArrows
            :color="`white`"
            :lineColor="`white`"
            :toggle="false"
          />
          <ThirdSlide :image="image.imageUrl" />
        </div>
        <div
          v-if="image.id == 4"
          class="parallax-slide-image"
          :data-swiper-parallax="parallaxAmount"
          :data-swiper-parallax-opacity="0.5"
        >
          <NavigationArrows
            :color="`black`"
            :lineColor="`#00A4E1`"
            :toggle="false"
          />
          <FourthSlide :image="image.imageUrl" />
        </div>
        <div
          v-if="image.id == 5"
          class="parallax-slide-image"
          :data-swiper-parallax="parallaxAmount"
          :data-swiper-parallax-opacity="0.5"
        >
          <NavigationArrows
            :color="`white`"
            :lineColor="`#white`"
            :toggle="false"
          />
          <FifthSlide :image="image.imageUrl" />
        </div>
        <div
          v-if="image.id == 6"
          class="parallax-slide-image"
          :data-swiper-parallax="parallaxAmount"
          :data-swiper-parallax-opacity="0.5"
        >
          <NavigationArrows
            :color="`white`"
            :lineColor="`#00A4E1`"
            :toggle="false"
            :toggleNext="true"
          />
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
import FourthSlide from "./Slides/FourthSlide.vue";
import FifthSlide from "./Slides/FifthSlide.vue";

import SixSlide from "./Slides/SixSlide.vue";

import NavigationArrows from "./NavigationArrows.vue";

import ShowRegisterModal from "./ShowRegisterModal.vue";
import ShowLoginModal from "./ShowLoginModal.vue";

import Spinner from "./Spinner.vue";

// import { mapGetters } from "vuex";
export default {
  name: "SwiperSlider",
  data() {
    return {
      isRegisterModalOpen: false,
      isLoginModalOpen: false,
      isMenuOpen: false,
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
      isSpinner: true,
    };
  },
  beforeMount() {
    this.isSpinner = true;
  },
  mounted() {
    // setTimeout(() => {
      this.isSpinner = false;
    // }, 1500);

    this.emitter.on("openregistermodal", () => {
      this.isRegisterModalOpen = true;
    });
    this.emitter.on("closeregistermodal", () => {
      this.isRegisterModalOpen = false;
    });
    this.emitter.on("openloginmodal", () => {
      this.isLoginModalOpen = true;
    });
    this.emitter.on("closeloginmodal", () => {
      this.isLoginModalOpen = false;
    });
    this.emitter.on("showmenu", () => {
      this.isMenuOpen = true;
    });
  },
  computed: {
    parallaxAmount() {
      return this.parallaxSwiperWidth * 0.5;
    },
  },
  components: {
    Swiper,
    SwiperSlide,
    FirstSlide,
    SecondSlide,
    ThirdSlide,
    FourthSlide,
    FifthSlide,
    SixSlide,
    NavigationArrows,
    ShowRegisterModal,
    ShowLoginModal,
    Spinner,
    // FontAwesomeIcon,
  },
  methods: {
    onSwiperInitialized(swiper) {
      this.parallaxSwiperWidth = swiper.width;
    },
    next(where) {
      this.isMenuOpen = false;
      for (let n = 1; n <= 6; n++) {
        document.getElementById("prevArrow").click();
      }
      for (let n = 1; n <= where - 1; n++) {
        document.getElementById("nextArrow").click();
      }
    },
  },
};
</script>

<style scoped>
.main-menu-cont {
  position: absolute;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0396db;
}
.menu-txt {
  color: white;
  margin-top: 10%;
  font-family: arrowFONT;
  font-weight: bold;
}
.close-button {
  position: absolute;
  top: 1%;
  left: 2%;
  border: none;
  background-color: transparent;
  outline: none;
  font-size: 50px;
  color: white;
  font-family: arrowFONT;
  font-weight: bolder;
}
.container12 {
  display: flex;
}
.box {
  background-image: linear-gradient(white, white), linear-gradient(white, white),
    linear-gradient(white, white), linear-gradient(white, white),
    linear-gradient(#0271da, #0271da);
  background-repeat: no-repeat;
  background-size: 1px 7%, 5% 1px, 1px 7%, 5% 1px, calc(100%) calc(100%);
  background-position: left bottom, left bottom, right top, right top, 0px 0px;

  height: 230px;
  width: 380px;
  margin: 20px;

  transition: background-size 2s;
}
.box:hover {
  background-size: 1px 100%, 100% 2px, 1px 100%, 100% 1px, calc(100%) calc(100%);
}
.box-second-row {
  background-image: linear-gradient(white, white), linear-gradient(white, white),
    linear-gradient(white, white), linear-gradient(white, white),
    linear-gradient(#0271da, #0271da);
  background-repeat: no-repeat;
  background-size: 1px 6%, 5% 1px, 1px 7%, 5% 1px, calc(100%) calc(100%);
  background-position: left bottom, left bottom, right top, right top, 0px 0px;

  height: 230px;
  width: 380px;
  margin: 20px;

  transition: background-size 2s;
}
.box-second-row:hover {
  background-size: 1px 100%, 100% 1px, 1px 100%, 100% 1px, calc(100%) calc(100%);
}
.menu-enter-active,
.menu-leave-active {
  transition: all 1.5s ease;
}

.menu-enter,
.menu-leave-to {
  opacity: 0;
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
@media all and (max-width: 1249px) {
  .parallax-slider-navigation {
    top: 20%;
  }
}
@media all and (min-width: 1440px) {
  .parallax-slider-navigation {
    top: 40%;
  }
}
@media all and (min-width: 1640px) {
  .parallax-slider-navigation {
    top: 45%;
  }
}
@media all and (min-width: 1740px) {
  .parallax-slider-navigation {
    top: 50%;
  }
}
</style>
