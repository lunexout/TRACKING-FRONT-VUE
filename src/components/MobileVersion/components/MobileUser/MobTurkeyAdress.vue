v<template>
  <div class="payment-modal animate__animated animate__fadeInDown">
    <button
      @click='emitter.emit("closemobturkadress")'
      class="close-payment-modal"
    >
      X
    </button>
    <div class="payment-menu-cont">
      <h1 class="payment-header">თურქეთის მისამართი</h1>
      <!-- <div class='styled-div-no-transactions mt-2'>
            <h1 class="text-center payment-header mt-4">თქვენ არ გაქვთ არცერთი ტრანზაქცია შესრულებული</h1>
      </div> -->
      <div class="styled-div mt-5 p-3">
        <img src='../../../../assets/conditions/p01.svg' style='width: 60px; height: 60px;'/>
        <div style='display: flex; flex-direction: column;'>
            <h1 class="payment-header text-dark" style="padding: 10px; font-size: 15px">სახელი გვარი / lorem ipsum</h1>
        <h1 class="payment-header1" style="padding: 10px;">Giorgi Botsvadze</h1>
        </div>
    </div>
          <div class="styled-div mt-2 p-3" style='height: 220px;'>
        <img src='../../../../assets/conditions/p01.svg' style='width: 60px; height: 60px;'/>
        <div style='display: flex; flex-direction: column;'>
            <h1 class="payment-header text-dark" style="padding: 10px; font-size: 15px">მისამართი / adress</h1>
        <h1 class="payment-header1" style="padding: 10px;">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500</h1>
        </div>
    </div>

        <MobAdressBox v-for='item in info' :key='item.id' :title='item.title' :desc='item.desc'/>
  </div>
  </div>
</template>

<script>
import MobAdressBox from './MobAdressBox.vue'
export default {
  name: "MobTransactions",
    data() {
        return {
            info: [
                {
                    id: 1,
                    title: 'ქალაქი / It',
                    desc: 'Istanbul'
                },
                {
                    id: 2,
                    title: 'რაიონი / lice',
                    desc: 'Fatih'
                },
                                {
                    id: 3,
                    title: 'უბანი / mahalle',
                    desc: 'Aksaray'
                },
                                                {
                    id: 4,
                    title: 'ქვეყანა / Olke',
                    desc: 'Turkey'
                },
                                                                {
                    id: 5,
                    title: 'ფოსტის კოდი / Posta Kodu:',
                    desc: '34096'
                },
                                                                                {
                    id: 6,
                    title: 'ტელეფონი / Cep Telefonu:',
                    desc: '0(505) 693 01 51'
                },
                                                                                                {
                    id: 7,
                    title: 'მისამართი / adres bashgi:',
                    desc: 'Marsel Otaparki Meko'
                },
            ]

        }
    },
    components: {
        MobAdressBox
    },
  methods: {},
};
</script>

<style scoped>
.styled-div {
  height: 100px;
  background-color: transparent;
  border: 1px solid white;
  padding: 5px;
  display: flex;
  border-radius: 20px;
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
.payment-header1 {
  color: #fff;
  font-family: arrowFONT;
  font-size: 18px;
  font-weight: bold;
  text-align: left;
  margin-top: -20px;
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
  position: absolute;
  z-index: 99998;
  top: 0;
  left: 0;
  width: 100%;
  height: 1300px;
  background-color: #0396db;
}
</style>
