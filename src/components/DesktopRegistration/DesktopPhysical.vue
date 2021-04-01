<template>
            <div class="row" style="height: 100%">
            <div class="col-xl-5">
              <div
                style="
                  width: 100%;
                  padding: 10px;
                  height: 45px;
                  border: 2px solid white;
                "
              >
                <h5
                  class="text-center"
                  style="
                    color: white;
                    font-weight: bold;
                    font-family: arrowFONT;
                    z-index: 2;
                  "
                >
                  ფიზიკური პირი
                </h5>
              </div>
              <div class="down-arrow-div"></div>
              <input
                type="text"
                placeholder="სახელი(ქართულად)*"
                class="input-registration mt-4"
              />
              <input
                type="text"
                placeholder="სახელი(ლათინურად)*"
                class="input-registration mt-3"
              />

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
              <input v-model="sex"
                @change='getSex' type="radio" id="male" name="gender" value="male"/>
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

              <input v-model="sex" @change='getSex' type="radio" id="female" name="gender" value="female" />
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

              <input
                type="text"
                placeholder="ელ-ფოსტა*"
                class="input-registration mt-3"
              />
              <input
                type="password"
                placeholder="პაროლი*"
                class="input-registration mt-3"
              />
              <input
                type="text"
                placeholder="მისამართი"
                class="input-registration mt-3"
              />
            </div>
            <div class="col-xl-5">
              <div
              @click='() => emitter.emit("desktopphysical")'
                style="
                  width: 100%;
                  padding: 10px;
                  height: 45px;
                  border: 2px solid black;
                  cursor: pointer;
                " 
              >
                <h5
                  class="text-center"
                  style="
                    color: black;
                    font-weight: bold;
                    font-family: arrowFONT;
                    z-index: 2;
                  "
                >
                  იურიდიული პირი
                </h5>
              </div>
              <input
                type="text"
                placeholder="გვარი(ქართულად)*"
                class="input-registration mt-4"
              />
              <input
                type="text"
                placeholder="გვარი(ლათინურად)*"
                class="input-registration mt-3"
              />
              <input
                type="text"
                placeholder="დაბადების თარიღი"
                class="input-registration mt-3"
              />
              <input
                type="text"
                placeholder="მობილური ტელეფონი*"
                class="input-registration mt-3"
              />
              <input
                type="password"
                placeholder="პაროლი(განმეორებით)*"
                class="input-registration mt-3"
              />
              <input
                type="text"
                placeholder="პირადი ნომერი*"
                class="input-registration mt-3"
              />
            </div>
            <div class="col-xl-10 text-center">
              <p
                class="mt-2"
                style="
                  color: white;
                  margin-bottom: 0px;
                  font-family: arrowFONT;
                  font-weight: bold;
                  font-size: 17px;
                "
              >
                რეგისტრაციის დასრულებისას გთხოვთ გადაამოწმოთ<br />
                <span
                  style="
                    color: black;
                    font-size: 17px;
                    font-family: arrowFONT;
                    font-weight: bold;
                  "
                  >თქვენი ელ ფოსტა</span
                >
              </p>
              <div
                class="text-center registerContainer"
                style="margin-left: -20px; margin: 0 auto"
              >
                <button class="registreBtn">
                  {{ $t("register") }}
                  <div class="register-arrow-box">
                    <img
                      style="width: 15px; height: 15x; margin-top: 5px"
                      src="./../../assets/mainpage/right-arrow.svg"
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
    name: 'DesktopPhysical',
    data() {
      return {
        sex: '',
      }
    },
    methods: {
      getSex() {
        console.log(this.sex);
      }
    }

}
</script>

<style scoped>
.down-arrow-div {
  margin-top: -20px;
  width: 20px;
  background-color: #0396db;
  height: 20px;
  position: absolute;
  margin-left: 150px;
  margin-top: -10px;
  z-index: 1;
  transform: rotate(-45deg);
  border-left: 2px solid white;
  border-bottom: 2px solid white;
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
.input-registration {
  width: 100%;
  border: 1px solid white;
  background-color: transparent;
  padding: 10px;
  border-radius: 25px;
  color: white;
  font-family: arrowFONT;
  font-weight: bold;
  outline: none;
}
::placeholder {
  color: #fff;
}
@media all and (min-width: 1440px) {
  .main-cont {
    margin-top: 3%;
  }
}
@media all and (min-width: 1640px) {
  .main-cont {
    margin-top: 4%;
  }
  
}
@media all and (min-width: 1640px) {
  .main-cont {
    margin-top: 5.5%;
  }
}
</style>