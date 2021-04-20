<template>
  <div class="mt-2 p-3">
    <h1
      style="
        color: #fff;
        font-family: arrowFONT;
        font-size: 16px;
        font-weight: bold;
      "
    >
      გამოგზავნილი ამანათები
    </h1>
    <div
      class="mt-2"
      style="
        height: 110px;
        border: 1px solid white;
        border-radius: 10px;
        background-color: transparent;
        display: flex;
        padding: 10px;
      "
    >
      <img
        src="./../../../../../assets/mobile/amanatebi.svg"
        style="width: 40px; height: 40px"
      />
      <h5 class="txt-head">თქვენ არ გაქვთ არცერთი ამანათი თურქეთში</h5>
    </div>

    <div
      class="mt-2"
      style="
        height: 120px;
        border: 1px solid white;
        border-radius: 10px;
        background-color: transparent;
        display: flex;
        flex-wrap: wrap;
        padding: 10px;
      "
    >
      <img
        src="./../../../../../assets/mobile/amanatebi.svg"
        style="width: 40px; height: 40px"
      />
      <h5
        style="
          color: red;
          font-family: arrowFONT;
          font-weight: bold;
          font-size: 18px;
          margin-left: 7px;
          color: #fff;
        "
      >
        <span style="color: #1F9EE5;">HB011HT</span><br />
        935689458695964<br />
        200$
      </h5>
      <h5
        class="txt-head"
        style="color: #06d97b; font-size: 13px; margin: 0 auto;margin-top: -25  px;"
      >
        თქვენი ჩამოსვლის<br/> სავარაუდო თარიღი
      </h5>
      <h5
        class="txt-head"
        style="color: #06d97b; font-size: 21px; margin: 0 auto;margin-top: -25  px;"
      >
        20.04.2021
      </h5>
    </div>

    <!--  -->


        <div
      class="mt-2"
      style="
        height: 120px;
        border: 1px solid white;
        border-radius: 10px;
        background-color: transparent;
        display: flex;
        flex-wrap: wrap;
        padding: 10px;
      "
    >
      <img
        src="./../../../../../assets/mobile/amanatebi.svg"
        style="width: 40px; height: 40px"
      />
      <h5
        style="
          color: red;
          font-family: arrowFONT;
          font-weight: bold;
          font-size: 18px;
          margin-left: 7px;
          color: #fff;
        "
      >
        <span style="color: #1F9EE5;">HB011HT</span><br />
        935689458695964<br />
        1500$
      </h5>
      <h5
        class="txt-head"
        style="color: #06d97b; font-size: 13px; margin: 0 auto;margin-top: -25  px;"
      >
        თქვენი ჩამოსვლის<br/> სავარაუდო თარიღი
      </h5>
      <h5
        class="txt-head"
        style="color: #06d97b; font-size: 21px; margin: 0 auto;margin-top: -25  px;"
      >
        20.04.2021
      </h5>
    </div>

        <h1
        class='mt-2'
      style="
        color: #fff;
        font-family: arrowFONT;
        font-size: 16px;
        font-weight: bold;
      "
        >
      ამანათის განბაჟება
    </h1>

    <div
      class="mt-2"
      style="
        height: 120px;
        border: 1px solid white;
        border-radius: 10px;
        background-color: transparent;
        display: flex;
        flex-wrap: wrap;
        padding: 10px;
      "
    >
      <h5
      class='text-left'
        style="
          color: red;
          font-family: arrowFONT;
          font-weight: bold;
          font-size: 14px;
          margin-left: 7px;
          color: #fff;
        "
      >
        ამანათის ჯამური ღირებულება აღემატება 300 ლარს, ამიტომ საჭიროა ამანათის განბაჟება
        <!-- 1500$ -->
      </h5>
      <div style="margin: 0 auto;">
        <button
          class="declareBtn mt-1" @click='emitter.emit("openmobganbajeba")'
        >
          განბაჟება
          <div class="declare-svg-box">
            <img
              style="width: 25px; height: 25x; margin-right: 0px"
              src="./../../../../../assets/mobile/declare.svg"
              alt="Right arrow"
            />
          </div>
          
        </button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Step3",
};
</script>

<style scoped>
.txt-head {
  /* color: red; */
  font-family: arrowFONT;
  font-weight: bold;
  font-size: 16px;
  margin-left: 7px;
  color: #fff;
}
.declareBtn {
  border-radius: 70px;
  outline: none;
  padding-top: 6px;
  width: 130px;
  font-family: arrowFONT;
  font-weight: bold;
  height: 31px;
  padding-right: 0;
  text-align: center;
  font-size: 11px;
  color: white;
  margin-top: -3px;
  background-color: red;
  border: none;
  padding-left: 25px;
}
.declare-svg-box {
  width: 23px;
  height: 23px;
  margin-left: -20px;
  margin-top: -23px;
}
</style>