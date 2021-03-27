<template>
  <div class="animate__animated animate__fadeInDown register-modal">
    <div class="container main-cont" style="max-width: 1200px; height: 620px">
      <button @click='()=> emitter.emit("closeregistermodal")' style='position: absolute; 
      right:20px; top: 20px; background-color: transparent;
       border: none; outline: none; font-size: 40px; font-weight: 200; color: white;'>X</button>
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
              <p
                style="
                  color: white;
                  font-weight: bold;
                  font-family: arrowFONT;
                  font-size: 22px;
                "
              >
                რეგისტრაცია
              </p>
              <div style="display: flex">
                <p
                  style="
                    margin-top: -10px;
                    margin-left: 50px;
                    color: white;
                    font-size: 18px;
                    font-family: arrowFONT;
                    font-weight: bold;
                  "
                >
                  უცხოელი (არა საქართველოს მოქალაქე)
                </p>

                <label
                  class="switch"
                  style="margin-top: -10px; margin-left: 20px"
                >
                  <input type="checkbox" />
                  <span class="slider round"></span>
                </label>
              </div>
            </div>
          </div>
          <div class="row" style="height: 100%">
            <div class="col-xl-5">
              <div
                style="
                  width: 100%;
                  padding: 10px;
                  height: 45px;
                  border: 2px solid white;
                "
              >
                <h5
                  class="text-center"
                  style="
                    color: white;
                    font-weight: bold;
                    font-family: arrowFONT;
                    z-index: 2;
                  "
                >
                  ფიზიკური პირი
                </h5>
              </div>
              <div class="down-arrow-div"></div>
              <input
                type="text"
                placeholder="სახელი(ქართულად)*"
                class="input-registration mt-4"
              />
              <input
                type="text"
                placeholder="სახელი(ლათინურად)*"
                class="input-registration mt-3"
              />

              <p
                style="
                  font-family: arrowFONT;
                  font-size: 14px;
                  color: white;
                  margin-left: 18px;
                  font-weight: bold;
                  margin-bottom: -5px;
                  margin-top: 20px;
                "
              >
                სქესი*
              </p>
              <input type="radio" id="male" name="gender" value="male" />
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
                >მდედრობით</label
              >
              <input type="radio" id="female" name="gender" value="female" />
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

              <input
                type="text"
                placeholder="ელ-ფოსტა*"
                class="input-registration mt-3"
              />
              <input
                type="text"
                placeholder="პაროლი*"
                class="input-registration mt-3"
              />
              <input
                type="text"
                placeholder="მისამართი"
                class="input-registration mt-3"
              />
            </div>
            <div class="col-xl-5">
              <div
                style="
                  width: 100%;
                  padding: 10px;
                  height: 45px;
                  border: 2px solid black;
                " 
              >
                <h5
                  class="text-center"
                  style="
                    color: black;
                    font-weight: bold;
                    font-family: arrowFONT;
                    z-index: 2;
                  "
                >
                  იურიდიული პირი
                </h5>
              </div>
              <div class='down-arrow-div2'></div>
              <input
                type="text"
                placeholder="გვარი(ქართულად)*"
                class="input-registration mt-4"
              />
              <input
                type="text"
                placeholder="გვარი(ლათინურად)*"
                class="input-registration mt-3"
              />
              <input
                type="text"
                placeholder="დაბადების თარიღი"
                class="input-registration mt-3"
              />
              <input
                type="text"
                placeholder="მობილური ტელეფონი*"
                class="input-registration mt-3"
              />
              <input
                type="text"
                placeholder="პაროლი(განმეორებით)*"
                class="input-registration mt-3"
              />
              <input
                type="text"
                placeholder="პირადი ნომერი*"
                class="input-registration mt-3"
              />
            </div>
            <div class="col-xl-10 text-center">
              <p
                class="mt-2"
                style="
                  color: white;
                  margin-bottom: 0px;
                  font-family: arrowFONT;
                  font-weight: bold;
                  font-size: 17px;
                "
              >
                რეგისტრაციის დასრულებისას გთხოვთ გადაამოწმოთ<br />
                <span
                  style="
                    color: black;
                    font-size: 17px;
                    font-family: arrowFONT;
                    font-weight: bold;
                  "
                  >თქვენი ელ ფოსტა</span
                >
              </p>
              <div
                class="text-center registerContainer"
                style="margin-left: -20px; margin: 0 auto"
              >
                <button class="registreBtn">
                  {{ $t("register") }}
                  <div class="register-arrow-box">
                    <img
                      style="width: 15px; height: 15x; margin-top: 5px"
                      src="./../../../assets/mainpage/right-arrow.svg"
                      alt="Right arrow"
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RegisterCards from "./DesktopRegistration/RegisterCards.vue";
export default {
  name: "ShowRegisterModal",
  components: { RegisterCards },
  data() {
    return {
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
};
</script>

<style scoped>
.down-arrow-div {
  margin-top: -20px;
  width: 20px;
  background-color: #0396db;
  height: 20px;
  position: absolute;
  margin-left: 140px;
  margin-top: -10px;
  z-index: 1;
  transform: rotate(-45deg);
  border-left: 2px solid white;
  border-bottom: 2px solid white;
}
.down-arrow-div2 {
  display: none;
  margin-top: -20px;
  width: 20px;
  background-color: #0396db;
  height: 20px;
  position: absolute;
  margin-left: 140px;
  margin-top: -10px;
  z-index: 1;
  transform: rotate(-45deg);
  border-left: 2px solid white;
  border-bottom: 2px solid white;
}
.register-arrow-box {
  width: 30px;
  height: 30px;
  border-radius: 25px;
  background-color: #11bdf7;
  margin-left: 198px;
  margin-top: -30px;
}
.registerContainer {
  border-radius: 70px;
  outline: none;
  border: 1px solid #38bdfe;
  padding: 9px;
  text-align: center;
  height: 62px;
  width: 260px;
  margin-top: -15px;
}
.registreBtn {
  border-radius: 70px;
  outline: none;
  padding: 10px;
  width: 240px;
  font-family: arrowFONT;
  font-weight: bold;
  height: 40px;
  text-align: center;
  font-size: 17px;
  color: white;
  background-color: #009ce7;
  border: none;
}
.input-registration {
  width: 100%;
  border: 1px solid white;
  background-color: transparent;
  padding: 10px;
  border-radius: 25px;
  color: white;
  font-family: arrowFONT;
  font-weight: bold;
  outline: none;
}
::placeholder {
  color: #fff;
}
.register-modal {
  position: absolute;
  z-index: 999;
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
@media all and (min-width: 1440px) {
  .main-cont {
    margin-top: 3%;
  }
}
@media all and (min-width: 1640px) {
  .main-cont {
    margin-top: 4%;
  }
}
@media all and (min-width: 1640px) {
  .main-cont {
    margin-top: 5.5%;
  }
}
</style>