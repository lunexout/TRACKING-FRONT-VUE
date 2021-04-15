<template>
  <div class="register-modal animate__animated animate__fadeInDown">
    <button
      @click="() => emitter.emit('closemobregisterrulemodal')"
      class="close-reg-modal"
    >
      X
    </button>
    <div class="container" style="max-width: 900px; margin-top: 100px">
      <div class="row">
        <div class="col-xl-12" v-for="item in cards" :key="item.id">
          <RegisterCards
            :cardHeader="item.cardHeader"
            :firstCondition="item.firstCondition"
            :secondCondition="item.secondCondition"
          />
        </div>
      </div>
    </div>
    <div
      class="text-center registerContainer mt-4"
      style="margin-left: -20px; margin: 0 auto"
    >
      <button
        class="registreBtn"
        @click="
          () => {
            emitter.emit('mobregistermodal');
            emitter.emit('closemobregisterrulemodal');
          }
        "
      >
        შემდეგი
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
</template>

<script>
import RegisterCards from "./../../DesktopRegistration/RegisterCards.vue";
export default {
  name: "ShowMobRegisterRules",
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
.register-modal {
  position: absolute;
  z-index: 99997;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 930px;
  background-color: #0396db;
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
</style>