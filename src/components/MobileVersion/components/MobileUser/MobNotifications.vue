v<template>
  <div class="payment-modal animate__animated animate__fadeInDown">
    <button
      @click="() => {
        emitter.emit('mobclosenotification');
        emitter.emit('closedesknotification')
      }"
      class="close-payment-modal"
    >
      X
    </button>
    <div class="payment-menu-cont">
      <h1 class="payment-header" style="font-size: 25px;">შეტყობინებები</h1>
      <p
        style="
          margin-left: 20px;
          margin-bottom: -3px;
          font-size: 19px;
          font-weight: bolder;
          font-family: arrowFONT;
        "
      >
        E-mail შეტყობინებები
      </p>
      <div class="styled-div mt-1">
        <div class="mt-2" style="display: flex; justify-content: space-between">
          <h5
            style="
              color: #fff;
              font-family: arrowFONT;
              font-size: 16px;
              font-weight: bold;
              padding: 5px;
            "
          >
            ამანათის მიღება საწყობში
          </h5>
          <label class="switch">
            <input type="checkbox" checked v-model='parcel_arrived_warehouse_email' />
            <span class="slider round"></span>
          </label>
        </div>
        <div class="mt-1" style="display: flex; justify-content: space-between">
          <h5
            style="
              color: #fff;
              font-family: arrowFONT;
              font-size: 16px;
              font-weight: bold;
              padding: 5px;
            "
          >
            ამანათი ჩამოსულია
          </h5>
          <label class="switch">
            <input type="checkbox" checked v-model='parcel_arrived_georgia_email' />
            <span class="slider round"></span>
          </label>
        </div>

        <div class="mt-1" style="display: flex; justify-content: space-between">
          <h5
            style="
              color: #fff;
              font-family: arrowFONT;
              font-size: 16px;
              font-weight: bold;
              padding: 5px;
            "
          >
            ინვოისის გადახდა
          </h5>
          <label class="switch">
            <input type="checkbox" checked v-model='pay_invoice' />
            <span class="slider round"></span>
          </label>
        </div>

        <div class="mt-1" style="display: flex; justify-content: space-between">
          <h5
            style="
              color: #fff;
              font-family: arrowFONT;
              font-size: 16px;
              font-weight: bold;
              padding: 5px;
            "
          >
            თანხის ნაკლებობა
          </h5>
          <label class="switch">
            <input type="checkbox" checked v-model='notamount_money' />
            <span class="slider round"></span>
          </label>
        </div>

        <div class="mt-1" style="display: flex; justify-content: space-between">
          <h5
            style="
              color: #fff;
              font-family: arrowFONT;
              font-size: 16px;
              font-weight: bold;
              padding: 5px;
            "
          >
            ამანათი გამოგზავნილია
          </h5>
          <label class="switch">
            <input type="checkbox" checked v-model='parcel_send' />
            <span class="slider round"></span>
          </label>
        </div>

        <div class="mt-1" style="display: flex; justify-content: space-between">
          <h5
            style="
              color: #fff;
              font-family: arrowFONT;
              font-size: 16px;
              font-weight: bold;
              padding: 5px;
            "
          >
            ბალანსის შევსება
          </h5>
          <label class="switch">
            <input type="checkbox" checked v-model='balance'  />
            <span class="slider round"></span>
          </label>
        </div>

        <div class="mt-1" style="display: flex; justify-content: space-between">
          <h5
            style="
              color: #fff;
              font-family: arrowFONT;
              font-size: 16px;
              font-weight: bold;
              padding: 5px;
            "
          >
            კომპანიის სიახლეები<br />
            და სერვისის ცვლილებები
          </h5>
          <label class="switch">
            <input type="checkbox" checked v-model='news' />
            <span class="slider round"></span>
          </label>
        </div>
      </div>
            <p
            class='mt-3'
        style="
          margin-left: 20px;
          margin-bottom: -3px;
          font-size: 19px;
          font-weight: bolder;
          font-family: arrowFONT;
        "
      >
        SMS შეტყობინებები
      </p>
      <div class="styled-div1 mt-1">
        <div class="mt-2" style="display: flex; justify-content: space-between">
          <h5
            style="
              color: #fff;
              font-family: arrowFONT;
              font-size: 16px;
              font-weight: bold;
              padding: 5px;
            "
          >
            ამანათის მიღება საწყობში
          </h5>
          <label class="switch">
            <input type="checkbox" checked v-model='parcel_arrived_warehouse_sms' />
            <span class="slider round"></span>
          </label>
        </div>
        <div style="display: flex; justify-content: space-between">
          <h5
            style="
              color: #fff;
              font-family: arrowFONT;
              font-size: 16px;
              font-weight: bold;
              padding: 5px;
            "
          >
            ამანათი ჩამოსულია
          </h5>
          <label class="switch">
            <input type="checkbox" checked v-model='parcel_arrived_georgia_sms'/>
            <span class="slider round"></span>
          </label>
        </div>
         <button style="padding: 15px;  display: flex; justify-content: center; 
      align-items: center; margin-top: 20px; outline: none;
       border: none; background-color: #026492; color: white; border-radius: 15px;" @click='saveNotification'>შენახვა</button>
      </div>
    </div>
    
  </div>
</template>

<script>
import axios from 'axios';
import env from './../../../../env.json'
export default {
  name: "MobPayment",
  data() {
    return {
      parcel_arrived_warehouse_email: true,
      parcel_arrived_warehouse_sms: true,
      parcel_arrived_georgia_email: true,
      parcel_arrived_georgia_sms: true,
      pay_invoice: true,
      notamount_money: true,
      parcel_send: true,
      balance: true,
      news: true,
    };
  },
  methods: {
    saveNotification() {
      const obj = {
        parcel_arrived_warehouse_email: this.parcel_arrived_warehouse_email,
        parcel_arrived_warehouse_sms: this.parcel_arrived_warehouse_sms,
        parcel_arrived_georgia_email: this.parcel_arrived_georgia_email,
        parcel_arrived_georgia_sms: this.parcel_arrived_georgia_sms,
        pay_invoice: this.pay_invoice,
        notamount_money: this.notamount_money,
        parcel_send: this.parcel_send,
        balance: this.balance,
        news: this.news
      }
      const id = localStorage.getItem("id");
      const token = localStorage.getItem('token')
      axios.put(`${env.API_URL}/api/profile/notify/${id}`, {obj}, {headers: {'Authorization': `Bearer ${token}`}})
    }
  },
};
</script>

<style scoped>
.styled-div1 {
  height: 100px;
  background-color: transparent;
  border: 1px solid white;
  padding: 5px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  width: 100%;
}
.styled-div {
  height: 320px;
  background-color: transparent;
  border: 1px solid white;
  padding: 5px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  width: 100%;
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
  top: 5px;
  z-index: 2;;
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
  z-index: 999998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0396db;
}
/* switchbox */
.switch {
  position: relative;
  display: inline-block;
  width: 55px;
  height: 24px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  left: 4px;
  bottom: 2px;
  background-color: #2196f3;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #fff;
}

input:focus + .slider {
  box-shadow: 0 0 1px #fff;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
