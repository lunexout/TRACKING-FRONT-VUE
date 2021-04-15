<template>
  <div style="display: flex; justify-content: space-between">
    <div style="display: grid">
      <div class="box-conditions1">
        <h5 class="box-header1">რამდენ ხანში ჩამოდის ამანათი?</h5>
        <p class="box-paragraph">
          შპს "მეკო"-ს თურქეთის ოფისში სამშაბათამდე მისული ამანათები იგზავნება
          ოთხშაბათს, გაცემა იწყება თბილისში, შაბათს, რეგიონებში სამშაბათს
        </p>
      </div>
      <div class="box-conditions2"></div>
    </div>
    <div style="display: grid">
      <div class="box-conditions1">
        <h5 class="text-center box-header2">
          როგორ გავიგო ჩემი ამანათი მივიდა შპს "მეკო"-ს თურქეთის ოფისში?
        </h5>
        <p class="box-paragraph">
          თურქეთში მისულ ამანათებთან დაკავშირებით შეტყობინებას მიიღებთ ელ.
          ფოსტით
        </p>
      </div>
      <div class="box-conditions2"></div>
    </div>
  </div>
  <div class="mt-4" style="display: flex; justify-content: center">
    <div class="nav-indicator prevArrowInside">
      <p class="card-box-arr">&#x3c;</p>
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
      <p class="card-box-arr">&#x3e;</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardBox",
  props: ["choosedSlide", "numberOfSlides"],
};
</script>

<style scoped>
.card-box-arr {
  color: black;
  font-weight: bold;
  font-size: 20px;
  margin-top: -2px;
}
.nav-indicator:hover {
  cursor: pointer;
}
.box-conditions1 {
  width: 400px;
  height: 400px;
  background-color: #029fd5;
  margin-bottom: -400px;
  margin-left: 30px;
  z-index: 2;
  padding: 35px;
}
.box-conditions2 {
  margin-left: 30px;
  width: 400px;
  height: 400px;
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
.box-header2 {
  font-family: arrowFONT;
  font-weight: 600;
  color: white;
  text-align: center;
}
@font-face {
  font-family: arrowFONT;
  src: url("./../fonts/mainpage/BPG Nateli Mtavruli Light.ttf");
}
@media all and (min-width: 1249px) {
  .box-header1 {
    font-size: 20px;
  }
  .box-header2 {
    font-size: 20px;
  }
  .box-conditions1 {
    width: 300px;
    height: 300px;
  }
  .box-conditions2 {
    width: 300px;
    height: 300px;
  }
  .box-paragraph {
    margin-top: 30px;
    font-size: 16px;
  }
}
@media all and (min-width: 1440px) {
  .box-conditions1 {
    width: 280px;
    height: 280px;
  }
  .box-conditions2 {
    width: 280px;
    height: 280px;
  }
  .box-paragraph {
    margin-top: 30px;
    font-size: 15px;
  }
  .box-header1 {
    font-family: arrowFONT;
    font-weight: 600;
    color: white;
    text-align: center;
    font-size: 17px;
  }
  .box-header2 {
    font-family: arrowFONT;
    font-weight: 600;
    color: white;
    text-align: center;
  }
}
@media all and (min-width: 1640px) {
  .box-conditions1 {
    width: 350px;
    height: 350px;
  }
  .box-conditions2 {
    width: 350px;
    height: 350px;
  }
  .box-paragraph {
    margin-top: 30px;
    font-size: 22px;
  }
  .box-header1 {
    font-family: arrowFONT;
    font-weight: 600;
    color: white;
    text-align: center;
  }
  .box-header2 {
    font-family: arrowFONT;
    font-weight: 600;
    color: white;
    text-align: center;
  }
}
@media all and (min-width: 1740px) {
  .box-conditions1 {
    width: 400px;
    height: 400px;
  }
  .box-conditions2 {
    width: 400px;
    height: 400px;
  }
  .box-paragraph {
    margin-top: 30px;
    font-size: 25px;
  }
  .box-header1 {
    font-family: arrowFONT;
    font-weight: 600;
    color: white;
    text-align: center;
  }
  .box-header2 {
    font-family: arrowFONT;
    font-weight: 600;
    color: white;
    text-align: center;
  }
}
</style>