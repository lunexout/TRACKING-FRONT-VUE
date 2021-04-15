<template>
  <div class="container" id="sendmail" style="max-width: 900px">
    <div class="mt-3 send-mail-cont">
      <div>
        <img
          :src="image"
          alt="Send question background wallpaper"
          style="height: 580px; width: 900px"
        />
      </div>
      <div style="position: absolute; top: 0">
        <form @submit.prevent="">
          <h2 class="send-mail-txt">მოგვწერეთ</h2>
          <div class="centered"></div>
          <div
            style="
              display: flex;
              align-items: center;
              justify-content: center;
              flex-direction: column;
            "
          >
            <input
              type="text"
              placeholder="სახელი*"
              class="placeholder-cont mt-3 send-mail-small-input"
            />
            <input
              type="text"
              placeholder="ელ.ფოსტა*"
              class="placeholder-cont mt-4 send-mail-small-input"
            />
            <input
              type="text"
              placeholder="ტელეფონი"
              class="placeholder-cont mt-4 send-mail-small-input"
            />
            <textarea
              placeholder="წერილი*"
              class="mt-4 placeholder-cont send-mail-inputs"
            >
            </textarea>
            <div class="text-center registerContainer mt-4">
              <button class="registreBtn">გაგზავნა</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Image from "../../../assets/images/image3.jpg";

export default {
  name: "MobSendMail",
  data() {
    return {
      image: Image,
    };
  },
};
</script>

<style scoped>
.send-mail-cont {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
}
.centred {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  font-family: arrowFONT;
  color: red;
  width: 60px;
  height: 2px;
  background-color: #007cb3;
}
.send-mail-small-input {
  font-family: arrowFONT;
  color: #fff;
  border: 1px solid #fff;
  background-color: transparent;
  border-radius: 25px;
  padding: 13px;
  width: 350px;
  outline: none;
}
.send-mail-inputs {
  font-family: arrowFONT;
  color: #fff;
  border: 1px solid #fff;
  background-color: transparent;
  border-radius: 25px;
  padding: 16px;
  width: 350px;
  outline: none;
  resize: none;
}
.send-mail-txt {
  margin-top: 40px;
  user-select: none;
  text-align: center;
  font-family: arrowFONT;
  color: #fff;
  font-weight: normal;
}
.placeholder-cont::placeholder {
  color: #fff;
}
.register-arrow-box {
  width: 40px;
  height: 40px;
  border-radius: 25px;
  background-color: #11bdf7;
  margin-left: 190px;
  margin-top: -37px;
}
.registerContainer {
  margin: 0 auto;
  border-radius: 70px;
  outline: none;
  border: 1px solid gray;
  padding: 9px;
  /* text-align: center; */
  height: 72px;
  width: 350px;
  /* margin-top: 500px; */
}
.registreBtn {
  border-radius: 70px;
  outline: none;
  padding: 10px;
  width: 330px;
  font-family: arrowFONT;
  font-weight: bold;
  height: 50px;
  text-align: center;
  font-size: 21px;
  color: white;
  background-color: #009ce7;
  border: none;
}
</style>