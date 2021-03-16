<template>
  <!-- <img :src="image" /> -->
  <SecondNavbar />
  <div style="background-color: white; width: 1920px; height: 1080px">
    <img src="./../../assets/services/menu_bg.png" />
    <div style="position: absolute; right: 0; margin-top: 35px">
      <img class="next-img" src="./../../assets/services/next_bg.png" />
    </div>
  </div>
  <h1
    class="text-center"
    style="
      position: absolute;
      z-index: 555;
      color: black;
      font-family: arrowFONT;
      font-weight: bold;
      font-size: 50px;
      top:0;
      margin-top: 200px;
    "
  >
    ჩვენს შესახებ
  </h1>
  <div
      class="text-center"
      style="
        margin-top: -530px;
        margin-left: -20px;
        position: absolute;
        width: 80px;
        height: 3px;
        background-color: #19a5db;
        z-index: 55;
      "
    ></div>
  <div
    class="container1"
    style="position: absolute; left: 150px; right: 180px; top: 350px; max-width: 100%;"
  >
  <div class="row">
    <div class="col-xxl-4 col-lg-12">
        <p class="about-paragraph " style='font-family: arrowFONT; font-size: 25px; font-weight: bold;line-height: 1.9;'>
          შპს "მეკო" ანხორციელებს როგორც <br />
          ამანათების ასევე დიდი მოცულობის <br />
          ტვირთის დროულ და უსაფრთხო ტრანსპორტირებას თურქეთიდან <br />
          საქართველოში.<span style="color: #599deb"
            >1 კგ-ს ღირებულება არის
            4$, დაანგარიშება ხდება<br/> იკგ-დან</span
          >
        </p>
    </div>
    <div class="col-xxl-7 col-lg-12" style="margin-left: 0px;">
              <div class="row">
          <div class="col-xl-6 col-lg-6 col-12">
            <div style="display: grid;" >
              <div
                style="width: 400px; height: 400px; background-color: #029FD5 ; margin-bottom: -400px;z-index: 2; padding: 35px;"
              >
                <h5 style="font-family: arrowFONT; font-weight: 600; color: white; text-align: center;">რამდენ ხანში ჩამოდის ამანათი?</h5>
                <p style="font-family: arrowFONT; font-weight: 600; font-size: 20px; color: white; margin-top: 80px;">
                  შპს "მეკო"-ს თურქეთის ოფისში სამშაბათამდე მისული ამანათები იგზავნება ოთხშაბათს, გაცემა იწყება თბილისში, შაბათს, რეგიონებში სამშაბათს
                </p>
              </div>
              <div
                style="width: 400px; height: 400px; background-color: #008DCF; transform: rotateY(0deg) rotate(5deg);
                transition: transform 2s;"
              ></div>
            </div>
          </div>
          <div class="col-xl-1"></div>
          <div class="col-xl-5 col-lg-6 col-12">
            <div style="display: grid;" >
              <div
                style="width: 400px; height: 400px; background-color: #029FD5 ; margin-bottom: -400px;z-index: 2;  padding: 35px;"
              >
              <h5 class='text-center' style="font-family: arrowFONT; font-weight: 600; color: white;">როგორ გავიგო ჩემი ამანათი მივიდა შპს "მეკო"-ს თურქეთის ოფისში?</h5>
              <p  style="font-family: arrowFONT; font-weight: 600; font-size: 20px; color: white; margin-top:30px;">
                თურქეთში მისულ ამანათებთან დაკავშირებით შეტყობინებას მიიღებთ ელ. ფოსტით
              </p>
              </div>
              <div
                style="width: 400px; height: 400px; background-color: #008DCF; transform: rotateY(0deg) rotate(5deg);
                transition: transform 2s;"
              ></div>
            </div>
          </div>
        </div>
    </div>
  </div>
  </div>

  <div style="display: flex; position: absolute;
  top: 50%;
  z-index: 2;
  left: 0;margin-left: 20px;
  font-family: arrowFONT;
  font-size: 25px; color: red;">
            <p>უკან</p>
            <hr
              style="
                background-color: #008DCF;
                color:  #008DCF;
                width: 35px;
                height: 2px;
                z-index: 55;
                margin-left: 15px;
              "
            />
          </div>

  <div style="position: absolute; z-index: 55; right: 230px; bottom: 150px">
    <div style="width: 50px; height: 4px; background-color: #009ce7"></div>
  </div>
  <div style="position: absolute; z-index: 55; right: 125px; bottom: 125px">
    <p style="color: black; font-family: numericFONT; font-size: 20px">2/06</p>
  </div>
  <div style="position: absolute; z-index: 55; right: 50px; bottom: 0">
    <img class="slide-number-img" src="./../../assets/services/02.svg" />
  </div>
</template>

<script>
import SecondNavbar from "./../SecondNavbar.vue";
export default {
  name: "SecondSlide",
  props: ["image"],
  components: { SecondNavbar },
};
</script>

<style scoped>
.next-img {
  width: 160px;
}
/* 
.container {
  max-width: 1590px;
} */
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
@font-face {
  font-family: arrowFONT;
  src: url("./../../fonts/mainpage/BPG Nateli Mtavruli Light.ttf");
}
@font-face {
  font-family: paragraphFONT;
  src: url("./../../fonts/mainpage/Gotham Pro Medium.ttf");
}
.slide-number-img {
  width: 300px;
  height: 300px;
}
</style>