<template>
  <div style="padding: 15px" class="mt-4">
    <h1 class="header-txt">ჩამოსული ამანათები</h1>

    <div class="post-box">
      <img
        style="width: 40px; height: 40px"
        src="./../../../assets/conditions/p01.svg"
      />
      <h1 class="header-txt p-2">თქვენ არ გაქვთ ჩამოსული ამანათი</h1>
    </div>

    <div
      class="post-box mt-2"
      style="height: 151px; justify-content: flex-start"
    >
      <div>
        <img
          src="./../../../assets/conditions/p01.svg"
          style="height: 40x; width: 40px; margin-top: -10px"
        />
      </div>
      <div style="display: flex;justify-content: space-between;">
        <div>
          <h1 class="header-txt p-2" style="color: #1c69b2; margin-top: -20px">
            H100BF4
          </h1>
          <br />
          <h1 class="header-txt p-2" style="margin-top: -35px">559623245332</h1>
          <br />
          <h1 class="header-txt p-2" style="margin-top: -35px">200$</h1>
          <br />
          <h1
            class="header-txt p-2"
            style="margin-top: -35px; color: #1af6b1; font-size: 15px"
          >
            გილოცავთ თქვენი ამანათი ჩამოვიდა
          </h1>
        </div>
        <div style="text-align: right; flex: 2; margin-top: -15px">
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
              src="./../../../assets/conditions/p03.svg"
              style="width: 40px; margin-left: 8px; height: 40px"
            />
            <h1 class="header-txt" style="padding: 10px">
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
              src="./../../../assets/conditions/p03.svg"
              style="width: 40px; margin-left: 8px; height: 40px"
            />
            <h1 class="header-txt" style="padding: 10px">ფილიალიდან გატანა</h1>
          </div>
          <h1
            class="header-txt"
            style="padding: 10px; font-size: 15px; color: #1af6b1"
          >
            შეგიძლიათ შეცვალოთ სერვისის სახეობა
          </h1>
        </div>
      </div>
    </div>

    <div style='display:flex; justify-content: space-between; margin-top: 5px; padding: 10px;'>
      <div>
          <h5 class="header-txt" style='font-size: 14px;'>ჩამოტანის საფასური: 30₾ </h5>
      <h5 class="header-txt" style='font-size: 14px;'>საკურიერო მომსახურება: 3₾ </h5>
      <h5 class="header-txt" style='font-size: 14px;'>განბაჟების საფასური (13%): 661₾ </h5>
      </div>
    <!-- </div> -->

        <h5
        class="header-txt text-right"
        style="color: #06d97b; font-size: 12px;text-align: right;"
      >
        <span style="color: #fff;text-align: right;">საფასურის გადახდისთვის საჭიროა<br/></span>
        <span style='font-size: 18px;'> შეავსოთ ბალანსი 
            </span><br/><span style='color: #fff;'>და შემდეგ</span> <span style='font-size: 18px;'>გადაიხადოთ</span>
      </h5>
    </div>
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
.styled-div {
  height: 46px;
  background-color: transparent;
  border: 1px solid white;
  padding: 5px;
  display: flex;
  border-radius: 40px;
  width: 100%;
}
</style>