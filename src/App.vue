<template>
  <div>
    <Navbar />
    <SwiperSlider />
  </div>
</template>

<script>
import SwiperSlider from "./components/SwiperSlider";
import Navbar from "./components/Navbar";
export default {
  name: "App",
  components: {
    SwiperSlider,
    Navbar,
  },
};
</script>

<style>
html,
body {
  margin: 0;
}
</style>
