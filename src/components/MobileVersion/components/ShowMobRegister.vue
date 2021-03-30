<template>
  <div class="register-modal animate__animated animate__fadeInDown">
    <button
      @click="() => emitter.emit('closemobregistermodal')"
      class="close-reg-modal"
    >
      X
    </button>   
    <div class="reg-modal-inside">
      <h4 style='color: #fff; font-family: arrowFONT;
      font-weight: bold'>{{$t('register')}}</h4>
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
  <input type="checkbox">
  <span class="slider round"></span>
</label>
              </div>
      <div style="display: flex; justify-content: space-between">
        <div
          class='active-box'
        >
          <h5
            class="text-center"
            style="
              color: white;
              font-weight: bold;
              font-size: 13px;
              font-family: arrowFONT;
              z-index: 2;
            "
          >
            ფიზიკური პირი
          </h5>
        </div>
        <div class="down-arrow-div"></div>
        <div
          style="
            width: 100%;
            padding: 14px;
            height: 45px;
            border: 1px solid #000;
          "
        >
          <h5
            class="text-center"
            style="
              color: #000;
              font-weight: bold;
              font-family: arrowFONT;
              z-index: 2;
              font-size: 12px;
            "
          >
            იურიდიული პირი
          </h5>
        </div>
      </div>
      <input type="text" placeholder="სახელი(ქართულად)*" class="inputs" />
      <input type="text" placeholder="გვარი(ქართულად)*" class="inputs" />
      <input type="text" placeholder="სახელი(ლათინურად)*" class="inputs" />
      <input type="text" placeholder="გვარი(ლათინურად)*" class="inputs" />
            <input type="text" placeholder="დაბადების თარიღი" class="inputs" />

            <p
                style="
                  font-family: arrowFONT;
                  font-size: 14px;
                  color: white;
                  margin-left: 18px;
                  font-weight: bold;
                  margin-bottom: -5px;
                  margin-top: 20px;
                "
              >
                სქესი*
              </p>
              <input type="radio" id="male" name="gender" value="male" />
              <label
                style="
                  font-family: arrowFONT;
                  font-size: 14px;
                  color: white;
                  font-weight: bold;
                  margin-left: 5px;
                  margin-right: 10px;
                "
                for="male"
                >მდედრობით</label
              >
              <input type="radio" id="female" name="gender" value="female" />
              <label
                style="
                  font-family: arrowFONT;
                  margin-left: 5px;
                  font-size: 14px;
                  color: white;
                  font-weight: bold;
                "
                for="female"
                >მამრობითი</label
              ><br />

         <input type="text" placeholder="ელ-ფოსტა*" class="inputs" />
          <input type="text" placeholder="მობილური ტელეფონი*" class="inputs" />
           <input type="password" placeholder="პაროლი*" class="inputs" />
            <input type="password" placeholder="პაროლი განმეორებით" class="inputs" />
             <input type="text" placeholder="მისამართი" class="inputs" />
             <input type="text" placeholder="პირადი ნომერი*" class="inputs" />
             <input type="text" placeholder="ორგანიზაციის დასახელება*" class="inputs" />
             <input type="text" placeholder="საიდენთიფიკაციო კოდი*" class="inputs" />
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
                რეგისტრაციის დასრულებისას<br/> გთხოვთ გადაამოწმოთ
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
export default {
  name: "ShowMobRegister",
};
</script>

<style scoped>
/* register */
.active-box {
              width: 100%;
            padding: 13px;
            height: 45px;
            border: 1px solid #fff;
            margin-right: 15px;
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
.down-arrow-div {
  margin-top: -20px;
  width: 20px;
  background-color: #0396db;
  height: 20px;
  position: absolute;
  margin-left: 60px;
  margin-top: 34px;
  z-index: 1;
  transform: rotate(-45deg);
  border-left: 1px solid white;
  border-bottom: 1px solid white;
}
.inputs {
  border: 1px solid white;
  padding: 8px;
  margin-top: 20px;
  background-color: transparent;
  font-family: arrowFONT;
  font-weight: bold;
  width: 100%;
  border-radius: 30px;
}
::placeholder {
  color: #fff;
}
.register-modal {
  position: absolute;
  z-index: 99999;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1250px;
  background-color: #0396db;
}
.close-reg-modal {
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
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  left: 4px;
  bottom: 2px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
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