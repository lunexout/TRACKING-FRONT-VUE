<template>
  <div>
    <img class="bg-image" src="./../../../assets/images/image1.jpg" />

    <div class="text-center" style="margin-top: 150px">
      <h1 class="header-first">
        ამანათების<br />
        ტრანსპორტირება<br />
        თურქეთის ნებისმიერი<br />
        წერტილიდან
      </h1>
    </div>

    <div class="header-line"></div>
    <div class="text-center mt-4 registerContainer">
      <button class="registreBtn">
        რეგისტრაცია
        <div class="register-arrow-box">
          <img
            style="width: 25px; height: 25x; margin-top: 8px"
            src="./../../../assets/mainpage/right-arrow.svg"
          />
        </div>
      </button>
    </div>

    <div class="text-center mt-4">
      <button
        style="
          background-color: transparent;
          border: 1px solid white;
          padding: 18px;
          border-radius: 100px;
          width: 270px;
          font-size: 21px;
          font-family: arrowFONT;
          font-weight: bold;
          color: white;
        "
      >
        შესვლა
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MobMainPage",
};
</script>

<style scoped>
.bg-image {
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-height: 600px;
  background-size: 100% 100%;
}
.header-line {
  width: 60px;
  height: 4px;
  background-color: #19a5db;
  z-index: 2;
  margin: 0 auto;
}
.header-first {
  /* position: absolute; */
  z-index: 2;
  color: white;
  font-family: arrowFONT;
  font-weight: bold;
  font-size: 25px;
  /* margin-top: -290px; */
}
.register-arrow-box {
  width: 40px;
  height: 40px;
  border-radius: 25px;
  background-color: #11bdf7;
  margin-left: 190px;
  margin-top: -37px;
}
.registerContainer {
  margin: 0 auto;
  border-radius: 70px;
  outline: none;
  border: 1px solid white;
  padding: 9px;
  /* text-align: center; */
  height: 72px;
  width: 270px;
  /* margin-top: 500px; */
}
.registreBtn {
  border-radius: 70px;
  outline: none;
  padding: 10px;
  width: 250px;
  font-family: arrowFONT;
  font-weight: bold;
  height: 50px;
  text-align: center;
  font-size: 21px;
  color: white;
  background-color: #009ce7;
  border: none;
}
@media all and (max-width: 768px) {
  .bg-image {
    height: 600px;
  }
}
</style>