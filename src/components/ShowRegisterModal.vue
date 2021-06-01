<template>
  <div class="animate__animated animate__fadeInDown register-modal">
    <div class="container main-cont" style="max-width: 1200px; height: 620px">
      <button
        @click="() => emitter.emit('closeregistermodal')"
        class="close-reg-modal"
      >
        X
      </button>
      <div class="row">
        <div class="col-xl-4" style="height: 620px">
          <RegisterCards
            v-for="item in cards"
            :key="item.id"
            :cardHeader="item.cardHeader"
            :firstCondition="item.firstCondition"
            :secondCondition="item.secondCondition"
          />
        </div>
        <div class="col-xl-8" style="height: 520px">
          <div class="row">
            <div class="col-xl-12">
              <p class="register-text">რეგისტრაცია</p>
              <div style="display: flex">
                <p class="register-togg">უცხოელი (არა საქართველოს მოქალაქე)</p>

                <label
                  class="switch"
                  style="margin-top: -10px; margin-left: 20px"
                >
                  <input type="checkbox" v-model="checkboxs" @change="setCheckBoxStatus" />
                  <span class="slider round"></span>
                </label>
              </div>
            </div>
          </div>
          <DesktopPhysical v-if="isPhysical" />
          <DesktopIuridiuli v-else />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RegisterCards from "./DesktopRegistration/RegisterCards.vue";
import DesktopPhysical from "./DesktopRegistration/DesktopPhysical.vue";
import DesktopIuridiuli from "./DesktopRegistration/DesktopIuridiuli.vue";

export default {
  name: "ShowRegisterModal",
  components: { RegisterCards, DesktopPhysical, DesktopIuridiuli },
  data() {
    return {
      checkboxs: false,
      isPhysical: true,
      cards: [
        {
          id: 1,
          cardHeader: "კლიენტი ვალდებულია:",
          firstCondition: "1. გადაიხადოს ტრანსპორტირების ღირებულება",
          secondCondition:
            "2. მიიღოს გადმოზიდული საქონელი და აუცილებლობის შემთხვევაში უზრუნველყოს სათანადო საბაჟო პროცედურების ჩატარება.",
        },
        {
          id: 2,
          cardHeader: "შემსრულებელი ვალდებულია:",
          firstCondition:
            "1. უზრუნველყოს დამკვეთის მიერ შეძენილი საქონლის გადმოზიდვა;",
          secondCondition: "2. გადასცეს დამკვეთს გადმოზიდული საქონელი.",
        },
        {
          id: 3,
          cardHeader: "დამკვეთს უფლება აქვს:",
          firstCondition:
            "1. მოითხოვოს შემსრულებლისგან შეძენილი საქონლის გადმოზიდვა.",
          secondCondition: "2. საკუთრებაში მიიღოს გადმოზიდული საქონელი.",
        },
      ],
    };
  },
  methods: {
    setCheckBoxStatus() {
      localStorage.setItem('checkBoxStatus', this.checkboxs)
    },
  },
  mounted() {
    this.emitter.on("desktopphysical", () => {
      if (this.isPhysical == true) {
        this.isPhysical = false;
      } else {
        this.isPhysical = true;
      }
    });
  },
};
</script>

<style scoped>
.register-togg {
  margin-top: -10px;
  margin-left: 50px;
  color: white;
  font-size: 18px;
  font-family: arrowFONT;
  font-weight: bold;
}
.register-text {
  color: white;
  font-weight: bold;
  font-family: arrowFONT;
  font-size: 22px;
}
.close-reg-modal {
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
.main-cont {
  top: 50%;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
}
.register-modal {
  position: absolute;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0396db;
}
.switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 25px;
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
  height: 17px;
  width: 18px;
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
