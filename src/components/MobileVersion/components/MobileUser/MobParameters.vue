v<template>
  <div class="payment-modal animate__animated animate__fadeInDown">
    <button
      @click="() => {
        emitter.emit('closemobparameters');
        emitter.emit('closedesksettings');
      }"
      class="close-payment-modal"
    >
      X
    </button>
    <div class="payment-menu-cont">
      <h1 class="payment-header" style='font-size: 25px;'>პარამეტრები</h1>
      <div class="styled-div mt-5">
        <div style='display: flex; flex-direction: row;'>
            <h1 class="payment-header" style="padding: 10px; font-size: 18px">
            <img src='http://cdn.onlinewebfonts.com/svg/img_212716.png' style='width: 22px; height: 22px;'/>
        </h1>
        <h1 class="payment-header" style="padding: 10px; font-size: 18px; text-align: left;">
            პროფილი&nbsp;&nbsp; </h1>
        </div>
        <div class="payment-header" style="font-size: 15px">
            <button class='text-white'
            style='border-radius: 25px;
            margin-top: px;
            padding-top: 7px;
            padding-bottom: 7px;
            padding-left: 20px; padding-right: 20px; background-color: #0380DB;
            border: none;' @click='() => {
              emitter.emit("mobopenparamprofile");
              emitter.emit("opendeskprofilesettings");
            }'>რედაქ..</button>
        </div>
      </div>
            <div class="styled-div mt-2">
                 <div style='display: flex; flex-direction: row;'>
        <h1 class="payment-header" style="padding: 10px; font-size: 18px">
            <img src='http://cdn.onlinewebfonts.com/svg/img_212716.png' style='width: 22px; height: 22px;'/>
        </h1>
        <h1 class="payment-header" style="padding: 10px; font-size: 15px">პაროლის შეცვლა</h1>
        </div>
        <div class="payment-header" style="font-size: 15px">
            <button class='text-white'
            style='border-radius: 25px;
            margin-top: px;
            padding-top: 7px;
            padding-bottom: 7px;
            padding-left: 20px; padding-right: 20px; background-color: #0380DB;
            border: none;' @click='() => {
              emitter.emit("mobopenchangepassprofile");
              emitter.emit("opendeskpasschange");
            }' >რედაქ..</button>
        </div>
      </div>
            <div class="styled-div mt-2">
                 <div style='display: flex; flex-direction: row;'>
        <h1 class="payment-header" style="padding: 10px; font-size: 18px">
            <img src='http://cdn.onlinewebfonts.com/svg/img_212716.png' style='width: 22px; height: 22px;'/>
        </h1>
        <h1 class="payment-header messages">შეტყობინებები</h1>
        </div>
        <div class="payment-header" style="font-size: 15px">
            <button class='text-white'
            style='border-radius: 25px;
            margin-top: px;
            padding-top: 7px;
            padding-bottom: 7px;
            padding-left: 20px; padding-right: 20px; background-color: #0380DB;
            border: none;' @click='() => {
              emitter.emit("mobopennotification"); 
              emitter.emit("opendesknotification")
            }'>რედაქ..</button>
        </div>
      </div>
<!-- 
          <div
        class="text-center paymentContainer mt-4"
        style="margin-left: -20px; margin: 0 auto"
      >
        <button class="paymentBtn" @click.prevent='login' @keyup.enter='login'>
          გადახდა
          <div class="payment-arrow-box">
            <img
              style="width: 13px; height: 13x; margin-top: -4px"
              src="./../../../../assets/mainpage/right-arrow.svg"
              alt="Right arrow"
            />
          </div>
        </button>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "MobPayment",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.styled-div {
  height: 51px;
  background-color: transparent;
  border: 1px solid white;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  border-radius: 40px;
  width: 100%;
}
.input-style {
  width: 100%;
  padding: 5px;
  border-radius: 40px;
  background-color: transparent;
  border: none;
  font-weight: bold;
  font-family: arrowFONT;
  font-size: 18px;
  color: #fff;
  outline: none;
}
.payment-header {
  color: #fff;
  font-family: arrowFONT;
  font-size: 18px;
  font-weight: bold;
  text-align: left;
}
.payment-menu-cont {
  position: absolute;
  left: 50%;
  top: 50%;
  height: auto;
  width: 95%;
  max-width: 390px;
  transform: translate(-50%, -50%);
}
.close-payment-modal {
  position: absolute;
  right: 20px;
  top: 20px;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 40px;
  font-weight: 200;
  color: white;
}
::placeholder {
  color: #fff;
}
.payment-arrow-box {
  width: 30px;
  height: 30px;
  border-radius: 25px;
  background-color: #11bdf7;
  margin-left: 205px;
  margin-top: -35px;
}
.paymentContainer {
  border-radius: 70px;
  outline: none;
  border: 1px solid #fff;
  padding: 9px;
  text-align: center;
  height: 67px;
  width: 270px;
  margin-top: -15px;
}
.paymentBtn {
  border-radius: 70px;
  outline: none;
  padding: 10px;
  width: 250px;
  font-family: arrowFONT;
  font-weight: bold;
  height: 45px;
  text-align: center;
  font-size: 22px;
  color: white;
  background-color: #009ce7;
  border: none;
}

.payment-modal {
  position: fixed;
  z-index: 99998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0396db;
}
.messages {
    font-size: 16px;
    padding: 10px;
}
@media all and (max-width: 320px) {
    .messages {padding: 10px; 
    font-size: 13px;
    margin-top: 0px !important;
    }
}
</style>
