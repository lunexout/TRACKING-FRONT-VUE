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

    <div
      class="mt-3"
      style="
        display: flex;
        padding: 5px;
        border: 1px solid white;
        background-color: transparent;
        border-radius: 40px;
        justify-content: space-between;
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
      v-for="item in complatePosts"
      :key="item.id"
      @click="openPostComplateModal(item)"
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
        <span style="color: #1f9ee5">{{ item.title }}</span
        ><br />
        {{ item.code }}<br />
        {{ item.price }}
      </h5>
    </div>
  </div>
</template>

<script>
export default {
  name: "Step5",
  data() {
    return {
      todaysDate: "",
      complatePosts: [
        {
          id: 1,
          title: "HB011HT",
          code: "23942343243423",
          price: "1500$",
          web: "amazon.com",
          service: "კურიერით მომსახურება",
          date: "11-02-2021",
          adress: "ბათუმი, ჭავჭავაძის 135",
        },
        {
          id: 2,
          title: "HB033HT",
          code: "99932483289923",
          price: "300$",
          web: "aliexpress.com",
          service: "ფილიალიდან გატანა",
          date: "21-02-2021",
          adress: "თბილისი, დოლიძის ჩიხი 9",
        },
      ],
    };
  },
  methods: {
    openPostComplateModal(item) {
      const data = {
        code: item.code,
        title: item.title,
        price: item.price,
        web: item.web,
        service: item.service,
        date: item.date,
        adress: item.adress,
      };
      this.emitter.emit("opencomplatepost", data);
    },
  },
  mounted() {
    this.todaysDate = new Date();
  },
};
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