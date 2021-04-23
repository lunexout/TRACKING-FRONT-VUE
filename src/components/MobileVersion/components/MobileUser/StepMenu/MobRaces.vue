<template>
  <div style="padding: 5px;">
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
          font-size: 23px;
        "
      >
        ამანათები
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
      <input type="text" placeholder="ჩაწერეთ რეისის ნომერი" />
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

    <div style='max-width: 500px; margin: 0 auto;'>
        <div class='mt-4' style='display: flex; justify-content: space-between;'>
        <h5 class='race-txt' style='color: #FC5E71;'>ჩამოსასვლელი რეისები</h5>
        <h5 class='race-txt' style='color: #1AF6B1;'>ჩამოსული რეისები</h5>
        </div>

        <div style='overflow-y: scroll;
        height: 270px;
        max-width: 500px;
        margin: 0 auto;'>
        <div class='mt-4' style='display: flex; justify-content: space-between;'>
            <div style='background-color: #FC5E71; flex: 1;  width: 100%; height: 2px;'>
                <div class='red-prod'>{{redPosts.length}}</div>
                <div class='prod-box' style='margin-right:3px;'
                 v-for='item in redPosts' :key='item.id'>
                        <div style=''>
                            <img
                            :src='item.img'
                            style="width: 30px; margin-top: 2px;"
                            />
                            <h5 class="complate-item-up" style="color: #FC5E71; margin-left: 33px;">{{item.title}}</h5>
                            <br />
                            <h5 class="complate-item-down" style='font-size: 12px; margin-left: 33px;'>{{ item.date }}</h5>
                        </div>
                    <div class="complate-item-down" style='font-size: 12px; margin-top: 0px'>{{ item.desc }}</div>
                </div>
            </div>
            <div style='background-color: #1AF6B1; flex: 1; width: 100%; height: 2px'>
                <div class='green-prod'>{{greenPosts.length}}</div>
                <div class='prod-box' style='margin-left:3px;'
                 v-for='item in greenPosts' :key='item.id'>
                        <div style=''>
                            <img
                            :src='item.img'
                            style="width: 30px; margin-top: 2px;"
                            />
                            <h5 class="complate-item-up" style="color: #1AF6B1; margin-left: 33px;">{{item.title}}</h5>
                            <br />
                            <h5 class="complate-item-down" style='font-size: 12px; margin-left: 33px;'>{{ item.date }}</h5>
                        </div>
                    <div class="complate-item-down" style='font-size: 12px; margin-top: 0px'>{{ item.desc }}</div>
                </div>
            </div>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
import img1 from './../../../../../assets/conditions/p03.svg'

export default {
  name: "MobRaces",
  data(){
      return {
          greenPosts: [
              {
                  id: 1,
                  title: 'H01024B2',
                  img: img1,
                  date: '29 აპრილი 2021',
                  desc: "რეისის ჩამოსვლის სავარაუდო თარიღირეისის ჩამოსვლის სავარაუდო თარიღი"
              },
                            {
                  id: 2,
                  title: 'H010ff32',
                  img: img1,
                  date: '11 აპრილი 2021',
                  desc: "რეისის ჩამოსვლის სავარაუდო თარიღი"
              },
                            {
                  id: 3,
                  title: 'H01024B3',
                  img: img1,
                  date: '30 აპრილი 2021',
                  desc: "რეისის ჩამოსვლის სავარაუდო თარიღი1"
              },
          ],
          redPosts: [
              {
                  id: 1,
                  title: 'H01ff24B2',
                  img: img1,
                  date: '11 აპრილი 2021',
                  desc: "რეისის ჩამოსვლის სავარაუდო თარიღი2"
              },
                            {
                  id: 2,
                  title: 'H0aa2f32',
                  img: img1,
                  date: '2 აპრილი 2021',
                  desc: "რეისის ჩამოსვლის სავარაუდო თარიღი3"
              },
          ]
      }
  }
};
</script>

<style scoped>
.prod-box {
    margin-top: 20px;
    /* margin-bottom: 10px; */
    border-radius: 15px;
                /* margin-right:3px;  */
                height: 150px; border: 1px solid white;
                display: flex;
                /* justify-content: center; */
                padding: 5px;
                flex-direction: column;
}
.complate-item-up {
  font-family: arrowFONT;
  font-weight: bold;
  margin-bottom: -20px;
  margin-top:-30px;
}
.complate-item-down {
  font-family: arrowFONT;
  font-weight: bold;
  color: #fff;
  font-size: 20px;
}
.post-header {
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  font-family: arrowFONT;
}
.red-prod {
    position: absolute;
    text-align: center;
    font-family: arrowFONT;
    font-weight: bold;
                height: 20px; width: 30px; background-color: #FC5E71;
                margin-left: 15px; margin-top: -10px; border-radius:15px;
}
.green-prod {
    position: absolute;
    text-align: center;
    font-family: arrowFONT;
    font-weight: bold;
                height: 20px; width: 30px; background-color: #1AF6B1;
                right: 15px; margin-top: -10px; border-radius:15px;
}
.race-txt {
    font-size: 12px;
    font-weight: bold;
    font-family: arrowFONT;
}
input[type="text"] {
  padding: 5px;
  padding-left: 20px;
  width: 200px;
  background-color: #f1f2fb;
  border-radius: 25px;
  outline: none;
  font-family: arrowFONT;
  font-weight: bold;
  border: none;
  appearance: none;
  color: #027EC4;
}
::placeholder {
    color: #027EC4;
    font-size: 14px;
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