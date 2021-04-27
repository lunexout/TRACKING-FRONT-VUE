<template>
    <div style="padding: 15px" class="mt-4">
    <h1 class="header-txt">გამოგზავნილი ამანათები</h1>

    <div class="post-box">
      <img
        style="width: 40px; height: 40px"
        src="./../../../assets/conditions/p01.svg"
      />
      <h1 class="header-txt p-2">
        თქვენ არ გაქვთ არცერთი ამანათი გამოგზავნილი
      </h1>
    </div>
    <div class="post-box mt-2" style='height: 91px; justify-content: flex-start;'>
        <div>
            <img src='./../../../assets/conditions/p01.svg' style='height: 40x; width: 40px; margin-top: -10px;'/>
        </div>
        <div style='display: flex; justify-content: space-between;'>
            <div style='flex: 1;'>
                <h1 class='header-txt p-2' style='color: #1C69B2;margin-top: -20px'>
                    H100BF4
                </h1><br/>
                <h1 class='header-txt p-2' style='margin-top: -45px;'>
                    559623245332
                </h1><br/>
                <h1 class='header-txt p-2' style='margin-top: -45px'>
                    200$
                </h1>
            </div>
            <div style='text-align: right; flex: 2; margin-left: 340px;'>
                <h1 class='header-txt p-2' style='margin-top: -20px; color: #1AF6B1; font-size: 16px;'>
                    ამანათის ჩამოსვლის <br/> სავარაუდო თარიღი
                </h1><br/>
                <h1 class='header-txt p-2' style=' color: #1AF6B1;margin-top: -45px; font-size: 26px;'>
                    20.04.2021
                </h1>
            </div>
        </div>
    </div>
        <h1 class="header-txt text-center mt-2" style='font-size: 16px;'>
       ამანათის ჯამური ღირებულება აღემატება 300 ლარს, ამიტომ საჭიროა ამანათის განბაჟება
      </h1>
        <div style='display: flex; justify-content: center; align-items: center;'>
            <button
          class="declareBtn mt-1"
           @click='emitter.emit("opendeskganbajeba")'
        >
          განბაჟება
          <div class="declare-svg-box">
            <img
              style="width: 25px; height: 25x; margin-right: 0px"
              src="./../../../assets/mobile/declare.svg"
              alt="Right arrow"
            />
          </div>
          
        </button>
        </div>
</div>
</template>

<script>
export default {
    name: 'Step3'
}
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