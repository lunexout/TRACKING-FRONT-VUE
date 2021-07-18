<template>
  <div class="menu-modal">
    <button
      @click="() => emitter.emit('closemobdeclare')"
      class="close-mob-menu"
    >
      X
    </button>
    <div class="logged-menu-cont mt-4">
      <h1 class="declare-header">საფოსტო გზავნილის დეკლარაცია</h1>
      <h1 class="declare-header" style="margin-left: 20px; margin-top: 25px">
        თრექინგ კოდი:
      </h1>
      <div class="styled-div">
        <img
          src="./../../../../assets/mobile/amanatebi.svg"
          style="width: 40px; margin-left: 8px; height: 40px"
        />
        <h1 class="declare-header" style="padding: 10px; font-size: 18px">
          {{ code }}
        </h1>
      </div>
      <div class="mt-4 styled-div">
        <label class="switch" style="">
          <input type="checkbox" v-model="private_parcel" />
          <span class="slider round"></span>
        </label>
        <h1 class="declare-header" style="padding: 10px; font-size: 18px">
          პირადი გზავნილი
        </h1>
      </div>
      <h1 class="declare-header" style="margin-left: 20px; margin-top: 35px">
        ვებგვერდის არჩევა:
      </h1>
      <div class="styled-div">
        <img
          src="./../../../../assets/mobile/amanatebi.svg"
          style="width: 40px; margin-left: 8px; height: 40px"
        />
        <input
          type="text"
          v-model="shop_url"
          placeholder="მოძებნე ვებგვერდი"
          onfocus="this.placeholder = ''"
          onblur="this.placeholder = 'მოძებნე ვებგვერდი'"
          class="input-style"
        />
      </div>

      <div
        class="styled-div mt-4"
        style="
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
        "
      >
        <select
          class="input-style"
          v-model="chooseCurrency"
          style="outline: none; border: none"
        >
          <option value="GEL">&#8382;</option>
          <option value="DOLLAR">$</option>
          <option value="EURO">&#8364;</option>
        </select>
      </div>

      <div class="styled-div mt-4">
        <input
          type="number"
          v-model="price"
          placeholder="ფასი"
          onfocus="this.placeholder = ''"
          onblur="this.placeholder = 'ფასი'"
          class="input-style"
          style="appearance: none"
        />
      </div>

      <div
        class="styled-div mt-4"
        style="
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
        "
      >
        <select
          class="input-style"
          v-model="chooseItem"
          style="outline: none; border: none"
        >
          <option
            v-for="item in products"
            :key="item.created_at"
            :value="item.id"
          >
            {{ item.name_ge }}
          </option>
        </select>
      </div>
      <!-- <div class="styled-div mt-5" @click='emitter.emit("addproduct")' >
        <img
          src="./../../../../assets/mobile/amanatebi.svg"
          style="width: 40px; margin-left: 8px; height: 40px"
        />
        <h1 class="declare-header" style="margin-left: 20px; margin-top: 10px">
        დაამატე პროდუქტი:
      </h1>
      </div>

      <div v-if='products.length == 0' class='styled-div mt-3' style="height: 65px; border-radius: 10px;">
        <h1 class='declare-header p-3' style='color: red;'>პროდუქტი არ დამატებულა</h1>
      </div>

      <div v-else class='styled-div mt-3' style="height: 80px; border-radius: 10px; flex-direction: column; overflow-y: scroll;">

        <div v-for='product in products.slice().reverse()' :key='product.id'>
          <div style='display: flex;' class='mt-2'>
            <div>
              <img src='./../../../../assets/conditions/p01.svg' style='width: 40px; height: 40px;' />
            </div>
            <div style='display: flex; flex-direction: column; margin-left: 10px;'>
              <div class='declare-header' style='font-size: 13px;'>{{product.title}} <img @click='deleteproduct(product.id)' src='./../../../../assets/mobile/delete.svg' style='width: 30px; height: 30px;  '/></div>
              <div class='declare-header' style='font-size: 13px;'>{{product.price}} $</div>
            </div>
          </div>
        </div>
        
      </div> -->
      <!-- <template v-if='isAddProduct'>
          <div style='position: absolute; background-color: #0396DB; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 100%; height: 100%;'>
            <h1 class="declare-header" style="margin-left: 20px; margin-top: 35px">
                პროდუქტის დამატება:
              </h1>
              <div class="styled-div">
                <label class="switch" style="">
                  <input type="checkbox" />
                  <span class="slider round"></span>
                </label>
                <h1 class="declare-header" style="padding: 10px; font-size: 18px">
                  კოდით დამატება
                </h1>
              </div>

              <div class="styled-div mt-2">
                <h1 class="declare-header" style="padding: 10px; font-size: 18px">$</h1>
                <input
                  v-model='productprice'
                  type="text"
                  placeholder="0"
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = '0'"
                  class="input-style mt-1"
                />
              </div>
              <div class="styled-div mt-2">
                <img
                  style="width: 40px; margin-left: 8px; height: 40px"
                  src="./../../../../assets/conditions/p02.svg"
                />
                <select
                  v-model="productpart"
                  style="
                    border: none;
                    margin-left: 5px;
                    background-color: #0396db;
                    font-size: 15px;
                    font-weight: bold;
                    font-family: arrowFONT;
                    color: #fff;
                    outline: none;
                    appearance:none;
                  "
                  name="product"
                  id=""
                >
                  <option>აუდიო აპარატურის ნაწილი</option>
                  <option>აუდიო აპარატურის ნაწილი</option>
                  <option>აუდიო აპარატურის ნაწილი</option>
                  <option>აუდიო აპარატურის ნაწილი</option>
                  <option>აუდიო აპარატურის ნაწილი</option>
                </select>
              </div>
              <div
                  class="text-center declareContainer mt-5"
                  style="margin-left: -20px; margin: 0 auto"
                >
                  <button class="declareBtn" @click.prevent='addproduct' @keyup.enter='addproduct'>
                    დამატება
                    <div class="declare-arrow-box">
                      <img
                        style="width: 13px; height: 13x; margin-top: -4px"
                        src="./../../../../assets/mainpage/right-arrow.svg"
                        alt="Right arrow"
                      />
                    </div>
                  </button>
                </div>
          </div>
      </template> -->
      <h1 class="declare-header" style="margin-left: 20px; margin-top: 35px">
        აირჩიე სერვისი:
      </h1>

      <div
        class="styled-div mt-2"
        @click="
          () => {
            activeKurierService = true;
            activeFilialService = false;
          }
        "
        :class="{ activeService: activeKurierService }"
      >
        <img
          src="./../../../../assets/conditions/p02.svg"
          style="width: 40px; margin-left: 8px; height: 40px"
        />
        <h1 class="declare-header" style="padding: 11px; font-size: 15px">
          საკურიერო მომსახურეობა
        </h1>
      </div>
      <div
        class="styled-div mt-3"
        @click="
          () => {
            activeKurierService = false;
            activeFilialService = true;
          }
        "
        :class="{ activeService: activeFilialService }"
      >
        <img
          src="./../../../../assets/conditions/p03.svg"
          style="width: 40px; margin-left: 8px; height: 40px"
        />
        <h1 class="declare-header" style="padding: 10px; font-size: 17px">
          ფილიალიდან გატანა
        </h1>
      </div>

      <div
        class="text-center declareContainer mt-5"
        style="margin-left: -20px; margin: 0 auto"
      >
        <button
          class="declareBtn"
          @click.prevent="declareIt"
          @keyup.enter="declareIt"
        >
          დეკლარირება
          <div class="declare-arrow-box">
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
import env from "./../../../../env.json";
import axios from "axios";
import swal from "sweetalert";
export default {
  name: "MobUserLoggedDeclare",
  props: ["code", "parsel_id"],
  data() {
    return {
      isAddProduct: false,
      activeKurierService: true,
      activeFilialService: false,

      productpart: "აუდიო აპარატურის ნაწილი",
      productprice: "0",
      products: [],

      //constants
      private_parcel: false,
      price: 0,
      chooseCurrency: "GEL",
      chooseItem: "",
      shop_url: "",
    };
  },
  mounted() {
    this.emitter.on("addproduct", () => {
      this.isAddProduct = true;
    });
    this.emitter.on("addcloseproduct", () => {
      this.isAddProduct = false;
    });
    const token = localStorage.getItem("token");
    this.emitter.on("addproduct", () => {
      this.isAddProduct = true;
    });
    axios
      .post(
        `${env.API_URL}/api/showcat`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((r) => {
        this.products = r.data;
        this.chooseItem = r.data[0].id;
      });
  },
  methods: {
    addproduct() {
      this.isAddProduct = false;
      this.products.push({
        id: this.products.length + 1,
        title: this.productpart,
        price: this.productprice,
      });
    },
    deleteproduct(code) {
      // console.log(code);
      const index = this.products.findIndex((x) => x.id == code);
      console.log(index);
      if (index > -1) {
        this.products.splice(index, 1);
      }
    },
    declareIt() {
      if (this.shop_url == "") {
        swal({
          title: "",
          text: `შეიყვანეთ ვებსაიტის დასახელება სწორად`,
          icon: "info",
          dangerMode: false,
        });
      } else if (this.price == 0 || this.price < 0) {
        swal({
          title: "",
          text: `თანხა შეიყვანეთ სწორად`,
          icon: "info",
          dangerMode: false,
        });
      } else {
        const user_id = localStorage.getItem("id");
        const token = localStorage.getItem("token");
        const obj = {
          user_id: user_id,
          private_parcel: this.private_parcel,
          tracking_code: this.code,
          price: this.price,
          currency: this.chooseCurrency,
          category: this.chooseItem.toString(),
          shop_url: this.shop_url.toString(),
          shipping_method: this.activeKurierService ? 1 : 0,
        };
        axios
          .put(
            `${env.API_URL}/api/profile/parcelupdate/${this.parsel_id}`,
            obj,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          )
          .then((re) => {
            if (
              re.data.message ==
              "ამანათი დეკლარირებულია და ცვლილება ვერ მოხერხდება "
            ) {
              swal({
                title: `${this.code}`,
                text: `${re.data.message}`,
                icon: "info",
                dangerMode: false,
              });
            } else {
              axios
                .put(
                  `${env.API_URL}/api/profile/declar/${this.parsel_id}`,
                  { tracking_code: this.code },
                  { headers: { Authorization: `Bearer ${token}` } }
                )
                .then((r) => {
                  swal({
                    title: `${this.code}`,
                    text: `${r.data.message}`,
                    icon: "success",
                    dangerMode: false,
                  });
                });
            }
          });
      }
      // axios.post(`${env.API_URL}/api/updateparcel/`)
    },
  },
};
</script>

<style scoped>
select {
  color: white !important;
  background-color: #0396db !important;
}
.activeService {
  background: rgb(2, 0, 36) !important;
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(2, 148, 214, 1) 0%,
    rgba(2, 121, 192, 1) 98%
  ) !important;
}
::placeholder {
  color: #fff;
}
.declare-header {
  color: #fff;
  font-family: arrowFONT;
  font-size: 18px;
  font-weight: bold;
  text-align: left;
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
.styled-div {
  height: 51px;
  background-color: transparent;
  border: 1px solid white;
  padding: 5px;
  display: flex;
  border-radius: 40px;
  width: 100%;
}
.logged-menu-cont {
  position: absolute;
  left: 50%;
  top: 50%;
  height: auto;
  min-width: 300px;
  max-width: 370px;
  transform: translate(-50%, -50%);
}
.close-mob-menu {
  position: absolute;
  right: 10px;
  top: 10px;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 40px;
  font-weight: 200;
  color: white;
}
.menu-modal {
  position: absolute;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 1000px;
  background-color: #0396db;
}
.switch {
  margin-top: 8px;
  margin-left: 8px;
  position: relative;
  display: inline-block;
  width: 40px;
  height: 22px;
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
  height: 15px;
  width: 16px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(22px);
  -ms-transform: translateX(22px);
  transform: translateX(22px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
.declare-arrow-box {
  width: 30px;
  height: 30px;
  border-radius: 25px;
  background-color: #11bdf7;
  margin-left: 205px;
  margin-top: -35px;
}
.declareContainer {
  border-radius: 70px;
  outline: none;
  border: 1px solid #fff;
  padding: 9px;
  text-align: center;
  height: 67px;
  width: 270px;
  margin-top: -15px;
}
.declareBtn {
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
</style>
