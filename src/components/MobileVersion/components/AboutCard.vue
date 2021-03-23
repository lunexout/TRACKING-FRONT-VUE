<template>
  <!-- <div style="display: flex; justify-content: space-between"> -->
  <div style="display: grid">
    <div class="box-conditions1">
      <h5 class="box-header1">
        რამდენ ხანში ჩამოდის ამანათი?{{ choosedSlide }}
      </h5>
      <p class="box-paragraph">
        შპს "მეკო"-ს თურქეთის ოფისში სამშაბათამდე მისული ამანათები იგზავნება
        ოთხშაბათს, გაცემა იწყება თბილისში, შაბათს, რეგიონებში სამშაბათს
      </p>
    </div>
    <div class="box-conditions2"></div>
  </div>
  <!-- </div> -->
  <div
    class="mt-4"
    style="display: flex; justify-content: center; margin-left: 30px"
  >
    <div class="nav-indicator prevArrowInside">
      <p
        style="
          color: black;
          font-weight: bold;
          font-size: 20px;
          margin-top: -2px;
        "
      >
        &#x3c;
      </p>
    </div>
    &nbsp;&nbsp;
    <div>
      <h5 style="font-family: arrowFONT; font-weight: bolder">
        {{ choosedSlide }} /
        <span style="color: #008dcf">{{ numberOfSlides }}</span>
      </h5>
    </div>
    &nbsp;&nbsp;
    <div class="nav-indicator nextArrowInside">
      <p
        style="
          color: black;
          font-weight: bold;
          font-size: 20px;
          margin-top: -2px;
        "
      >
        &#x3e;
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutCard",
  props: ["choosedSlide", "numberOfSlides"],
};
</script>

<style scoped>
.nav-indicator:hover {
  cursor: pointer;
}
.box-conditions1 {
  width: 400px;
  height: 400px;
  background-color: #029fd5;
  /* margin-bottom: ; */
  /* margin-left: 30px; */
  z-index: 2;
  padding: 35px;
}
.box-conditions2 {
  /* margin-left: 30px; */
  position: absolute;
  width: 400px;
  height: 400px;
  /* margin-top: -20px; */
  /* z-index: 5; */
  background-color: #008dcf;
  transform: rotateY(0deg) rotate(5deg);
  transition: transform 2s;
}
.box-paragraph {
  font-family: arrowFONT;
  font-weight: 600;
  font-size: 20px;
  color: white;
  margin-top: 80px;
}
.box-header1 {
  font-family: arrowFONT;
  font-weight: 600;
  color: white;
  text-align: center;
}
@font-face {
  font-family: arrowFONT;
  src: url("./../../../fonts/mainpage/BPG Nateli Mtavruli Light.ttf");
}
@media all and (max-width: 768px) {
  .box-header1 {
    font-size: 16px;
  }
  .box-paragraph {
    font-size: 15px;
    margin-top: 30px;
  }
  .box-conditions1 {
    width: 270px;
    height: 270px;
    background-color: #029fd5;
    /* margin-bottom: ; */
    /* margin-left: 30px; */
    z-index: 2;
    padding: 35px;
  }
  .box-conditions2 {
    /* margin-left: 30px; */
    position: absolute;
    width: 270px;
    height: 270px;
    /* margin-top: -20px; */
    /* z-index: 5; */
    background-color: #008dcf;
    transform: rotateY(0deg) rotate(5deg);
    transition: transform 2s;
  }
}
</style>