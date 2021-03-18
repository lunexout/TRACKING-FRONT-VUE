<template>
  <div>
    <!-- <Navbar/> -->
    <SwiperSlider />
  </div>
    <!-- <div class="row">
      <div class="col-xl-4 col-12">
        <p class="about-paragraph " style='font-family: arrowFONT; font-size: 28px; font-weight: bold;line-height: 1.9;'>
          შპს "მეკო" ანხორციელებს როგორც <br />
          ამანათების ასევე დიდი მოცულობის <br />
          ტვირთის დროულ და უსაფრთხო ტრანსპორტირებას თურქეთიდან <br />
          საქართველოში.<span style="color: #599deb"
            >1 კგ-ს ღირებულება არის
            4$, დაანგარიშება ხდება<br/> იკგ-დან</span
          >
        </p>
      </div>
      <div class="col-xl-8 col-12">
        <div class="row">
          <div class="col-xl-6 col-12">
            <div style="display: grid;" >
              <div
                style="width: 450px; height: 400px; background-color: #029FD5 ; margin-bottom: -400px;z-index: 2;"
              >ddd</div>
              <div
                style="width: 450px; height: 400px; background-color: #008DCF; transform: rotateY(0deg) rotate(5deg);
                transition: transform 2s;"
              ></div>
            </div>
          </div>
                    <div class="col-xl-6 col-12">
            <div style="display: grid;" >
              <div
                style="width: 450px; height: 400px; background-color: #029FD5 ; margin-bottom: -400px;z-index: 2;"
              >ddd</div>
              <div
                style="width: 450px; height: 400px; background-color: #008DCF; transform: rotateY(0deg) rotate(5deg);
                transition: transform 2s;"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
</template>

<script>
import SwiperSlider from "./components/SwiperSlider";
// import Navbar from "./components/Navbar";
export default {
  name: "App",
  components: {
    SwiperSlider,
    // Navbar,
  },
  data() {
    return {
    }
  }
};
</script>

<style>
html,
body {
  margin: 0;
  overflow: hidden;
}
</style>
