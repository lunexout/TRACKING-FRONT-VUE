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
    <input v-model='birthDate' type="date" placeholder="დაბადების თარიღი" class="inputs" />

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
</template>

<script>
export default {
  name: "IuridiuliType",
    data() {
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
        identNumber:'',
        sex: '',
      }
    },
    methods: {
      registration(){
        const regData = {
          nameGeo: this.nameGeo,
          surnameGeo: this.surnameGeo,
          nameEng: this.nameEng,
          surnameEng: this.surnameEng,
          birthDate: this.birthDate,
          email: this.email,
          phone: this.phone,
          password: this.password,
          rePassword: this.rePassword,
          adress: this.adress,
          personalNumber: this.personalNumber,
          organizationName: this.organizationName,
          identNumber: this.identNumber,
          sex: this.sex,
          checkBoxStatus: localStorage.getItem('checkBoxStatus') == 'false' ? false : true,
        }
        console.log(regData);   
      }
    },
    mounted(){
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