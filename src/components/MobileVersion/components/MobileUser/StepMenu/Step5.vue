<template>
    <div class="mt-2 p-3">
    <h1
      style="
        color: #fff;
        font-family: arrowFONT;
        font-size: 16px;
        font-weight: bold;
      "
    >
      მიღებული ამანათები
    </h1>
    <div
      class="mt-2"
      style="
        height: 110px;
        border: 1px solid white;
        border-radius: 10px;
        background-color: transparent;
        display: flex;
        padding: 10px;
      "
    >
      <img
        src="./../../../../../assets/mobile/amanatebi.svg"
        style="width: 40px; height: 40px"
      />
      <h5 class="txt-head">თქვენ არ მიგიღიათ ამანათი</h5>
    </div>

    <div class='mt-3' style="display: flex; padding: 5px; border: 1px solid white; background-color: transparent; border-radius: 40px; justify-content: space-between;">
        <input type="date" :value='`2001-12-12`' class="datepicker-input">
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
      class="mt-2"
      style="
        height: 120px;
        border: 1px solid white;
        border-radius: 10px;
        background-color: transparent;
        display: flex;
        flex-wrap: wrap;
        padding: 10px;
      "
      v-for='item in 2' :key='item'
    >
      <img
        src="./../../../../../assets/mobile/amanatebi.svg"
        style="width: 40px; height: 40px"
      />
      <h5
        style="
          color: red;
          font-family: arrowFONT;
          font-weight: bold;
          font-size: 24px;
          margin-left: 7px;
          color: #fff;
        "
      >
        <span style="color: #1f9ee5">HB011HT</span><br />
        935689458695964<br />
        1500$
      </h5>
    </div>
    
    </div>
</template>

<script>
export default {
    name: "Step5",
    date() {
        return {
            todaysDate: ''
        }
    },
    mounted() {
        this.todaysDate = new Date()
    }
}
</script>

<style scoped>
.txt-head {
  /* color: red; */
  font-family: arrowFONT;
  font-weight: bold;
  font-size: 16px;
  margin-left: 7px;
  color: #fff;
}
input[type=date] {
    padding: 5px;
    padding-left: 20px;
    background-color: #F1F2FB;
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