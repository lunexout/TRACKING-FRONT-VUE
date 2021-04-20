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
      ჩამოსული ამანათები
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
      <h5 class="txt-head">ჩამოსული არ არის არცერთი ამანათი</h5>
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
        <span style="color: #1f9ee5">HB011HT</span><br />
        935689458695964<br />
        1500$
      </h5>
      <h5
        class="txt-head text-center"
        style="
          color: #06d97b;
          font-size: 13px;
          margin: 0 auto;
          margin-top: -25 px;
        "
      >
        გილცოავთ თქვენი ამანათი ჩამოვიდა
      </h5>
    </div>
    <h1
      class="mt-3"
      style="
        color: #fff;
        font-family: arrowFONT;
        font-size: 16px;
        font-weight: bold;
        margin-left: 20px;
      "
    >
      აირჩიე სერვისი
    </h1>
    <div
      class="styled-div mt-1"
      @click="
        () => {
          activeKurierService = true;
          activeFilialService = false;
        }
      "
      :class="{ activeService: activeKurierService }"
    >
      <img
        src="./../../../../../assets/conditions/p03.svg"
        style="width: 40px; margin-left: 8px; height: 40px"
      />
      <h1 class="declare-header" style="padding: 10px">
        საკურიერო მომსახურება
      </h1>
    </div>
    <div
      class="styled-div mt-2"
      @click="
        () => {
          activeKurierService = false;
          activeFilialService = true;
        }
      "
      :class="{ activeService: activeFilialService }"
    >
      <img
        src="./../../../../../assets/conditions/p03.svg"
        style="width: 40px; margin-left: 8px; height: 40px"
      />
      <h1 class="declare-header" style="padding: 10px">ფილიალიდან გატანა</h1>
    </div>
    <h5
        class="txt-head text-center"
        style="color: #06d97b; font-size: 13px; margin: 0 auto;margin-top: 10px;"
      >
        შეგიძლიათ შეცვალოთ სერვისის სახეობა
      </h5>
    <h1
      class="mt-4"
      style="
        color: #fff;
        font-family: arrowFONT;
        font-size: 16px;
        font-weight: bold;
        margin-left: 20px;
      "
    >
      გადასახადი ამანათზე
    </h1>
          <div
      class="mt-1"
      style="
        height: 90px;
        border: 1px solid white;
        border-radius: 10px;
        background-color: transparent;
        display: flex;
        flex-direction: column;
        padding: 10px;
      "
    >
      <h5 class="txt-head" style='font-size: 14px;'>ჩამოტანის საფასური: 30₾ </h5>
      <h5 class="txt-head" style='font-size: 14px;'>საკურიერო მომსახურება: 3₾ </h5>
      <h5 class="txt-head" style='font-size: 14px;'>განბაჟების საფასური (13%): 661₾ </h5>
    </div>

        <h5
        class="txt-head text-center"
        style="color: #06d97b; font-size: 12px; margin: 0 auto;margin-top: 10px;"
      >
        <span style="color: #fff">საფასურის გადახდისთვის საჭიროა</span> შეავსოთ ბალანსი <span style='color: #fff;'>და შემდეგ</span> გადაიხადოთ
      </h5>
  </div>
</template>

<script>
export default {
  name: "Step4",
  data() {
    return {
      activeKurierService: false,
      activeFilialService: false,
    };
  },
};
</script>

<style scoped>
.activeService {
  background: rgb(2, 0, 36) !important;
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(2, 148, 214, 1) 0%,
    rgba(2, 121, 192, 1) 98%
  ) !important;
}
.txt-head {
  /* color: red; */
  font-family: arrowFONT;
  font-weight: bold;
  font-size: 16px;
  margin-left: 7px;
  color: #fff;
}
.styled-div {
  height: 51px;
  background-color: transparent;
  border: 1px solid white;
  padding: 5px;
  display: flex;
  border-radius: 40px;
  width: 100%;
}
.declare-header {
  color: #fff;
  font-family: arrowFONT;
  font-size: 14px;
  font-weight: bold;
  text-align: left;
}
</style>