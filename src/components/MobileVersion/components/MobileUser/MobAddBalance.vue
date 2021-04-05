<template>
  <div class="addbalanace-modal animate__animated animate__fadeInDown">
    <button
      @click="() => emitter.emit('closemobbalanace')"
      class='close-balance-modal'
    >
      X
    </button>
    <div class="balance-menu-cont">
        <h1 class="balance-header">ბალანსის შევსება</h1>
        <h1 class="balance-header" style="margin-left: 20px; margin-top: 25px">
            აირჩიე გადახდის მეთოდი:
        </h1>
      <div class="styled-div" :class="{activeBank: activeTBC}" @click='activeTBC=true;activeIPAY=false;'>
        <img
          src="./../../../../assets/mobile/tbc-logo.svg"
          style="width: 40px; margin-left: 8px; height: 40px"
        />
        <h1 class="balance-header" style="padding: 10px; font-size: 18px">
          თიბისი ბანკი
        </h1>
      </div>
        <div class="styled-div mt-4" :class="{activeBank: activeIPAY}" @click='activeIPAY=true;activeTBC=false;'>
        <img
          src="./../../../../assets/mobile/ipay-logo.svg"
          style="width: 40px; margin-left: 8px; height: 40px"
        />
        <h1 class="balance-header" style="padding: 10px; font-size: 18px">
          IPAY - Visa/MC/Amex
        </h1>
      </div>

        <h1 class="balance-header" style="margin-left: 20px; margin-top: 25px">
            შეიყვანეთ თანხა:
        </h1>
        <div class="styled-div mt-2">
        <h1 class="balance-header" style="padding: 10px; font-size: 18px">₾</h1>
        <input
          type="text"
          placeholder="0"
          onfocus="this.placeholder = ''"
          onblur="this.placeholder = '0'"
          class="input-style mt-1"
        />
      </div>


    <div
        class="text-center balanceContainer mt-5"
        style="margin-left: -20px; margin: 0 auto"
      >
        <button class="balanceBtn" @click.prevent='login' @keyup.enter='login'>
          შევსება
          <div class="balance-arrow-box">
            <img
              style="width: 13px; height: 13x; margin-top: -4px"
              src="./../../../../assets/mainpage/right-arrow.svg"
              alt="Right arrow"
            />
          </div>
        </button>
      </div>
            <div class="accordion mt-5" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button accord-btn no-btn-big-width"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              მომსახურების საკომისიო სხვადასხვა ბანკის ბარათზე
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse border-accordion collapse show accord-box"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
            style="font-family: arrowFONT; font-weight: bold; border: none"
          >
            <div class="accordion-body border-accordion">
              <p class="mt-1 geo-font services-text">
                თიბისი, ლიბერთი, ვითიბი, ჰალიკი, ბაზის ბანკი, ტერა ბანკი <span style='color: #01A4EF'>1.3%</span>
              </p>
              <p class="mt-3 geo-font services-text">
                საქართველოს ბანკი, ქართუ ბანკი, პროკრედიტ ბანკი <span style='color: #01A4EF'>1.8%</span>
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item mt-3">
          <h2 class="accordion-header" id="headingTwo">
            <button
              type="button"
              class="accordion-button accord-btn collapsed no-btn-big-width"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              ტერმინალით გადახდა:
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse border-accordion collapse accord-box"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body border-accordion">
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item mt-3">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button accord-btn collapsed no-btn-big-width"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              საბანკო გადახდა:
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse border-accordion collapse accord-box"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body border-accordion">
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>        <div class="accordion-item mt-3">
          <h2 class="accordion-header" id="headingFour">
            <button
              class="accordion-button accord-btn collapsed no-btn-big-width"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              Unipay გადახდა:
            </button>
          </h2>
          <div
            id="collapseFour"
            class="accordion-collapse border-accordion collapse accord-box"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body border-accordion">
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
export default {
  name: "MobAddBalance",
  data() {
    return {
      activeTBC: false,
      activeIPAY: false,
    }
  },
  methods: {
  }
};
</script>

<style scoped>
.activeBank {
  background: rgb(2, 0, 36) !important;
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(2, 148, 214, 1) 0%,
    rgba(2, 121, 192, 1) 98%
  ) !important;
}
.styled-div {
  height: 51px;
  background-color: transparent;
  border: 1px solid white;
  padding: 5px;
  display: flex;
  border-radius: 40px;
  width: 100%;
}
.balance-menu-cont {
  position: absolute;
  left: 50%;
  top: 50%;
  height: auto;
  min-width: 300px;
  max-width: 370px;
  transform: translate(-50%, -50%);
}
.balance-header {
  color: #fff;
  font-family: arrowFONT;
  font-size: 18px;
  font-weight: bold;
  text-align: left;
}
.close-balance-modal {
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
::placeholder {
  color: #fff;
}
.addbalanace-modal {
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
.balance-arrow-box {
  width: 30px;
  height: 30px;
  border-radius: 25px;
  background-color: #11bdf7;
  margin-left: 205px;
  margin-top: -35px;
}
.balanceContainer {
  border-radius: 70px;
  outline: none;
  border: 1px solid #fff;
  padding: 9px;
  text-align: center;
  height: 67px;
  width: 270px;
  margin-top: -15px;
}
.balanceBtn {
  border-radius: 70px;
  outline: none;
  padding: 10px;
  width: 250px;
  font-family: arrowFONT;
  font-weight: bold;
  height: 45px;
  text-align: center;
  font-size: 22px;
  color: white;
  background-color: #009ce7;
  border: none;
}

/* accord */
.border-accordion {
  border-radius: 0px 0px 25px 25px !important;
}
.accord-container {
  position: absolute;
  left: 11.5%;
  top: 390px;
  max-width: 52%;
}
.accordion-button:not(.collapsed) {
  font-family: arrowFONT;
  font-weight: bold;
  color: #00a8f0;
  background-color: #fff;
  border: none;
  outline: none;
}
.accord-box {
  border: none;
  margin-top: -25px;
  padding-top: 10px;
  border-bottom-left-radius: 25px !important;
  border-bottom-right-radius: 25px !important;
  box-shadow: rgba(17, 17, 26, 0.25) 0px 0px 16px;
}
.accord-btn {
  font-family: arrowFONT;
  font-weight: bold;
  border-radius: 25px !important;
  color: #00a8f0;
  background-color: #fff;
  border: none;
  box-shadow: rgba(17, 17, 0, 0.1) 0px 0px 20px;
}
.panel-body {
  width: 700px;
  overflow: hidden;
}
.accordion-button::after {
  flex-shrink: 0;
  width: 30px;
  height: 30px;
  margin-left: auto;
  content: "";
  background-image: url("./../../../../assets/mainpage/downarrow.svg");
  background-repeat: no-repeat;
  background-size: 40px;
  transition: transform 0.2s ease-in-out;
}
.accordion-body {
  max-height: 400px;
      background-color: white;
      margin-top: -5px;
  /* overflow-y: scroll; */
}
.services-text {
    font-size: 15px;
}
</style>
