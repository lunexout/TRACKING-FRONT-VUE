<template>
  <div style="padding: 15px" class="mt-4">
    <h1 class="header-txt">მიღებული ამანათები</h1>

    <div class="post-box">
      <img
        style="width: 40px; height: 40px"
        src="./../../../assets/conditions/p01.svg"
      />
      <h1 class="header-txt p-2">თქვენ არ გაქვთ არცერთი ამანათი მიღებული</h1>
    </div>
    <div
      class="post-box mt-2"
      style="height: 101px; justify-content: flex-start"
      v-for='item in postComplate' :key='item.id'
    >
      <div>
        <img
          src="./../../../assets/conditions/p01.svg"
          style="height: 40x; width: 40px; margin-top: -10px"
        />
      </div>
      <div style="display: flex; justify-content: space-between">
        <div>
          <h1
            class="header-txt p-2"
            style="color: #1c69b2; margin-top: -20px; font-size: 29px"
          >
            {{item.title}}
          </h1>
          <br />
          <h1 class="header-txt p-2" style="margin-top: -45px">{{item.code}}</h1>
          <br />
          <h1 class="header-txt p-2" style="margin-top: -45px">{{item.price}}$</h1>
        </div>
        <div style="margin-left: 260px; margin-top: 10px">
          <button class='detailView' @click='() => {
              emitter.emit("complatepostdetail", item)
            }'>
            დეტალურად ნახვა
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Step5",
  data() {
    return {
      postComplate: [
        {
          id: 1,
          title: "HB011HT",
          code: "23942343243423",
          price: "1500$",
          web: "amazon.com",
          service: "კურიერით მომსახურება",
          date: "11-02-2021",
          adress: "ბათუმი, ჭავჭავაძის 135",
        },        {
          id: 2,
          title: "HB011HT",
          code: "23942343243423",
          price: "1500$",
          web: "aliexpress.com",
          service: "კურიერით მომსახურება",
          date: "11-02-2021",
          adress: "ბათუმი, ჭავჭავაძის 135",
        },
      ]
    }
  }
};
</script>

<style scoped>
.detailView {
                border-radius: 40px;
              background-color: #009ce7;
              border: none;
              width: 250px;
              font-weight: bold;
              font-family: arrowFONT;
              color: #fff;
              height: 41px;
              padding: 5px;
}
.header-txt {
  color: #fff;
  font-size: 20px;
  font-family: arrowFONT;
  font-weight: bold;
}
.post-box {
  padding: 15px;
  border: 1px solid white;
  border-radius: 15px;
  height: 70px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  color: #fff;
}
</style>