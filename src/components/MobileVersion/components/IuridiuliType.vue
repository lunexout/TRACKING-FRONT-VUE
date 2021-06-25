<template>
  <div style="display: flex; justify-content: space-between">
    <div class="active-box" @click="() => emitter.emit('physical')">
      <h5 class="text-center physical-txt">ფიზიკური პირი</h5>
    </div>

    <div class="iuridiuli-div">
      <h5 class="text-center iuridiuli-txt">იურიდიული პირი</h5>
    </div>
    <div class="down-arrow-div"></div>
  </div>
    <input v-model='nameEng' type="text" placeholder="სახელი(ქართულად)*" class="inputs" />
    <input v-model='surnameGeo' type="text" placeholder="გვარი(ქართულად)*" class="inputs" />
    <input v-model='nameEng' type="text" placeholder="სახელი(ლათინურად)*" class="inputs" />
    <input v-model='surnameEng' type="text" placeholder="გვარი(ლათინურად)*" class="inputs" />
    <input v-model='birthDate' type="date" class="inputs" />
    <select name="cities" v-model="city" class="inputs mt-3"
      style=" background-color:#0396DB; appearance: none;">
      <option v-for='city in cities' :key='city.id' :value="city.id">{{city.name}}</option>
    </select>


    <p class="sex">სქესი*</p>
    <input v-model='sex' type="radio" id="male" name="gender" value="male" />
    <label class="male-togg" for="male">მდედრობით</label>
    <input v-model='sex' type="radio" id="female" name="gender" value="female" />
    <label class="famale-togg" for="female">მამრობითი</label><br />

    <input v-model='email' type="email" placeholder="ელ-ფოსტა*" class="inputs" />
    <input v-model='phone' type="text" placeholder="მობილური ტელეფონი*" class="inputs" />
    <input v-model='password' type="password" placeholder="პაროლი*" class="inputs" />
    <input v-model='rePassword' type="password" placeholder="პაროლი განმეორებით" class="inputs" />
    <input v-model='adress' type="text" placeholder="მისამართი" class="inputs" />
    <input v-model='personalNumber' type="text" placeholder="პირადი ნომერი*" class="inputs" />
    <input  v-model='organizationName' type="text" placeholder="ორგანიზაციის დასახელება*" class="inputs" />
    <input  v-model='identNumber' type="text" placeholder="საიდენთიფიკაციო კოდი*" class="inputs" />


  <p v-if='isRegError' class='mt-3' style="color: red; font-size: 16px;font-family: arrowFONT;font-weight: bold; ">
      ყველა ველი საჭიროა, ველები შეავსეთ სწორად
  </p>
  <p v-if='isSuccessReg' class='mt-3' style="color: green; font-size: 16px;font-family: arrowFONT;font-weight: bold; ">
      რეგისტრაცია განხორციელდა წარმატებით, აქტივაციისთვის შეამოწმეთ მეილი.
  </p>
</template>

<script>
import axios from 'axios'
import env from './../../../env.json'
export default {
  name: "IuridiuliType",
    data() {
      return {
        isRegError: false,
        isSuccessReg: false,

        nameGeo: "",
        surnameGeo:"",
        nameEng: "",
        surnameEng: "",
        birthDate: '2021-01-01',
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
              this.isRegError = true;
            }else {
              this.isSuccessReg = true;

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
      }
    },
    mounted(){
      localStorage.setItem('checkBoxStatus','false');
      axios.get(`${env.API_URL}/api/city`).then(result=>{
        this.cities = result.data
      })
      this.emitter.on('iuridiuliRegistrationRequest', () => {
        this.registration();
      })
    }
};
</script>

<style scoped>
.iuridiuli-txt {
  width: 100%;
  padding: 14px;
  height: 45px;
  border: 1px solid #fff;
}
.physical-txt {
  color: #000;
  font-weight: bold;
  font-size: 13px;
  font-family: arrowFONT;
  z-index: 2;
}
.iuridiuli-txt {
  color: #fff;
  font-weight: bold;
  font-family: arrowFONT;
  z-index: 2;
  font-size: 12px;
}
.sex {
  font-family: arrowFONT;
  font-size: 14px;
  color: white;
  margin-left: 18px;
  font-weight: bold;
  margin-bottom: -5px;
  margin-top: 20px;
}
.male-togg {
  font-family: arrowFONT;
  font-size: 14px;
  color: white;
  font-weight: bold;
  margin-left: 5px;
  margin-right: 10px;
}
.famale-togg {
  font-family: arrowFONT;
  margin-left: 5px;
  font-size: 14px;
  color: white;
  font-weight: bold;
}
.down-arrow-div {
  margin-top: -20px;
  width: 20px;
  background-color: #0396db;
  height: 20px;
  position: absolute;
  margin-left: 218px;
  margin-top: 34px;
  z-index: 1;
  transform: rotate(-45deg);
  border-left: 1px solid white;
  border-bottom: 1px solid white;
}
.active-box {
  width: 100%;
  padding: 13px;
  height: 45px;
  border: 1px solid #000;
  margin-right: 15px;
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
  outline: none;
  color: #fff;
}
::placeholder {
  color: #fff;
}
</style>