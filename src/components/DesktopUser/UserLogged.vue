<template>
  <Navbar
    :image="true"
    :btnColor="`#fff`"
    :textColor="`#fff`"
    class="user-nav"
  />
  <img src="./../../assets/images/image1.jpg" class="bg-image" />

  <div class="container main-cont mt-3 p-0">
    <div class="first-div">
      <h5
        class="text-white text-center"
        style="font-family: arrowFONT; font-weight: bold; padding: 25px"
      >
        ამანათები
      </h5>
      <div class="p-2 main-step-div">
        <div
          class="step-divs text-center"
          :class="{ 'step-divs-active': isFirstActive }"
          @click="activeFirstStep"
        >
          <img
            v-if="isFirstImage"
            class="step-div-image"
            src="./../../assets/conditions/p03.svg"
            alt="Step div Icons"
          />
          <img
            v-else
            class="step-div-image"
            src="./../../assets/conditions/p01.svg"
            alt="Step div Icons"
          />

          <h5
            class="step-div-text"
            :class="{ 'step-div-text-active': isFirstActive }"
          >
            მისაღები<br />
            ამანათები
          </h5>
          <div style="margin: 0 auto; width: 20%">
            <div
              class="step-counter"
              :class="{ 'step-counter-active': isFirstActive }"
            >
              {{ posts.length }}
            </div>
          </div>
        </div>

        <div
          class="step-divs text-center"
          :class="{ 'step-divs-active': isSecondActive }"
          @click="activeSecondStep"
        >
          <img
            v-if="isSecondImage"
            class="step-div-image"
            src="./../../assets/conditions/p03.svg"
            alt="Step div Icons"
          />
          <img
            v-else
            class="step-div-image"
            src="./../../assets/conditions/p01.svg"
            alt="Step div Icons"
          />
          <h5
            class="step-div-text"
            :class="{ 'step-div-text-active': isSecondActive }"
          >
            მისაღები<br />
            ამანათები
          </h5>
          <div style="margin: 0 auto; width: 20%">
            <div
              class="step-counter"
              :class="{ 'step-counter-active': isSecondActive }"
            >
              {{ 0 }}
            </div>
          </div>
        </div>

        <div
          class="step-divs text-center"
          :class="{ 'step-divs-active': isThirdActive }"
          @click="activeThirdStep"
        >
          <img
            v-if="isThirdImage"
            class="step-div-image"
            src="./../../assets/conditions/p03.svg"
            alt="Step div Icons"
          />
          <img
            v-else
            class="step-div-image"
            src="./../../assets/conditions/p01.svg"
            alt="Step div Icons"
          />
          <h5
            class="step-div-text"
            :class="{ 'step-div-text-active': isThirdActive }"
          >
            მისაღები<br />
            ამანათები
          </h5>
          <div style="margin: 0 auto; width: 20%">
            <div
              class="step-counter"
              :class="{ 'step-counter-active': isThirdActive }"
            >
              {{ 0 }}
            </div>
          </div>
        </div>

        <div
          class="step-divs text-center"
          :class="{ 'step-divs-active': isFourthActive }"
          @click="activeFourthStep"
        >
          <img
            v-if="isFourthImage"
            class="step-div-image"
            src="./../../assets/conditions/p03.svg"
            alt="Step div Icons"
          />
          <img
            v-else
            class="step-div-image"
            src="./../../assets/conditions/p01.svg"
            alt="Step div Icons"
          />
          <h5
            class="step-div-text"
            :class="{ 'step-div-text-active': isFourthActive }"
          >
            მისაღები<br />
            ამანათები
          </h5>
          <div style="margin: 0 auto; width: 20%">
            <div
              class="step-counter"
              :class="{ 'step-counter-active': isFourthActive }"
            >
              {{ 0 }}
            </div>
          </div>
        </div>

        <div
          class="step-divs text-center"
          :class="{ 'step-divs-active': isFifthActive }"
          @click="activeFifthStep"
        >
          <img
            v-if="isFifthImage"
            class="step-div-image"
            src="./../../assets/conditions/p03.svg"
            alt="Step div Icons"
          />
          <img
            v-else
            class="step-div-image"
            src="./../../assets/conditions/p01.svg"
            alt="Step div Icons"
          />
          <h5
            class="step-div-text"
            :class="{ 'step-div-text-active': isFifthActive }"
          >
            მისაღები <br />
            ამანათები
          </h5>
          <div style="margin: 0 auto; width: 20%">
            <div
              class="step-counter"
              :class="{ 'step-counter-active': isFifthActive }"
            >
              {{ 0 }}
            </div>
          </div>
        </div>
      </div>
      <div class="scrolling-div">
        <div v-if="isFirstActive" class="mt-2 p-3">
          <h5
            style="
              color: white;
              font-family: arrowFONT;
              font-weight: bold;
              font-size: 16px;
            "
          >
            ამანათის დამატება
          </h5>
          <div style="display: flex">
            <input
              v-model="code"
              type="text"
              placeholder="შეიყვანეთ თრექინგ კოდი"
              style="
                border: 1px solid #1F9EE5; border-radius: 40px; font-family: arrowFONT; outline: none;
                padding 15px; color: #fff;height: 40px;
                  background-color: transparent; width: 250px; text-align: center;
                "
              onfocus="this.placeholder = ''"
              onblur="this.placeholder = 'შეიყვანეთ თრექინგ კოდი'"
            />
            <div class="text-center addContainer" style="margin-left: 20px">
              <button
                class="addBtn"
                @click.prevent="addPost"
                @keyup.enter="addPost"
              >
                დამატება
                <div class="add-arrow-box">
                  <img
                    style="width: 15px; height: 15x; margin-top: 5px"
                    src="./../../assets/mainpage/right-arrow.svg"
                    alt="Right arrow"
                  />
                </div>
              </button>
            </div>
          </div>
          <div class="mt-5">
            <h5
              style="
                color: white;
                font-family: arrowFONT;
                font-weight: bold;
                font-size: 16px;
              "
            >
              მისაღები ამანათები
            </h5>

            <!-- POSTS -->
            <h5
              v-if="isEmpty"
              style="
                color: red;
                margin-top: 20px;
                font-family: arrowFONT;
                font-weight: bold;
                font-size: 18px;
              "
            >
              ამანათები არ მოიძებნება
            </h5>
            <MainPostAdd
              v-else
              v-for="post in posts.slice().reverse()"
              :key="post.code"
              :code="post.code"
            />
            <div v-if="posts.length > 2" style="margin-bottom: 35px"></div>
            <!-- POSTS -->
          </div>
        </div>
        <div v-if="isSecondActive" class="">2</div>
        <div v-if="isThirdActive" class="">3</div>
        <div v-if="isFourthActive" class="">4</div>
        <div v-if="isFifthActive" class="">5</div>
      </div>
    </div>
    <div
      style="
        border-radius: 10px;
        height: auto;
        background-color: rgba(255, 255, 255, 0.15);
        width: 40.5%;
      "
    >
      <div
        style="
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 15px;
        "
      >
        <div>
          <img
            src="http://cdn.onlinewebfonts.com/svg/img_212716.png"
            style="width: 60px; height: 60px"
          />
        </div>
        <div>
          <h5
            style="
              font-size: 24px;
              font-weight: bold;
              color: #fff;
              margin-left: 5px;
              font-family: arrowFONT;
              margin-top: 10px;
            "
          >
            გიორგი ბოცვაძე
          </h5>
          <h5
            style="
              font-size: 16px;
              font-weight: bold;
              color: #fff;
              margin-left: 5px;
              font-family: arrowFONT;
            "
          >
            ოთახის ნომერი:
            <span
              style="
                font-size: 20px;
                color: #1f9ee5;
                font-family: arrowFONT;
                font-weight: bold;
              "
              >U234874</span
            >
          </h5>
        </div>
      </div>

      <div
        style="display: flex; margin-top: 70px; justify-content: space-between"
      >
        <div style="align-items: center; text-align: center; margin-left: 20px">
          <h5
            style="
              font-weight: bold;
              font-family: arrowFONT;
              font-size: 20px;
              color: #fff;
            "
          >
            ბალანსი
          </h5>
          <h5
            style="
              font-weight: bold;
              font-family: arrowFONT;
              font-size: 22px;
              color: #009ce7;
              letter-spacing: 2px;
            "
          >
            15&#8382;
          </h5>
          <div class="text-center balanceBtnContainer">
            <button class="balanceBtn">
              ბალანსის შევსება
              <div class="balance-arrow-box">
                <img
                  style="width: 12px; height: 12x; margin-top: 5px"
                  src="./../../assets/mainpage/right-arrow.svg"
                  alt="Right arrow"
                />
              </div>
            </button>
          </div>
        </div>
        <div
          style="align-items: center; text-align: center; margin-right: 20px"
        >
          <h5
            style="
              font-weight: bold;
              font-family: arrowFONT;
              font-size: 20px;
              color: #fff;
            "
          >
            გადასახდელი
          </h5>
          <h5
            style="
              font-weight: bold;
              font-family: arrowFONT;
              font-size: 22px;
              color: #009ce7;
              letter-spacing: 2px;
            "
          >
            0&#8382;
          </h5>
          <div class="text-center paymentBtnContainer">
            <button class="paymentBtn">
              გადახდა
              <div class="payment-arrow-box">
                <img
                  style="width: 12px; height: 12x; margin-top: 5px"
                  src="./../../assets/mainpage/right-arrow.svg"
                  alt="Right arrow"
                />
              </div>
            </button>
          </div>
        </div>
      </div>

            <div
        style="display: flex; margin-top: 100px; justify-content: space-between; margin-left: 20px; margin-right: 20px;"
      >
        <button class='right-menu-btn'>ტრანსზაქციები</button>
        <button class='right-menu-btn'>თურქეთის მისამართი</button>
        <button class='right-menu-btn'>პარამეტრები</button>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./../Navbar.vue";
import MainPostAdd from "./MainPostAdd.vue";
export default {
  name: "UserLogged",
  data() {
    return {
      isFirstImage: true,
      isSecondImage: false,
      isThirdImage: false,
      isFourthImage: false,
      isFifthImage: false,

      isFirstActive: true,
      isSecondActive: false,
      isThirdActive: false,
      isFourthActive: false,
      isFifthActive: false,

      // POSTS
      code: "",
      isEmpty: false,

      posts: [
        { code: "5145849821475821415414" },
        { code: "5145849821475821415415" },
      ],
    };
  },
  components: { Navbar, MainPostAdd },
  methods: {
    activeFirstStep() {
      this.isFirstImage = true;

      this.isFirstActive = true;

      (this.isSecondActive = false),
        (this.isThirdActive = false),
        (this.isFourthActive = false),
        (this.isFifthActive = false),
        (this.isSecondImage = false),
        (this.isThirdImage = false),
        (this.isFourthImage = false),
        (this.isFifthImage = false);
    },
    activeSecondStep() {
      (this.isSecondImage = true),
        (this.isSecondActive = true),
        (this.isFirstActive = false);
      (this.isThirdActive = false),
        (this.isFourthActive = false),
        (this.isFifthActive = false),
        (this.isFirstImage = false);
      (this.isThirdImage = false),
        (this.isFourthImage = false),
        (this.isFifthImage = false);
    },
    activeThirdStep() {
      (this.isSecondImage = false),
        (this.isSecondActive = false),
        (this.isFirstActive = false);
      (this.isThirdActive = true),
        (this.isFourthActive = false),
        (this.isFifthActive = false),
        (this.isFirstImage = false);
      (this.isThirdImage = true),
        (this.isFourthImage = false),
        (this.isFifthImage = false);
    },
    activeFourthStep() {
      (this.isSecondImage = false),
        (this.isSecondActive = false),
        (this.isFirstActive = false);
      (this.isThirdActive = false),
        (this.isFourthActive = true),
        (this.isFifthActive = false),
        (this.isFirstImage = false);
      (this.isThirdImage = false),
        (this.isFourthImage = true),
        (this.isFifthImage = false);
    },
    activeFifthStep() {
      (this.isSecondImage = false),
        (this.isSecondActive = false),
        (this.isFirstActive = false);
      (this.isThirdActive = false),
        (this.isFourthActive = false),
        (this.isFifthActive = true),
        (this.isFirstImage = false);
      (this.isThirdImage = false),
        (this.isFourthImage = false),
        (this.isFifthImage = true);
    },
    addPost() {
      if (this.code.length >= 8) {
        this.posts.push({
          code: this.code,
        });
        if (this.isEmpty == true) this.isEmpty = false;
        this.code = "";
      } else {
        alert("გთხოვთ შეიყვანოთ 8 ციფრზე მეტი");
        this.code = "";
      }
    },
  },
  mounted() {
    this.emitter.on("deletePost", (code) => {
      const index = this.posts.findIndex((x) => x.code == code);
      if (index > -1) {
        this.posts.splice(index, 1);
      }
      if (this.posts.length <= 0) this.isEmpty = true;
    });
    if (this.posts.length <= 0) this.isEmpty = true;
  },
};
</script>

<style scoped>
.right-menu-btn {
  border: 1px solid white; background-color: transparent;
  padding: 7px; font-family: arrowFONT; font-weight: bold;
  color: #fff;border-radius: 40px;
}
::placeholder {
  font-size: 14px;
  color: #fff;
  font-family: arrowFONT;
  font-weight: bold;
}
.main-step-div {
  display: flex;
  justify-content: space-between;
}
.step-div-text {
  font-family: arrowFONT;
  color: #fff;
  font-size: 16px;
  margin-top: 5px;
  font-weight: bold;
}
.step-div-text-active {
  color: #1f9ee5;
}
.step-divs {
  width: 20%;
  border-bottom: 1px solid #fff;
}
.step-divs-active {
  border-bottom: 1px solid #1f9ee5;
}
.step-counter {
  background-color: #fff;
  margin: 0 auto;
  position: absolute;
  z-index: 2;
  margin-top: -7px;
  width: 25px;
  height: 15px;
  border-radius: 20px;
  color: #000;
  font-weight: bold;
  font-size: 10px;
}
.step-counter-active {
  background-color: #1f9ee5;
  color: #fff;
}
.first-div {
  width: 59%;
  /* border: 1px solid black; */
  border-radius: 10px;
  height: 490px;
  background-color: rgba(255, 255, 255, 0.15);
}
.step-div-image {
  width: 40px;
  height: 40px;
}
.bg-image {
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.main-cont {
  position: absolute;
  left: 50%;
  top: 55%;
  transform: translate(-50%, -55%);
  /* margin-top: 120px; */
  max-width: 1272px;
  /* border: 1px solid red; */
  padding-left: auto;
  padding-right: auto;
  display: flex;
  justify-content: space-between;
}
.user-nav {
  top: -20px;
  margin: 0 auto;
}
.addContainer {
  border-radius: 70px;
  outline: none;
  border: 1px solid lightgray;
  padding: 3px;
  text-align: center;
  height: 40px;
  width: 230px;
  /* margin-top: -15px; */
}
.addBtn {
  border-radius: 70px;
  outline: none;
  padding: 5px;
  width: 220px;
  font-family: arrowFONT;
  font-weight: bold;
  height: 31px;
  text-align: center;
  font-size: 16px;
  color: white;
  background-color: #009ce7;
  border: none;
}
.add-arrow-box {
  width: 27px;
  height: 27px;
  border-radius: 25px;
  background-color: #11bdf7;
  margin-left: 185px;
  margin-top: -27px;
}
.scrolling-div {
  overflow-y: scroll !important;
  height: 300px;
}
::-webkit-scrollbar {
  width: 3px;
  height: 50px;
}

::-webkit-scrollbar-track {
  border-radius: 2px;
}

::-webkit-scrollbar-thumb {
  background: #00a8f0;
  border-radius: 30px;
}

::-webkit-scrollbar-thumb:hover {
  background: #00a8f0;
}
.balanceBtnContainer {
  border-radius: 70px;
  outline: none;
  border: 1px solid lightgray;
  padding: 3px;
  text-align: center;
  height: 40px;
  width: 275px;
  /* margin-top: -15px; */
}
.balanceBtn {
  border-radius: 70px;
  outline: none;
  padding: 5px;
  width: 265px;
  font-family: arrowFONT;
  font-weight: bold;
  height: 31px;
  text-align: center;
  font-size: 16px;
  color: white;
  background-color: #009ce7;
  border: none;
}
.balance-arrow-box {
  width: 27px;
  height: 27px;
  border-radius: 25px;
  background-color: #11bdf7;
  margin-left: 230px;
  margin-top: -27px;
}

.paymentBtnContainer {
  border-radius: 70px;
  outline: none;
  border: 1px solid lightgray;
  padding: 3px;
  text-align: center;
  height: 40px;
  width: 190px;
  /* margin-top: -15px; */
}
.paymentBtn {
  border-radius: 70px;
  outline: none;
  padding: 5px;
  width: 180px;
  font-family: arrowFONT;
  font-weight: bold;
  height: 31px;
  text-align: center;
  font-size: 16px;
  color: black;
  background-color: #fff;
  border: none;
}
.payment-arrow-box {
  width: 27px;
  height: 27px;
  border-radius: 25px;
  background-color: #11bdf7;
  margin-left: 145px;
  margin-top: -27px;
}
@media all and (min-width: 1440px) {
  .main-cont {
    max-width: 1380px;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -40%);
  }
}
@media all and (min-width: 1640px) {
  .main-cont {
    max-width: 1570px;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -40%);
  }
  .step-div-text {
    font-size: 22px;
    margin-top: 5px;
  }
  .step-div-image {
    width: 50px;
    height: 50px;
  }
  .step-counter {
    background-color: #fff;
    margin-top: -12px;
    width: 35px;
    height: 25px;
    font-size: 15px;
  }
  .step-counter-active {
    background-color: #1f9ee5;
    color: #fff;
  }
  .first-div {
    height: 555px;
  }
}
@media all and (min-width: 1740px) {
  .main-cont {
    max-width: 1580px;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -40%);
  }
  .step-div-text {
    font-size: 24px;
    margin-top: 5px;
  }
  .step-div-image {
    width: 60px;
    height: 60px;
  }
  .first-div {
    height: 540px;
  }
}
</style>