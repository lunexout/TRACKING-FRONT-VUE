<template>
  <div style="padding: 5px">
    <div style="display: flex; justify-content: center; padding: 10px">
      <img
        src="./../../../../../assets/mobile/amanatebi.svg"
        style="width: 30px; height: 30px"
      />
      <h5
        class="text-white text-center"
        style="
          font-family: arrowFONT;
          font-weight: bold;
          padding-left: 5px;
          padding-top: 3px;
          font-size: 16px;
        "
      >
        ხშირად დასმული კითხვები
      </h5>
    </div>

    <div
      class="mt-3"
      style="
        display: flex;
        padding: 5px;
        border: 1px solid white;
        background-color: transparent;
        border-radius: 40px;
        justify-content: space-between;
        max-width: 500px;
        margin: 0 auto;
      "
    >
      <input type="date" :value="`2001-12-12`" class="datepicker-input" />
      <button class="balanceBtn" @click.prevent="login" @keyup.enter="login">
        ძებნა
        <div class="balance-arrow-box">
          <img
            style="width: 8px; height: 8x; margin-top: -2px"
            src="./../../../../../assets/mainpage/right-arrow.svg"
            alt="Right arrow"
          />
        </div>
      </button>
    </div>

    <div
      style="
        overflow-y: scroll;
        height: 300px;
        max-width: 500px;
        margin: 0 auto;
      "
    >
      <QuestionItems />
    </div>
  </div>
</template>

<script>
import QuestionItems from "./QuestionItems.vue";
export default {
  name: "MobQuestions",
  components: {
    QuestionItems,
  },
};
</script>

<style scoped>
input[type="date"] {
  padding: 5px;
  padding-left: 20px;
  background-color: #f1f2fb;
  border-radius: 25px;
  outline: none;
  font-family: arrowFONT;
  font-weight: bold;
  border: none;
  appearance: none;
}
.balance-arrow-box {
  width: 15px;
  height: 15px;
  border-radius: 25px;
  background-color: #11bdf7;
  margin-left: 50px;
  margin-top: -18px;
}

.balanceBtn {
  border-radius: 70px;
  outline: none;
  padding: 10px;
  width: 80px;
  font-family: arrowFONT;
  font-weight: bold;
  height: auto;
  text-align: center;
  font-size: 12px;
  color: white;
  background-color: #009ce7;
  border: none;
}
</style>