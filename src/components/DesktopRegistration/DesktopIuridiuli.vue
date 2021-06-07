<template>
            <div class="row" style="height: 100%">
            <div class="col-xl-5">
              <div
              @click='() => emitter.emit("desktopphysical")'
                style="
                  width: 100%;
                  padding: 10px;
                  height: 45px;
                  border: 2px solid #000;
                  cursor: pointer;
                "
              >
                <h5
                  class="text-center"
                  style="
                    color: #000;
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
                v-model="nameGeo"
              />
              <input
                type="text"
                placeholder="სახელი(ლათინურად)*"
                class="input-registration mt-3"
                v-model="nameEng"
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
              <input v-model="sex" type="radio" id="male" name="gender" value="male" />
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
              <input v-model="sex" type="radio" id="female" name="gender" value="female" />
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
                type="email"
                placeholder="ელ-ფოსტა*"
                class="input-registration mt-3"
                v-model="email"
              />
              <input
                type="password"
                placeholder="პაროლი*"
                class="input-registration mt-3"
                v-model="password"
              />
              <input
                type="text"
                placeholder="მისამართი"
                class="input-registration mt-3"
                v-model="adress"
              />
                            <input
                type="text"
                placeholder="ორგანიზაციის დასახელება*"
                class="input-registration mt-3"
                v-model="organizationName"
              />
            </div>
            <div class="col-xl-5">
              <div
                style="
                  width: 100%;
                  padding: 10px;
                  height: 45px;
                  border: 2px solid #fff;
                " 
              >
                <h5
                  class="text-center"
                  style="
                    color: #fff;
                    font-weight: bold;
                    font-family: arrowFONT;
                    z-index: 2;
                  "
                >
                  იურიდიული პირი
                </h5>
              </div>
              <!-- <div class='down-arrow-div2'></div> -->
              <input
                type="text"
                placeholder="გვარი(ქართულად)*"
                class="input-registration mt-4"
                v-model="surnameGeo"
              />
              <input
                type="text"
                placeholder="გვარი(ლათინურად)*"
                class="input-registration mt-3"
                v-model="surnameEng"
              />
              <div style="display:flex;">
                <input
                type="date"
                placeholder="დაბადების თარიღი"
                class="input-registration mt-3"
                style="max-width: 150px;"
                v-model="birthDate"
              />
              
              <select name="cities" v-model="city" class="input-registration mt-3"
                style="max-width: 150px; margin-left: 10px !important; background-color:#0396DB;">
                <option v-for='city in cities' :key='city.id' :value="city.id">{{city.name}}</option>
              </select>
              </div>
              <input
                type="text"
                placeholder="მობილური ტელეფონი*"
                class="input-registration mt-3 phone"
                v-model="phone"
              />
              <input
                type="password"
                placeholder="პაროლი(განმეორებით)*"
                class="input-registration mt-3"
                v-model="rePassword"
              />
              <input
                type="text"
                placeholder="პირადი ნომერი*"
                class="input-registration mt-3"
                v-model="personalNumber"
              />
                            <input
                type="text"
                placeholder="საიდენთიფიკაციო ნომერი*"
                class="input-registration mt-3"
                v-model="identNumber"
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
                <button class="registreBtn" @click='registration'>
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
import env from './../../env.json'
import axios from 'axios'
import swal from 'sweetalert'
export default {
    data(){
      return {
        nameGeo: "",
        surnameGeo:"",
        nameEng: "",
        surnameEng: "",
        birthDate: new Date(),
        email: "",
        phone: "",
        password: "",
        rePassword: "",
        adress: "",
        personalNumber: "",
        organizationName:"",
        identNumber: "",
        sex: '',

        city: 1,
        cities:[]

      }
    },
    name: 'DesktopIuridiuli',
    methods: {
      registration(){
        const regData = {
          name_ge: this.nameGeo,
          surname_ge: this.surnameGeo,
          name_en: this.nameEng,
          surname_en: this.surnameEng,
          birthday: this.birthDate,
          email: this.email,
          mobile: this.phone,
          password: this.password,
          password_confirmation: this.rePassword,
          address: this.adress,
          idnumber: this.personalNumber,
          sex: this.sex,
          city: this.city,
          company: this.organizationName,
          company_id: this.identNumber,
          citizen: localStorage.getItem('checkBoxStatus') == 'false' ? 'არა' : 'კი',
        }
        axios.post(`${env.API_URL}/api/register`, regData).then(res => {
          if(res.data.errors) {
              swal({
              title: "დაფიქსირდა შეცდომა",
              text: `ყველა ველი საჭიროა, ველები შეავსეთ სწორად`,
              icon: "error",
              dangerMode: true,
              })
            }else {
              swal({
              title: "გთხოვთ შეამოწმოთ მეილი",
              text: `${res.data.message}`,
              icon: "success",
              })

                this.nameGeo= "",
                this.surnameGeo="",
                this.nameEng= "",
                this.surnameEng= "",
                this.birthDate= new Date(),
                this.email= "",
                this.phone= "",
                this.password= "",
                this.rePassword= "",
                this.adress= "",
                this.personalNumber= "",
                this.sex= '',
                this.city= 1,
                this.organizationName = "",
                this.identNumber =  ""
            }
        }) 
      },

    },
    mounted(){
      localStorage.setItem('checkBoxStatus','false');
      axios.get(`${env.API_URL}/api/city`).then(result=>{
        this.cities = result.data
      })
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
  margin-left: 479px;
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
  padding: 5px;
  border-radius: 25px;
  color: white;
  font-family: arrowFONT;
  font-weight: bold;
  outline: none;
}
::placeholder {
  color: #fff;
}
.phone {
    margin-top: 25px !important;
}
@media all and (min-width: 1440px) {
  .main-cont {
    margin-top: 3%;
  }
  .input-registration {
  padding: 9px;
}
  .phone {
    margin-top: 15px !important;
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
  .phone {
    margin-top: 15px !important;
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
}
</style>