<template>
  <div class="register-modal animate__animated animate__fadeInDown" :class='{ physicalModal: isPhysical }'>

    <div class="reg-modal-inside">
          <button
      @click="() => emitter.emit('closemobregistermodal')"
      class="close-reg-modal"
    >
      X
    </button>
      <h4 style="color: #fff; font-family: arrowFONT; font-weight: bold">
        {{ $t("register") }}
      </h4>
      <div style="display: flex">
        <p
          style="
            margin-top: -10px;
            margin-left: 20px;
            color: white;
            font-size: 13px;
            font-family: arrowFONT;
            font-weight: bold;
          "
        >
          უცხოელი (არა საქართველოს მოქალაქე)
        </p>

        <label class="switch">
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>
      </div>
      <PhysicalType v-if='isPhysical'/>
      <IuridiuliType v-if='!isPhysical'/>

      <p
        class="mt-4 text-center"
        style="
          color: white;
          margin-bottom: 0px;
          font-family: arrowFONT;
          font-weight: bold;
          font-size: 14px;
        "
      >
        რეგისტრაციის დასრულებისას<br />
        გთხოვთ გადაამოწმოთ
        <span
          style="
            color: black;
            font-size: 14px;
            font-family: arrowFONT;
            font-weight: bold;
          "
          >თქვენი ელ ფოსტა</span
        >
      </p>

      <div
        class="text-center registerContainer mt-4"
        style="margin-left: -20px; margin: 0 auto"
      >
        <button class="registreBtn">
          {{ $t("register") }}
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
  </div>
</template>

<script>
import PhysicalType from './PhysicalType.vue'
import IuridiuliType from './IuridiuliType.vue'

export default {
  name: "ShowMobRegister",
  components: {PhysicalType, IuridiuliType},
  data(){
    return {
      isPhysical: true,
      // isIuridiuli: false,
    }
  },
  mounted() {
    this.emitter.on('physical', () => {
        if(this.isPhysical == true){
          this.isPhysical = false
        }else {
          this.isPhysical = true
        }
    })
  }
};
</script>

<style scoped>
/* register */
.physicalModal {
  margin-top: -150px !important;
}
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
/* register-end */
.register-modal {
  position: absolute;
  z-index: 99999;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  min-height: 1250px;
    max-height: 1250px;

  background-color: #0396db;
}
.close-reg-modal {
  position: absolute;
  right: -40px;
  top: -40px;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 40px;
  font-weight: 200;
  color: white;
  /* margin-bottom: 150px; */
}
.reg-modal-inside {
  position: absolute;
  left: 50%;
  top: 120%;
  /* height: 200%; */
  margin-top: -45px;
  min-width: 300px;
  max-width: 370px;
  transform: translate(-50%, -120%);
}

/* switchbox */
.switch {
  position: relative;
  display: inline-block;
  width: 55px;
  height: 24px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  left: 4px;
  bottom: 2px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>