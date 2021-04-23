<template>
  <Navbar :color='`#082139`'/>
  
  <MobMenu v-if='isMobMenu'/>
  <MobTransactions v-if='isTransactions'/>
  <MobTurkeyAdress v-if='isTurkeyAdress'/>
  <MobParameters v-if='isParameters'/>
  <MobChangePassword v-if='isChangePassProfile'/>
  <MobProfParameters v-if='isParamProfile' />
  <MobNotification  v-if='isNotification'/>
  <MobPayment v-if="isPayment" />
  <MobUserLoggedDeclare :code="declare_code" v-if="isDeclare" />
  <MobAddBalance v-if="isAddBalanace" />
  <MobGanbajeba :code="ganbajeba_code" v-if='isGanbajeba'/>
  <MobPostComplate :data='postComplateCode' v-if='isPostComplate' />
  <template v-else>
    <div>
      <img
        style="
          position: absolute;
          background-size: cover;
          width: 100%;
          height: 370px;
        "
        src="./../../../../assets/mobile/loggeduser1bg.jpg"
      />
      <div
        style="
          max-width: 550px;
          margin-top: 90px;
          color: #fff;
          z-index: 1;
          left: 50%;
          transform: translate(-50%);
          width: 92%;
          border-radius: 10px;
          background-color: rgba(255, 255, 255, 0.15);
          position: absolute;
          height: 260px;
          margin-top: 100px;
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
          style="
            display: flex;

            justify-content: space-between;
            max-width: 400px;
            margin: 0 auto;
            margin-top: 40px;
          "
        >
          <div
            style="align-items: center; text-align: center; margin-left: 5px"
          >
            <h5
              style="
                font-weight: bold;
                font-family: arrowFONT;
                font-size: 19px;
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
              0 &#8382;
            </h5>
            <div class="text-center balanceBtnContainer">
              <button
                class="balanceBtn"
                @click="emitter.emit('openmobbalanace')"
              >
                ბალანსის შევსება
              </button>
            </div>
          </div>
          <div
            style="align-items: center; text-align: center; margin-right: 5px"
          >
            <h5
              style="
                font-weight: bold;
                font-family: arrowFONT;
                font-size: 19px;
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
            <div
              class="text-center paymentBtnContainer"
              @click="emitter.emit('openmobpayment')"
            >
              <button class="paymentBtn">გადახდა</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mob-three-btn-cont">
      <button class="mob-transaction-button" @click='emitter.emit("openmobtransactions")'>ტრანზაქციები</button>
      <button class="mob-transaction-button" @click='emitter.emit("openmobturkadress")'
       style="margin: 0 5px">
        თურქეთის მისამართი
      </button>
      <button class="mob-transaction-button" @click='emitter.emit("openmobparameters")' >პარამეტრები</button>
    </div>

    <img
      style="
        position: absolute;
        background-size: cover;
        width: 100%;
        height: 470px;
        margin-top: 435px;
      "
      src="./../../../../assets/mobile/loggeduser2bg.jpg"
    />

    <div
      style="
        max-width: 550px;
        margin-top: 445px;
        color: #fff;
        z-index: 1;
        left: 50%;
        transform: translate(-50%);
        width: 92%;
        border-radius: 10px;
        background-color: rgba(255, 255, 255, 0.15);
        position: absolute;
        height: 460px;
      "
    >
      <div v-if='!isMobQuestions && !isMobRaces'>
        <div style="display: flex; justify-content: center; padding: 10px" >
        <img
          src="./../../../../assets/mobile/amanatebi.svg"
          style="width: 30px; height: 30px"
        />
        <h5
          class="text-white text-center"
          style="
            font-family: arrowFONT;
            font-weight: bold;
            padding-left: 5px;
            padding-top: 3px;
          "
        >
          ამანათები
        </h5>
        </div>
      <div class="p-2 main-step-div">
        <div
          class="step-divs text-center"
          :class="{ 'step-divs-active': isFirstActive }"
          @click="activeFirstStep"
        >
          <img
            v-if="isFirstImage"
            class="step-div-image"
            src="./../../../../assets/mobile/hovericons/01step.svg"
            alt="Step div Icons"
          />
          <img
            v-else
            class="step-div-image"
            src="./../../../../assets/mobile/hovericons/011step.svg"
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
            src="./../../../../assets/mobile/hovericons/02step.svg"
            alt="Step div Icons"
          />
          <img
            v-else
            class="step-div-image"
            src="./../../../../assets/mobile/hovericons/022step.svg"
            alt="Step div Icons"
          />
          <h5
            class="step-div-text"
            :class="{ 'step-div-text-active': isSecondActive }"
          >
            თურქეთის<br />
            საწყობი
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
            src="./../../../../assets/mobile/hovericons/03step.svg"
            alt="Step div Icons"
          />
          <img
            v-else
            class="step-div-image"
            src="./../../../../assets/mobile/hovericons/033step.svg"
            alt="Step div Icons"
          />
          <h5
            class="step-div-text"
            :class="{ 'step-div-text-active': isThirdActive }"
          >
            გამოგზ..<br />
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
            src="./../../../../assets/mobile/hovericons/04step.svg"
            alt="Step div Icons"
          />
          <img
            v-else
            class="step-div-image"
            src="./../../../../assets/mobile/hovericons/044step.svg"
            alt="Step div Icons"
          />
          <h5
            class="step-div-text"
            :class="{ 'step-div-text-active': isFourthActive }"
          >
            ჩამოსული<br />
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
            src="./../../../../assets/mobile/hovericons/055step.svg"
            alt="Step div Icons"
          />
          <img
            v-else
            class="step-div-image"
            src="./../../../../assets/mobile/hovericons/05step.svg"
            alt="Step div Icons"
          />
          <h5
            class="step-div-text"
            :class="{ 'step-div-text-active': isFifthActive }"
          >
            მიღებული <br />
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
            <div
              v-if="isEmpty"
              style="
                height: 130px;
                border: 1px solid white;
                border-radius: 10px;
                background-color: transparent;
                display: flex;
                padding: 10px;
              "
            >
              <img
                src="./../../../../assets/mobile/amanatebi.svg"
                style="width: 40px; height: 40px"
              />
              <h5
                style="
                  color: red;
                  font-family: arrowFONT;
                  font-weight: bold;
                  font-size: 16px;
                  margin-left: 7px;
                  color: #fff;
                "
              >
                თქვენ არ გაქვთ მისაღები ამანათები
              </h5>
            </div>
            <MobUserPost
              v-else
              v-for="post in posts.slice().reverse()"
              :key="post.code"
              :code="post.code"
            />
            <div v-if="posts.length > 1" style="margin-bottom: 25px"></div>
            <!-- POSTS -->
          </div>
        </div>

        <div v-if="isSecondActive">
          <Step2/>
        </div>
        <div v-if="isThirdActive" >
          <Step3/>
        </div>
        <div v-if="isFourthActive">
          <Step4/>
        </div>
        <div v-if="isFifthActive" >
          <Step5/>
        </div>
      </div>
      </div>

      <MobQuestions v-if='isMobQuestions' />
      <MobRaces v-if='isMobRaces'/>
    </div>
  </template>
</template>

<script>
import Navbar from "./../Navbar.vue";
import MobUserPost from "./MobUserPost.vue";
import MobAddBalance from "./MobAddBalance.vue";
import MobUserLoggedDeclare from "./MobUserLoggedDeclare.vue";
import MobPayment from "./MobPayment.vue";
import MobTransactions from './MobTransactions.vue'
import MobTurkeyAdress from './MobTurkeyAdress.vue'
import MobParameters from './MobParameters.vue'
import MobProfParameters from './MobProfParameters.vue'
import MobChangePassword from './MobChangePassword.vue'
import MobNotification from './MobNotifications.vue'
import MobQuestions from './StepMenu/MobQuestions.vue'
import MobRaces from './StepMenu/MobRaces.vue'

// MENU
import MobMenu from './MobMenu.vue'

// STEPS

import Step2 from './StepMenu/Step2.vue'
import Step3 from './StepMenu/Step3.vue'
import Step4 from './StepMenu/Step4.vue'
import Step5 from './StepMenu/Step5.vue'

// POST COMPLATE 5 STEP
import MobPostComplate from './StepMenu/MobPostComplate.vue'

import MobGanbajeba from './StepMenu/MobGanbajeba.vue'
export default {
  name: "MobUserLogged",
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
      // GANBAJEBA
      isGanbajeba: false,
      ganbajeba_code: '',
      // NOTIFICATION
      isNotification: false,
      // CHANGE-PASSWORD
      isChangePassProfile: false,
      // PARAMETERS
      isParameters: false,
      // prof params 
      isParamProfile: false,
      // ADRESS
      isTurkeyAdress: false,
      // TRANSACTIONS
      isTransactions: false,
      // PAYMENT
      isPayment: false,
      // BALANCE
      isAddBalanace: false,
      // POSTS
      isDeclare: false,
      code: "",
      declare_code: "",
      isEmpty: false,

      posts: [
        // { code: "5145849821475821415414" },
        // { code: "5145849821475821415415" },
      ],

      // COMPLATE POSTS
      isPostComplate: false,
      postComplateCode: '',

      // MobMenu
      isMobMenu: false,

      isMobQuestions: false,
      isMobRaces: false,
    };
  },
  components: {
    Navbar,
    MobMenu,
    MobUserPost,
    MobAddBalance,
    MobUserLoggedDeclare,
    MobPayment,
    MobTransactions,
    MobTurkeyAdress,
    MobParameters,
    MobProfParameters,
    MobChangePassword,
    MobNotification,
    MobGanbajeba,
    MobPostComplate,
    MobQuestions,
    MobRaces,
    Step2,
    Step3,
    Step4,
    Step5,
    
  },
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
    this.emitter.on("closemobdeclare", () => {
      this.isDeclare = false;
    });
    this.emitter.on("openmobdeclare", (code) => {
      this.isDeclare = true;
      this.declare_code = code;
    });
    this.emitter.on("deletePost", () => {
      this.emitter.on("deletePost", (code) => {
        const index = this.posts.findIndex((x) => x.code == code);
        if (index > -1) {
          this.posts.splice(index, 1);
        }
        if (this.posts.length <= 0) this.isEmpty = true;
      });
    });
    if (this.posts.length <= 0) this.isEmpty = true;

    this.emitter.on("openmobbalanace", () => {
      this.isAddBalanace = true;
    });
    this.emitter.on("closemobbalanace", () => {
      this.isAddBalanace = false;
    });
    this.emitter.on("openmobpayment", () => {
      this.isPayment = true;
    });
    this.emitter.on("closemobpayment", () => {
      this.isPayment = false;
    });
    this.emitter.on("openmobtransactions", () => {
      this.isTransactions = true;
    })
    this.emitter.on("closemobtransactions", () => {
      this.isTransactions = false;
    })
    this.emitter.on("openmobturkadress", () => {
      this.isTurkeyAdress = true
    })
    this.emitter.on("closemobturkadress", () => {
      this.isTurkeyAdress = false
    })
    this.emitter.on("openmobparameters", () => {
      this.isParameters = true
    })
    this.emitter.on("closemobparameters", () => {
      this.isParameters = false
    }) 
    this.emitter.on("mobopenparamprofile", () => {
      this.isParamProfile = true
    })
    this.emitter.on("mobcloseparamprofile", () => {
      this.isParamProfile = false
    })
    this.emitter.on("mobopenchangepassprofile", () => {
      this.isChangePassProfile = true
    })
    this.emitter.on("mobclosechangepassprofile", () => {
      this.isChangePassProfile = false
    })
    this.emitter.on("mobopennotification", () => {
      this.isNotification = true
    })
    this.emitter.on("mobclosenotification", () => {
      this.isNotification = false
    })
    this.emitter.on("openmobganbajeba", () => {
      this.isGanbajeba = true
    })
    this.emitter.on("closemobganbajeba", () => {
      this.isGanbajeba = false
    })
    this.emitter.on("opencomplatepost", (data) => {
      console.log(data);
      this.isPostComplate = true;
      this.postComplateCode = data;
    })
    this.emitter.on("closecomplatepost", () => {
      this.isPostComplate = false;
      this.postComplateCode = '';
    })
    this.emitter.on("closemobmenu", () => {
      this.isMobMenu = false;
    })
    this.emitter.on("openloggedusermenu", () => {
      this.isMobMenu = true;
    })
    this.emitter.on("opendashboard", () => {
      this.isMobQuestions = false;
      this.isMobRaces = false;
    })
    this.emitter.on("openmobquestions", () => {
      this.isMobQuestions = true;
      this.isMobRaces = false;
    })
    this.emitter.on("openmobraces", () => {
      this.isMobRaces = true;
      this.isMobQuestions = false;
    })
  },
};
</script>

<style scoped>
::placeholder {
  font-size: 12px;
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
  font-size: 10px;
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
.step-div-image {
  width: 40px;
  height: 40px;
}
/*  */
.mob-three-btn-cont {
  height: 56px;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  top: 375px;
  width: 320px;
  border: 1px solid #0294d6;
  border-radius: 40px;
  display: flex;
  justify-content: space-between;
  background-color: transparent;
  padding: 6px;
}
.mob-transaction-button {
  color: #fff;
  background: rgb(2, 0, 36);
  padding: 5px;
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(2, 148, 214, 1) 0%,
    rgba(2, 121, 192, 1) 98%
  );
  font-family: arrowFONT;
  font-weight: bold;
  font-size: 13px;
  border-radius: 40px;
  outline: none;
  border: none;
}
.balanceBtnContainer {
  border-radius: 70px;
  outline: none;
  border: 1px solid lightgray;
  padding: 3px;
  text-align: center;
  height: 40px;
  width: 155px;
  /* margin-top: -15px; */
}
.balanceBtn {
  border-radius: 70px;
  outline: none;
  padding: 5px;
  width: 145px;
  font-family: arrowFONT;
  font-weight: bold;
  height: 31px;
  text-align: center;
  font-size: 12px;
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
  width: 130px;
  /* margin-top: -15px; */
}
.paymentBtn {
  border-radius: 70px;
  outline: none;
  padding: 5px;
  width: 120px;
  font-family: arrowFONT;
  font-weight: bold;
  height: 31px;
  text-align: center;
  font-size: 14px;
  color: black;
  background-color: #fff;
  border: none;
}
.addContainer {
  border-radius: 70px;
  outline: none;
  border: 1px solid lightgray;
  padding: 3px;
  text-align: center;
  height: 40px;
  width: 100px;
  /* margin-top: -15px; */
}
.addBtn {
  border-radius: 70px;
  outline: none;
  padding: 5px;
  width: 90px;
  font-family: arrowFONT;
  font-weight: bold;
  height: 31px;
  text-align: center;
  font-size: 16px;
  color: white;
  background-color: #009ce7;
  border: none;
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
@media all and (min-width: 375px) {
  .paymentBtnContainer {
    width: 160px;
  }
  .paymentBtn {
    width: 150px;
  }
  .mob-three-btn-cont {
    width: 360px;
  }
}
@media all and (min-width: 480px) {
  .mob-three-btn-cont {
    width: 456px;
  }
  .mob-transaction-button {
    font-size: 16px;
  }
}
</style>