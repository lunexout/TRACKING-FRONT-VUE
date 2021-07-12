<template>
  <div class="payment-modal">
    <div
      v-if="isSpinner"
      class="spinner-grow text-light"
      style="
        position: absolute;
        top: 20%;
        left: 45%;
        transform: translate (-45%, -20%);
      "
      role="status"
    ></div>
    <template v-else>
      <button
        @click="emitter.emit('closemobturkadress')"
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
          <img
            src="../../../../assets/conditions/p01.svg"
            style="width: 60px; height: 60px"
          />
          <div style="display: flex; flex-direction: column">
            <h1
              class="payment-header text-dark"
              style="padding: 10px; font-size: 15px"
            >
              სახელი გვარი / lorem ipsum
            </h1>
            <h1 class="payment-header1" style="padding: 10px">
              {{ dataa.fullname }}
            </h1>
          </div>
        </div>
        <div class="styled-div mt-2 p-3" style="height: 220px">
          <img
            src="../../../../assets/conditions/p01.svg"
            style="width: 60px; height: 60px"
          />
          <div style="display: flex; flex-direction: column">
            <h1
              class="payment-header text-dark"
              style="padding: 10px; font-size: 15px"
            >
              მისამართი / adress
            </h1>
            <h1 class="payment-header1" style="padding: 10px">
              {{ dataa.address1 }} {{ dataa.address2 }}
            </h1>
          </div>
        </div>

        <MobAdressBox
          v-for="item in info"
          :key="item.id"
          :title="item.title"
          :desc="item.desc"
        />
      </div>
    </template>
  </div>
</template>

<script>
import axios from "axios";
import MobAdressBox from "./MobAdressBox.vue";
import env from "../../../../env.json";
export default {
  name: "MobTransactions",
  data() {
    return {
      info: [],
      dataa: {},
      isSpinner: true,
    };
  },
  mounted() {
    const id = localStorage.getItem("id");
    const token = localStorage.getItem("token");
    axios
      .post(
        `${env.API_URL}/api/mywhs`,
        { id },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((r) => {
        this.dataa = r.data[0];
        this.info = [
          { id: 1, title: "State", desc: this.dataa.state },
          { id: 2, title: "Town City", desc: this.dataa.town_city },
          {
            id: 3,
            title: "Shipping price",
            desc: this.dataa.shipping_price,
          },
          {
            id: 4,
            title: "Country",
            desc: this.dataa.country,
          },
          {
            id: 5,
            title: "Zip code / Postal code",
            desc: this.dataa.zip_code,
          },
          {
            id: 6,
            title: "Phone Number",
            desc: this.dataa.phone_number,
          },
          {
            id: 7,
            title: "Room number",
            desc: this.dataa.room_number,
          },
        ];
        this.isSpinner = false;
      });
  },
  components: {
    MobAdressBox,
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
