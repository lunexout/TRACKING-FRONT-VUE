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
      თურქეთის საწყობში
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
        height: 130px;
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
          padding-top: 11px;
          color: #fff;
        "
      >
        935689458695964<br />
        <!-- 200$ -->
      </h5>
      <h5
        class="txt-head mt-2"
        style="color: #06d97b; font-size: 13px; margin: 0 auto"
      >
        თქვენი ამანათი თურქეთის საწყობში
      </h5>
      <div>
        <button
          class="declareBtn mt-1"
          @click="emitter.emit('openmobdeclare', 935689458695964)"
        >
          დეკლარირება
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


        <div
      class="mt-2"
      style="
        height: 100px;
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
        935689458695964<br />
        200$
      </h5>
      <h5
        class="txt-head"
        style="color: #06d97b; font-size: 13px; margin: 0 auto;margin-top: -25  px;"
      >
        თქვენი ამანათი თურქეთის საწყობში
      </h5>
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
        935689458695964<br />
        200$
      </h5>
      <h5
        class="txt-head"
        style="color: #06d97b; font-size: 13px; margin: 0 auto; margin-top: -10px;"
      >
        თქვენი ამანათი თურქეთის საწყობში
      </h5>

      <div>
        <button
          class="declareBtn mt-1" style="background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(2, 148, 214, 1) 0%, rgba(2, 121, 192, 1) 98% ); background-color: transparent; margin-left: 0;"
        >
          რედაქტირება
          <div class="declare-svg-box">
            <img
              style="width: 25px; height: 25x; margin-right: 0px"
              src="./../../../../../assets/mobile/declare.svg"
              alt="Right arrow"
            />
          </div>
        </button>
      </div>
          <div>
      <button
        class="deleteDeclareBtn"
      >
        წაშლა
        <div class="delete-svg-box">
          <img
            style="width: 25px; height: 25x; margin-top: 0px"
            src="./../../../../../assets/mobile/delete.svg"
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
  name: "Step2",
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
  margin-left: 24px;
  padding-left: 25px;
}
.declare-svg-box {
  width: 23px;
  height: 23px;
  margin-left: -20px;
  margin-top: -23px;
}
.delete-svg-box {
  width: 23px;
  height: 23px;
  margin-left: -3px;
  margin-top: -23px;
}
.deleteDeclareBtn {
  border-radius: 70px;
  outline: none;
  padding-top: 6px;
  padding-right: 0px;
  width: 90px;
  font-family: arrowFONT;
  font-weight: bold;
  height: 31px;
  text-align: center;
  font-size: 11px;
  color: red;
  /* margin-top: -4px; */
  margin-top: 3px;
  margin-left: 13px;
  background-color: #fff;
  border: none;
}
</style>