v<template>
  <div class="payment-modal animate__animated animate__fadeInDown">
    <button
      @click="() => {
        emitter.emit('mobcloseparamprofile');
        emitter.emit('closedeskprofilesettings')
      }"
      class="close-payment-modal"
    >
      X
    </button>
    <div class="payment-menu-cont">
      <h1 class="payment-header" style='font-size: 25px;'>პროფილი</h1>
      
      
    <div style='display:flex; justify-content: space-between;'>
        <div>
          <p class='text-dark mt-3 input-header'>ფოტოს შეცვლა</p>
      <!-- <input type="text" placeholder="ფოტოს ატვირთვა" class="inputs" /> -->
      <input type="file" class='inputs custom-file-input'
       
       accept="image/png, image/jpeg">
      <p class='text-dark mt-4 input-header'>სახელი(ქართულად)</p>
      <input type="text" :placeholder='`გიორგი`' class="inputs" />
       <p class='text-dark mt-4 input-header'>გვარი(ქართულად)</p>
      <input type="text" :placeholder="`ბოცვაძე`" class="inputs" />
       <p class='text-dark mt-3 input-header'>სახელი(ლათინურად)</p>
      <input type="text" :placeholder="`George`" class="inputs" />
       <p class='text-dark mt-4 input-header'>გვარი(ლათინურად)</p>
      <input type="text" :placeholder="`Botsvadze`" class="inputs" />
      </div>
       
       <div>
           <p class='text-dark mt-3 input-header'>დაბადების თარიღი</p>
      <input type="date" value="2021-09-24" placeholder="დაბადების თარიღი" class="inputs" />

      <p
        style="
          font-family: arrowFONT;
          font-size: 14px;
          color: #000;
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


             <p class='text-dark mt-2 input-header'>ელ-ფოსტა*</p>
      <input type="mail" placeholder="gio.botsvadze1988@gmail.com" class="inputs" />

             <p class='text-dark mt-2 input-header'>მობილური ტელეფონი*</p>
      <input type="text" placeholder="+995 598 89 04 75" class="inputs" />

      
             <p class='text-dark mt-2 input-header'>საიდენთიფიკაციო კოდი*</p>
      <input type="mail" placeholder="012423543" class="inputs" />

             <p class='text-dark mt-2 input-header' style='margin-top: 10px !important;'>მისამართი</p>
      <input type="text" placeholder="თბილისი, დოლიძის ქუჩა 9" class="inputs" />
       </div>
    </div>

                <div
        class="text-center paymentContainer mt-4"
        style="margin-left: -20px; margin: 0 auto"
      >
        <button class="paymentBtn" @click.prevent='save' @keyup.enter='save'>
          შენახვა
          <div class="payment-arrow-box">
            <img
              style="width: 13px; height: 13x; margin-top: -4px"
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
  name: "ProfSettings",
  data() {
    return {};
  },
  methods: { 
      save() {
          console.log(`save`);
      }
  },
};
</script>

<style scoped>
.input-header {
    margin-bottom: -20px;
     margin-left: 20px; 
     font-family: arrowFONT; 
     font-weight: bolder;
}
.styled-div-no-transactions {
  height: 100px;
  background-color: transparent;
  border: 1px solid white;
  padding: 5px;
  display: flex;
  border-radius: 20px;
  width: 100%;
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
.payment-header {
  color: #fff;
  font-family: arrowFONT;
  font-size: 18px;
  font-weight: bold;
  text-align: left;
}
.payment-menu-cont {
  position: absolute;
  left:50%;
  margin-top: 25px;
  height: auto;
 width: 800px;
  transform: translate(-50%);
}
.close-payment-modal {
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
.payment-arrow-box {
  width: 30px;
  height: 30px;
  border-radius: 25px;
  background-color: #11bdf7;
  margin-left: 205px;
  margin-top: -35px;
}
.paymentContainer {
  border-radius: 70px;
  outline: none;
  border: 1px solid #fff;
  padding: 9px;
  text-align: center;
  height: 67px;
  width: 270px;
  margin-top: -15px;
}
.paymentBtn {
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

.payment-modal {
  position: absolute;
  z-index: 999998;
  top: 0;
  left: 0;
  width: 100%;
  height: 1200px;
  background-color: #0396db;
}
.inputs {
  border: 1px solid white;
  padding: 8px;
  margin-top: 20px;
  background-color: transparent;
  font-family: arrowFONT;
  font-weight: bold;
  width: 390px;
  border-radius: 30px;
  outline: none;
  color: #fff;
}
::placeholder {
  color: #fff;
}
.custom-file-input::-webkit-file-upload-button {
  visibility: hidden;
}
.custom-file-input::before {
  content: 'ფოტოს ატვირთვა';
  display: inline-block;
  border-radius: 3px;
  outline: none;
  white-space: nowrap;
  -webkit-user-select: none;
  cursor: pointer;
  font-weight: 700;
  font-size: 14px;
}
.custom-file-input:hover::before {
  border-color: black;
}
.custom-file-input:active::before {
  /* background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9); */
}
</style>
