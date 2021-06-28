v<template>
  <div class="payment-modal animate__animated animate__fadeInDown">
    <button
      @click="
        () => {
          emitter.emit('mobcloseparamprofile');
          emitter.emit('closedeskprofilesettings');
        }
      "
      class="close-payment-modal"
    >
      X
    </button>
    <div class="payment-menu-cont">
      <h1 class="payment-header" style="font-size: 25px">პროფილი</h1>

      <div style="display: flex; justify-content: space-between">
        <div>
          <p class="text-dark mt-3 input-header">ფოტოს შეცვლა</p>

          <input
            type="file"
            class="inputs custom-file-input"
            accept="image/png, image/jpeg"
          />
          <p class="text-dark mt-4 input-header">სახელი(ქართულად)</p>
          <input type="text" v-model="name_ge" class="inputs" />
          <p class="text-dark mt-4 input-header">გვარი(ქართულად)</p>
          <input type="text" v-model="surname_ge" class="inputs" />
          <p class="text-dark mt-3 input-header">სახელი(ლათინურად)</p>
          <input type="text" v-model="name_en" class="inputs" />
          <p class="text-dark mt-4 input-header">გვარი(ლათინურად)</p>
          <input type="text" v-model="name_en" class="inputs" />
          <p class="text-dark mt-4 input-header">ქალაქი</p>
          <select
            name="cities"
            v-model="city"
            aria-placeholder="შეცვლაეთ ქალაქი"
            class="inputs"
            style="background-color: #0396db"
          >
            <option v-for="city in cities" :key="city.id" :value="city.id">
              {{ city.name }}
            </option>
          </select>
          <p v-if="isCOMPANY" class="text-dark mt-4 input-header">კომპანია</p>

          <input
            v-if="isCOMPANY"
            type="text"
            v-model="company"
            class="inputs"
          />
        </div>

        <div>
          <p class="text-dark mt-3 input-header">დაბადების თარიღი</p>
          <input
            type="date"
            v-model="birthDate"
            placeholder="დაბადების თარიღი"
            class="inputs"
          />

          <p
            style="
              font-family: arrowFONT;
              font-size: 14px;
              color: #000;
              margin-left: 18px;
              font-weight: bold;
              margin-bottom: -5px;
              margin-top: 20px;
            "
          >
            სქესი*
          </p>
          <input
            v-model="sex"
            type="radio"
            id="male"
            name="gender"
            value="male"
          />
          <label
            style="
              font-family: arrowFONT;
              font-size: 14px;
              color: white;
              font-weight: bold;
              margin-left: 5px;
              margin-right: 10px;
            "
            for="male"
            >მდედრობითი</label
          >
          <input
            v-model="sex"
            type="radio"
            id="female"
            name="gender"
            value="female"
          />
          <label
            style="
              font-family: arrowFONT;
              margin-left: 5px;
              font-size: 14px;
              color: white;
              font-weight: bold;
            "
            for="female"
            >მამრობითი</label
          ><br />

          <p class="text-dark mt-2 input-header">ელ-ფოსტა*</p>
          <input type="mail" v-model="email" class="inputs" />

          <p class="text-dark mt-2 input-header">მობილური ტელეფონი*</p>
          <input type="text" v-model="mobile" class="inputs" />

          <p class="text-dark mt-2 input-header">საიდენთიფიკაციო კოდი*</p>
          <input type="mail" v-model="idNumber" class="inputs" />

          <p
            class="text-dark mt-2 input-header"
            style="margin-top: 10px !important"
          >
            მისამართი
          </p>
          <input type="text" v-model="adress" class="inputs" />
          <p
            v-if="isCOMPANY"
            class="text-dark mt-2 input-header"
            style="margin-top: 10px !important"
          >
            კომპანიის მისამართი
          </p>
          <input
            v-if="isCOMPANY"
            v-model="company_address"
            type="text"
            class="inputs"
          />
          <p
            v-if="isCOMPANY"
            class="text-dark mt-2 input-header"
            style="margin-top: 10px !important"
          >
            კომპანიის კოდი
          </p>
          <input
            v-if="isCOMPANY"
            type="text"
            v-model="company_id"
            class="inputs"
          />
        </div>
      </div>

      <div
        class="text-center paymentContainer mt-4"
        style="margin-left: -20px; margin: 0 auto"
      >
        <button class="paymentBtn" @click.prevent="save" @keyup.enter="save">
          შენახვა
          <div class="payment-arrow-box">
            <img
              style="width: 13px; height: 13x; margin-top: -4px"
              src="./../../../assets/mainpage/right-arrow.svg"
              alt="Right arrow"
            />
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import env from "./../../../env.json";
import axios from "axios";
export default {
  name: "ProfSettings",
  data() {
    return {
      name_ge: "",
      name_en: "",
      surname_ge: "",
      surname_en: "",
      email: "",
      mobile: "",
      birthDate: "",
      idNumber: "",
      sex: "",
      adress: "",
      citizen: "",
      city: "",
      isCOMPANY: false,
      company: "",
      company_id: "",
      company_address: "",

      cities: [],
    };
  },

  mounted() {
    const id = localStorage.getItem("id");
    const token = localStorage.getItem("token");
    axios
      .post(
        `${env.API_URL}/api/profile`,
        { id },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((result) => {
        this.name_ge = result.data.name_ge;
        this.name_en = result.data.name_en;
        this.surname_ge = result.data.surname_ge;
        this.surname_en = result.data.surname_en;
        this.email = result.data.email;
        this.mobile = result.data.mobile;
        this.birthDate = result.data.birthday;
        this.idNumber = result.data.idnumber;
        this.sex = result.data.sex;
        this.adress = result.data.address;
        this.citizen = result.data.citizen;
        this.city = result.data.city;

        result.data.company == null
          ? (this.isCOMPANY = false)
          : (this.isCOMPANY = true);

        if (this.isCOMPANY) {
          this.company = result.data.company;
          this.company_id = result.data.company_id;
          this.company_address = result.data.company_address;
        }

        axios.get(`${env.API_URL}/api/city`).then((resul1t) => {
          this.cities = resul1t.data;
          resul1t.data.map((city) => {
            if (city.name == result.data.city) {
              this.city = city.id; 
            }
          });
        });
      });
  },
  methods: {
    save() {
      const UserInformation = {
          citizen: this.citizen,
          name_ge: this.name_ge,
          name_en: this.name_en,
          surname_ge: this.surname_ge,
          surname_en: this.surname_en,
          email: this.email,
          mobile: this.mobile,
          birthday: this.birthDate,
          idnumber: this.idNumber,
          sex: this.sex,
          address: this.adress,
          city: this.city,
        }
        console.log(UserInformation);
    },
  },
};
</script>

<style scoped>
.input-header {
  margin-bottom: -20px;
  margin-left: 20px;
  font-family: arrowFONT;
  font-weight: bolder;
}
.styled-div-no-transactions {
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
  margin-top: 25px;
  height: auto;
  width: 800px;
  transform: translate(-50%);
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
  z-index: 999998;
  top: 0;
  left: 0;
  width: 100%;
  height: 1200px;
  background-color: #0396db;
}
.inputs {
  border: 1px solid white;
  padding: 8px;
  margin-top: 20px;
  background-color: transparent;
  font-family: arrowFONT;
  font-weight: bold;
  width: 390px;
  border-radius: 30px;
  outline: none;
  color: #fff;
}
::placeholder {
  color: #fff;
}
.custom-file-input::-webkit-file-upload-button {
  visibility: hidden;
}
.custom-file-input::before {
  content: "ფოტოს ატვირთვა";
  display: inline-block;
  border-radius: 3px;
  outline: none;
  white-space: nowrap;
  -webkit-user-select: none;
  cursor: pointer;
  font-weight: 700;
  font-size: 14px;
}
.custom-file-input:hover::before {
  border-color: black;
}
.custom-file-input:active::before {
  /* background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9); */
}
</style>
