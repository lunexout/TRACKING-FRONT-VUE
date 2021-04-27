<template>
  <div class="post-complate-modal animate__animated animate__fadeInDown">
    <button
      @click="() => emitter.emit('closecomplatepost')"
      class="post-close-modal"
    >
      X
    </button>
    <div class="post-menu-cont">
      <h1 class="post-header">შეძენილი და მიღებული ამანათი</h1>
      <div class="styled-div mt-4">
        <div class='mt-3' v-for='item in postTitles' :key='item.id'>
          <img
            :src='item.img'
            style="width: 40px; margin-top: -20px"
          />
          <div style="margin-left: 52px; margin-top: -35px;">
            <h5 class="complate-item-up">{{item.title}}</h5>
            <br />
            <h5 class="complate-item-down">{{ item.info }}</h5>
          </div>
        </div>
      </div>

    <div class='styled-div mt-3' style="overflow-y: scroll;">
        <div v-for='item in postProducts' :key='item.id'>

          <!-- <div > -->
          <img
            :src='item.img'
            style="width: 40px; margin-top: -20px"
          />
          <div style="margin-left: 52px; margin-top: -35px;">
            <h5 class="complate-item-up">{{item.title}}</h5>

            <br />
            <h5 class="complate-item-down">{{ item.price }}</h5>
                        </div>

        </div>
    </div>

    <div class='styled-div mt-3' style="height: 250px">
        <div class='mt-3' v-for='item in postService' :key='item.id'>
          <img
            :src='item.img'
            style="width: 40px; margin-top: -20px"
          />
          <div  style="margin-left: 52px; margin-top: -35px;">
            <h5 class="complate-item-up">{{item.title}}</h5>
            <br />
            <h5 class="complate-item-down">{{ item.info }}</h5>
          </div>
        </div>
    </div>

    </div>
  </div>
</template>

<script>
import img1 from './../../../../../assets/conditions/p01.svg'
import img2 from './../../../../../assets/conditions/p03.svg'
import img3 from './../../../../../assets/conditions/p02.svg'
import img4 from './../../../../../assets/conditions/p03.svg'

import productImg from './../../../../../assets/conditions/p02.svg'


export default {
  name: "MobPostComplate",
  props: ["data"],
  data() {
    return {
      postTitles: [
          {
              id: 1,
              title: 'ჩამოტანის კოდი',
              info: this.data.title,
              img: img1
          },
                    {
              id: 2,
              title: 'თრექინგ კოდი',
              info: this.data.code,
              img:  img2
          },          {
              id: 3,
              title: 'ვებგვერდი კოდი',
              info: this.data.web,
              img:  img3
          },          {
              id: 4,
              title: 'ჯამური ფასი',
              info: this.data.price,
              img:  img4
          }
      ],
      postProducts: [
          {
              id: 1,
              img: productImg,
              title: 'აუდიო აპარატურის ნაწილი1',
              price: '200$'
          },
                    {
              id: 2,
              img: productImg,
              title: 'აუდიო აპარატურის ნაწილი2',
              price: '300$'
          },
                    {
              id: 3,
              img: productImg,
              title: 'აუდიო აპარატურის ნაწილი3',
              price: '350$'
          },
                    {
              id: 4,
              img: productImg,
              title: 'აუდიო აპარატურის ნაწილი4',
              price: '400$'
          },
                    {
              id: 5,
              img: productImg,
              title: 'აუდიო აპარატურის ნაწილი5',
              price: '500$'
          },
      ],
      postService: [
          {
              id: 1,
              title: 'არჩეული სერვისი',
              info: this.data.service,
              img: img1,
          },
          {
              id: 2,
              title: 'თქვენი მისამართი',
              info: this.data.adress,
              img: img1,
          },
          {
              id: 3,
              title: 'ჩაბარების თარიღი',
              info: this.data.date,
              img: img4,
          },
      ]
    };
  },
};
</script>

<style scoped>
.complate-item-up {
  font-family: arrowFONT;
  font-weight: bold;
  margin-bottom: -20px;
}
.complate-item-down {
  font-family: arrowFONT;
  font-weight: bold;
  color: #fff;
  font-size: 18px;
}
.post-header {
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  font-family: arrowFONT;
}
.styled-div {
  height: 260px;
  background-color: transparent;
  border: 1px solid white;
  padding:15px;
  display: flex;
  flex-wrap: wrap;
  border-radius: 25px;
  width: 100%;
}
.post-menu-cont {
  position: absolute;
  left: 50%;
  top: 50%;
  height: auto;
  min-width: 300px;
  max-width: 370px;
  transform: translate(-50%, -50%);
}
.post-close-modal {
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
.post-complate-modal {
  position: absolute;
  z-index: 99998;
  top: 0;
  left: 0;
  width: 100%;
  height: 1200px;
  background-color: #0396db;
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
.services-text {
  font-size: 15px;
}
</style>
