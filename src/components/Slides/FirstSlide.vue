<template>
  <Navbar/>
  <img :src="image" />
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
  <div
    style="
      position: absolute;
      z-index: 55;
      left: 100px;
      bottom: 120px;
      display: flex;
    "
  >
        <img       style="
        width: 70px;
        height: 70px;
        margin-left: 12px;
        border-radius: 25px;
      " src='./../../assets/mainpage/fb.svg'/>
    
        <img       style="
        width: 70px;
        height: 70px;
        margin-left: 12px;
        border-radius: 25px;
      " src='./../../assets/mainpage/istagram.svg'/>
        <img       style="
        width: 70px;
        height: 70px;
        margin-left: 12px;
        border-radius: 25px;
      " src='./../../assets/mainpage/youtub.svg'/>
       <img       style="
        width: 70px;
        height: 70px;
        margin-left: 12px;
        border-radius: 25px;
      " src='./../../assets/mainpage/linkdin.svg'/>
  </div>
  <div style="position: absolute; z-index: 55; right: 230px; bottom: 150px">
    <div style="width: 50px; height: 4px; background-color: white"></div>
  </div>
  <div style="position: absolute; z-index: 55; right: 125px; bottom: 125px">
    <p style="color: white;font-family: numericFONT; font-size: 20px;">1/06</p>
  </div>
  <div style="position: absolute; z-index: 55; right: 30px; bottom: 0">
    <img class="slide-number-img" src="./../../assets/mainpage/01.svg" />
  </div>
</template>

<script>
import Navbar from './../Navbar.vue'
export default {
  name: "FirstSlide",
  props: ["image"],
  components: {Navbar}
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
.slide-number-img {
  width: 300px;
  height: 300px;
}
@font-face {
  font-family: arrowFONT;
  src: url("./../../fonts/mainpage/BPG Nateli Mtavruli Light.ttf");
}
@font-face {
  font-family: numericFONT;
  src: url("./../../fonts/mainpage/Gotham Pro Medium.ttf");
}
</style>