<template>
  <div class="adress-cont">
    <div v-if="isSpinner" class="spinner-grow text-light"
     style="position: absolute; top: 50%; left: 50%; transform: translate   (-50%, -50%);" role="status">
    </div>
    <template v-else>
      <button
        @click="() => emitter.emit('closedeskadress')"
        class="close-adress-modal"
      >
        X
      </button>
      <div style="display: flex; justify-content: center; margin-top: 130px">
        <div class="adress-menu-cont">
          <h1
            class="adress-header"
            style="font-size: 26px; margin-top: -50px; margin-bottom: 20px"
          >
            თურქეთის მისამართ
          </h1>

          <div
            class="p-0"
            style="
              height: 501px;
              border-radius: 10px;
              width: 800px;
              background-color: transparent;
              padding: 15px;
              display: flex;
              justify-content: space-between;
            "
          >
            <div>
              <div class="styled-div mt-2 p-3">
                <img
                  src="../../../assets/conditions/p01.svg"
                  style="width: 60px; height: 60px"
                />
                <div style="display: flex; flex-direction: column">
                  <h1
                    class="payment-header text-dark"
                    style="padding: 10px; font-size: 15px"
                  >
                    სახელი გვარი \ ad soyad
                  </h1>
                  <h1 class="payment-header1" style="padding: 10px">
                    {{ dataa.fullname }}
                  </h1>
                </div>
              </div>
              <div class="styled-div mt-2 p-3" style="height: 185px">
                <img
                  src="../../../assets/conditions/p01.svg"
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
              <div
                v-for="item in info1"
                :key="item.id"
                class="styled-div mt-2 p-3"
              >
                <img
                  src="../../../assets/conditions/p01.svg"
                  style="width: 60px; height: 60px"
                />
                <div style="display: flex; flex-direction: column">
                  <h1
                    class="payment-header text-dark"
                    style="padding: 10px; font-size: 15px"
                  >
                    {{ item.title }}
                  </h1>
                  <h1 class="payment-header1" style="padding: 10px">
                    {{ item.desc }}
                  </h1>
                </div>
              </div>
            </div>
            <div>
              <div
                v-for="item in info2"
                :key="item.id"
                class="styled-div mt-2 p-3"
              >
                <img
                  src="../../../assets/conditions/p01.svg"
                  style="width: 60px; height: 60px"
                />
                <div style="display: flex; flex-direction: column">
                  <h1
                    class="payment-header text-dark"
                    style="padding: 10px; font-size: 15px"
                  >
                    {{ item.title }}
                  </h1>
                  <h1 class="payment-header1" style="padding: 10px">
                    {{ item.desc }}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import axios from "axios";
import env from "../../../env.json";
export default {
  name: "Adress",
  data() {
    return {
      info1: [],
      info2: [],
      //   info1: [
      //     {
      //       id: 1,
      //       title: "ქალაქი / It",
      //       desc: "Istanbul",
      //     },
      //     {
      //       id: 2,
      //       title: "რაიონი / lice",
      //       desc: "Fatih",
      //     },
      //   ],
      //   info2: [
      //     {
      //       id: 3,
      //       title: "უბანი / mahalle",
      //       desc: "Aksaray",
      //     },
      //     {
      //       id: 4,
      //       title: "ქვეყანა / Olke",
      //       desc: "Turkey",
      //     },
      //     {
      //       id: 5,
      //       title: "ფოსტის კოდი / Posta Kodu:",
      //       desc: "34096",
      //     },
      //     {
      //       id: 6,
      //       title: "ტელეფონი / Cep Telefonu:",
      //       desc: "0(505) 693 01 51",
      //     },
      //     {
      //       id: 7,
      //       title: "მისამართი / adres bashgi:",
      //       desc: "Marsel Otaparki Meko",
      //     },
      //   ],
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
        this.info1 = [
          { id: 1, title: "State", desc: this.dataa.state },
          { id: 2, title: "Town City", desc: this.dataa.town_city },
        ];
        this.info2 = [
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
};
</script>

<style scoped>
.adress-cont {
  position: absolute;
  background-color: #027ec4;
  left: 0;
  top: 0;
  /* transform: translate(-50%, -10%); */
  height: 100%;
  width: 100%;
  z-index: 99999;
}
.adress-header {
  color: #fff;
  font-family: arrowFONT;
  font-size: 18px;
  font-weight: bold;
  text-align: left;
}
.close-adress-modal {
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
.styled-div {
  height: 90px;
  background-color: transparent;
  border: 1px solid white;
  padding: 5px;
  display: flex;
  border-radius: 20px;
  width: 390px;
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
</style>