<template>
  <div class="container p-0 work-slide-container">
    <h1 class="work-header text-center">როგორ მუშაობს</h1>
    <div class="header-line"></div>
    <div class="center-text">
      <p class="how-works-paragraph p-2">
        ტრანსპორტირების ღირებულება დამოკიდებულია<br />
        რეალური და მოცულობითი წონის თანაფარდობაზე<br /><br />
        მოცულობითი წონა შემდეგნაირად გამოითველბა:<br />
        <span class="how-works-large">სიგრძე * სიგანე * სიმაღლე : 6000</span
        ><br />
        <span class="how-works-large">მაგ: 20სმ*30სმ*20სმ=12000/6000=2კგ</span>
        <br /><br />
        რეალური წონა: რეალური წონა იანგარიშება ამანათის<br />
        რეალური წონის შესაბამისად, ანუ რასაც ამანათი<br />
        იწონის ფიზიკურად.
        <br /><br />
        თუ მოცულობითი წონა აჭარბებს რეალურს, <br />
        ღირებულება დამოკიდებული იქნება მოცულობით<br />
        წონაზე!
        <br /><br />
        <span class="how-works-large">1კგ-ს ღირებულება არის 4$,</span><br />
        დაანგარიშება ხდება იკგ-დან.
      </p>
    </div>
    <div class="mt-4" style="display: flex; justify-content: center">
      <div class="nav-indicator prevArrowInside">
        <p
          style="
            color: #000;
            font-weight: bold;
            font-size: 25px;
            margin-top: -2px;
          "
        >
          &#x3c;
        </p>
      </div>
      &nbsp;&nbsp;
      <div>
        <h5
          style="
            font-family: arrowFONT;
            font-weight: bolder;
            color: #000;
            font-size: 30px;
          "
        >
          {{ 1 }} /
          <span style="color: #00b0ef; font-size: 30px">{{ 2 }} </span>
        </h5>
      </div>
      &nbsp;&nbsp;
      <div class="nav-indicator nextArrowInside">
        <p
          style="
            color: #000;
            font-weight: bold;
            font-size: 25px;
            margin-top: -2px;
          "
        >
          &#x3e;
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkTextCard",
};
</script>

<style scoped>
.how-works-paragraph {
  font-family: arrowFONT;
  color: white;
  /* margin-left: 15px; */
  padding-top: 40px;
  font-size: 18px;
  font-weight: 500;
}
.how-works-large {
  font-family: arrowFONT;
  color: white;
  font-size: 20px;
  font-weight: bold;
}
.header-line {
  margin: 0 auto;
  background-color: #00b0ef;
  height: 3px;
  width: 50px;
}
.center-text {
  margin: 0 auto;
  max-width: 350px;
}
.work-header {
  font-size: 20px;
  font-family: arrowFONT;
  font-weight: bold;
  color: white;
  padding-top: 50px;
}
.work-slide-container {
  background-size: cover;
  height: 720px;
  background-image: url("./../../../assets/images/image5.jpg");
}
.center-text {
  margin: 0 auto;
  max-width: 450px;
}
@media all and (max-width: 480px) {
  .work-slide-container {
    height: 880px;
    margin-top: 70px;
  }
  .center-text {
    max-width: 350px;
  }
}
</style>