<template>
  <div class="login-modal animate__animated animate__fadeInDown">
    <button
      @click="() => emitter.emit('closeloginmodal')"
      style="
        position: absolute;
        right: 20px;
        top: 20px;
        background-color: transparent;
        border: none;
        outline: none;
        font-size: 40px;
        font-weight: 200;
        color: white;
      "
    >
      X
    </button>
    <div
      class=""
      style="
        position: absolute;
        left: 50%;
        top: 50%;
        height: auto;
        max-width: 370px;
        transform: translate(-50%, -50%);
      "
    >
      <input class="login-inputs" type="text" placeholder="ელ ფოსტა" />
      <input class="mt-4 login-inputs" type="text" placeholder="პაროლი" />

      <div class="mt-4">
        <input type="radio" id="female" name="gender" value="female" />
      </div>
      <label
        style="
          font-family: arrowFONT;
          margin-left: 5px;
          font-size: 18px;
          color: white;
          font-weight: bold;
          position: absolute;
          margin-top: -28px;
          margin-left: 25px;
        "
        for="female"
        >დამახსოვრება</label
      >

      <p
        style="
          font-family: arrowFONT;
          font-size: 19px;
          color: #022b4b;
          font-weight: bold;
          position: absolute;
          margin-top: -28px;
          right: 0;
        "
      >
        პაროლის აღდგენა?
      </p>

      <div
        class="text-center registerContainer mt-5"
        style="margin-left: -20px; margin: 0 auto"
      >
        <button class="registreBtn">
          {{ $t("login") }}
          <div class="register-arrow-box">
            <img
              style="width: 15px; height: 15x; margin-top: 5px"
              src="./../../../assets/mainpage/right-arrow.svg"
              alt="Right arrow"
            />
          </div>
        </button>
      </div>

      <button
        class="mt-4"
        style="
          width: 100%;
          font-size: 28px;
          font-family: arrowFONT;
          font-weight: bold;
          height: 77px;
          border: 1px solid #fff;
          background-color: transparent;
          border-radius: 50px;
          color: #022b4b;
        "
      >
        {{ `რეგისტრაცია` }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowLoginModal",
};
</script>

<style scoped>
.login-inputs {
  border: 1px solid white;
  background-color: transparent;
  padding: 14px;
  width: 100%;
  border-radius: 35px;
  font-family: arrowFONT;
  font-size: 20px;
  font-weight: bold;
  outline: none;
  color: #022b4b;
}
input[type="radio"] {
  border: 0px;
  width: 20px;
  height: 20px;
  border: none;
  outline: none;
}
::placeholder {
  color: #fff;
}
.login-modal {
  position: absolute;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0396db;
}
.register-arrow-box {
  width: 45px;
  height: 45px;
  border-radius: 25px;
  background-color: #11bdf7;
  margin-left: 288px;
  margin-top: -48px;
}
.registerContainer {
  border-radius: 70px;
  outline: none;
  border: 1px solid #fff;
  padding: 9px;
  text-align: center;
  height: 77px;
  width: 100%;
  margin-top: -15px;
}
.registreBtn {
  border-radius: 70px;
  outline: none;
  padding: 10px;
  width: 100%;
  font-family: arrowFONT;
  font-weight: bold;
  height: 55px;
  text-align: center;
  font-size: 28px;
  color: white;
  background-color: #009ce7;
  border: none;
}
</style>