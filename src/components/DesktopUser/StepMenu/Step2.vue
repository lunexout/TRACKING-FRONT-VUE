<template>
  <div style="padding: 15px" class="mt-4">
    <h1 class="header-txt">თურქეთის საწყობი</h1>

    <div class="post-box">
      <img
        style="width: 40px; height: 40px"
        src="./../../../assets/conditions/p01.svg"
      />
      <h1 class="header-txt p-2">
        თქვენ არ გაქვთ არცერთი ამანათი თურქეთის საწყობში
      </h1>
    </div>

    <div
      class="post-box mt-2"
      style="height: 100px; justify-content: flex-start"
    >
      <img
        style="width: 40px; height: 40px"
        src="./../../../assets/conditions/p01.svg"
      />
      <div style="margin-left: 20px">
        <h1 class="header-txt">3249384932849343</h1>
        <br />
        <h1 class="header-txt" style="margin-top: -30px">300$</h1>
        <br />
        <h1
          class="header-txt"
          style="margin-top: -30px; font-size: 15px; color: #1af6b1"
        >
          თქვენი ამანათი თურქეთის საწყობში
        </h1>
      </div>
    </div>

    <div
      class="post-box mt-2"
      style="height: 100px; justify-content: flex-start"
    >
      <img
        style="width: 40px; height: 40px"
        src="./../../../assets/conditions/p01.svg"
      />
      <div style="margin-left: 20px">
        <h1 class="header-txt">3249384932849343</h1>
        <br />
        <div style="margin-top: -30px; text-align: right; margin-left: 470px">
          <button
            class="declareBtn mt-1"
            @click="emitter.emit('opendeskdeclare', 3249384932849343)"
          >
            დეკლარირება
            <div class="declare-svg-box">
              <img
                style="width: 25px; height: 25x; margin-right: 0px"
                src="./../../../assets/mobile/declare.svg"
                alt="Right arrow"
              />
            </div>
          </button>
        </div>
        <br />
        <h1
          class="header-txt"
          style="margin-top: -30px; font-size: 15px; color: #1af6b1"
        >
          თქვენი ამანათი თურქეთის საწყობში
        </h1>
      </div>
    </div>

        <div
      class="post-box mt-2"
      style="height: 100px; justify-content: flex-start"
    >
      <img
        style="width: 40px; height: 40px"
        src="./../../../assets/conditions/p01.svg"
      />
      <div style="margin-left: 20px">
        <h1 class="header-txt">3249384932849343</h1>
        <br />
        <div style="margin-top: -30px; text-align: right; margin-left:365px; display:flex;">
        <button
          class="declareBtn mt-1"
          style="

            background-color: #009CE7 !important;
          "
        >
          რედაქტირება
          <div class="declare-svg-box">
            <img
              style="width: 25px; height: 25x; margin-right: 0px"
              src="./../../../assets/mobile/declare.svg"
              alt="Right arrow"
            />
          </div>
        </button>
      <!-- </div> -->
      <!-- <div style="margin-top: -30px; text-align: right; margin-left: 470px"> -->
        <button class="deleteDeclareBtn">
          წაშლა
          <div class="delete-svg-box">
            <img
              style="width: 25px; height: 25x; margin-top: 0px"
              src="./../../../assets/mobile/delete.svg"
              alt="Right arrow"
            />
          </div>
        </button>
      </div>
        <br />
        <h1
          class="header-txt"
          style="margin-top: -30px; font-size: 15px; color: #1af6b1"
        >
          თქვენი ამანათი თურქეთის საწყობში
        </h1>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Step1",
};
</script>

<style scoped>
.header-txt {
  color: #fff;
  font-size: 20px;
  font-family: arrowFONT;
  font-weight: bold;
}
.post-box {
  padding: 15px;
  border: 1px solid white;
  border-radius: 15px;
  height: 70px;
  background-color: transparent;
  display: flex;
  justify-content: center;
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