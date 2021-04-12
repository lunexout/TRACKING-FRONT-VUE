v<template>
  <div class="payment-modal animate__animated animate__fadeInDown">
    <button
      @click="() => emitter.emit('mobclosechangepassprofile')"
      class="close-payment-modal"
    >
      X
    </button>
    <div class="payment-menu-cont">
      <h1 class="payment-header">პაროლის შეცვლა</h1>

      <p class='text-dark mt-5 input-header'>მიმდინარე პაროლი</p>
      <input type="password" placeholder="ჩაწერეთ მიმდინარე პაროლი" class="inputs" />
      <p class='text-dark mt-3 input-header'>ახალი პაროლი</p>
      <input type="password" placeholder='ჩაწერეთ ახალი პაროლი' class="inputs" />
       <p class='text-dark mt-3 input-header'>გაიმეორეთ ახალი პაროლი</p>
      <input type="password" placeholder="ჩაწერეთ ახალი პაროლი ხელახლა" class="inputs" />

          <div
        class="text-center paymentContainer mt-4"
        style="margin-left: -20px; margin: 0 auto"
      >
        <button class="paymentBtn" @click.prevent='login' @keyup.enter='login'>
          დამახსოვრება
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
  name: "MobChangePassword",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>

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
.input-header {
    margin-bottom: -20px;
     margin-left: 20px; 
     font-family: arrowFONT; 
     font-weight: bolder;
}
.inputs {
  border: 1px solid white;
  padding: 8px;
  margin-top: 20px;
  background-color: transparent;
  font-family: arrowFONT;
  font-weight: bold;
  width: 100%;
  border-radius: 30px;
  outline: none;
  color: #fff;
}
::placeholder {
  color: #fff;
}
</style>
