v<template>
  <div class="payment-modal animate__animated animate__fadeInDown">
    <button
      @click="() => emitter.emit('closemobpayment')"
      class="close-payment-modal"
    >
      X
    </button>
    <div class="payment-menu-cont">
      <h1 class="payment-header">გადახდა</h1>
      <h1 class="payment-header" style="margin-left: 20px; margin-top: 25px">
        საკურიერო თანხა
      </h1>
      <div class="styled-div mt-2">
        <h1 class="payment-header" style="padding: 10px; font-size: 18px">₾</h1>
        <input
          type="text"
          placeholder="0"
          onfocus="this.placeholder = ''"
          onblur="this.placeholder = '0'"
          class="input-style mt-1"
        />
      </div>
      <h1 class="payment-header" style="margin-left: 20px; margin-top: 25px">
        გადასახდელი თანხა
      </h1>
      <div class="styled-div mt-2">
        <h1 class="payment-header" style="padding: 10px; font-size: 18px">₾</h1>
        <input
          type="text"
          placeholder="15"
          onfocus="this.placeholder = ''"
          onblur="this.placeholder = '15'"
          class="input-style mt-1"
        />
      </div>

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
      </div>
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
  min-width: 300px;
  max-width: 370px;
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
</style>
