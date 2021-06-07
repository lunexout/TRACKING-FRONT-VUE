<template>
  <div class="login-modal animate__animated animate__fadeInDown">
    <button
      @click="() => emitter.emit('closeloginmodal')"
      class="close-log-modal"
    >
      X
    </button>
    <div class="log-cont">
      <form>
        <input
          v-model="logdata.email"
          ref="login"
          class="login-inputs"
          type="text"
          placeholder="ელ ფოსტა"
        />
        <input
          v-model="logdata.password"
          ref="password"
          class="mt-4 login-inputs"
          type="password"
          placeholder="პაროლი"
        />
        <div v-if='errorLogin'>
          <p class='login-error mt-3' style="color: red; font-size; 16px;">მომხმარებლის პაროლი ან ლოგინი არასწორია</p>
        </div>
        <div class="mt-4" s>
          <input type="radio" id="female" name="gender" value="female" />
        </div>
        <label class="save-user" for="female">დამახსოვრება</label>

        <p class="recover-password">პაროლის აღდგენა?</p>

        <div
          class="text-center registerContainer mt-5"
          style="margin-left: -20px; margin: 0 auto"
        >
          <button
            class="registreBtn"
            @click.prevent="login"
            @keyup.enter="login"
          >
            {{ $t("login") }}
            <div class="register-arrow-box">
              <img
                style="width: 15px; height: 15x; margin-top: 13px"
                src="./../assets/mainpage/right-arrow.svg"
                alt="Right arrow"
              />
            </div>
          </button>
        </div>
      </form>

      <button
        class="mt-4 register-btn"
        @click="
          () => {
            emitter.emit('mobregisterrulemodal');
            emitter.emit('openregistermodal');
            emitter.emit('closeloginmodal');
          }
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
  data() {
    return {
      logdata: {
        email: "",
        password: "",
      },
      errorLogin: false,
    };
  },
  methods: {
    login() {
      this.emitter.emit("onLogin", this.logdata);
    },
  },
  mounted() {
    this.emitter.on('erroOnLog', () => {
      this.errorLogin = true;
    })
  }
};
</script>

<style scoped>
.register-btn {
  width: 100%;
  font-size: 28px;
  font-family: arrowFONT;
  font-weight: bold;
  height: 77px;
  border: 1px solid #fff;
  background-color: transparent;
  border-radius: 50px;
  color: #022b4b;
}
.log-cont {
  position: absolute;
  left: 50%;
  top: 50%;
  height: auto;
  min-width: 300px;
  max-width: 370px;
  transform: translate(-50%, -50%);
}
.save-user {
  font-family: arrowFONT;
  margin-left: 5px;
  font-size: 18px;
  color: white;
  font-weight: bold;
  position: absolute;
  margin-top: -28px;
  margin-left: 25px;
}
.login-error {
  font-family: arrowFONT;
  margin-left: 5px;
  font-size: 18px;
  color: red;
  font-weight: bold;
  margin-top: -28px;
  margin-left: 25px;
}
.close-log-modal {
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
.recover-password {
  font-family: arrowFONT;
  font-size: 19px;
  color: #022b4b;
  font-weight: bold;
  position: absolute;
  margin-top: -28px;
  right: 0;
}
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
  color: #fff;
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
  position: fixed;
  z-index: 99998;
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
@media all and (max-width: 320px) {
  .register-arrow-box {
    display: none;
  }
  .recover-password {
    margin-top: -23px;
    font-size: 14px !important;
  }
}
@media all and (max-width: 480px) {
  .login-inputs {
    border: 1px solid white;
    background-color: transparent;
    padding: 14px;
    width: 100%;
    border-radius: 35px;
    font-family: arrowFONT;
    font-size: 15px;
    font-weight: bold;
    outline: none;
    color: #fff;
  }
  .close-log-modal {
    top: 0px;
    right: 0px;
  }
  .log-cont {
    max-width: 315px;
  }
  .register-arrow-box {
    width: 45px;
    height: 45px;
    border-radius: 25px;
    background-color: #11bdf7;
    margin-left: 238px;
    margin-top: -48px;
  }
  .recover-password {
    font-size: 14px;
    margin-top: -25px;
  }
  .save-user {
    margin-top: -25px;
    font-size: 14px;
  }
  .register-btn {
    width: 100%;
    font-size: 18px;
    font-family: arrowFONT;
    font-weight: bold;
    height: 67px;
    border: 1px solid #fff;
    background-color: transparent;
    border-radius: 50px;
    color: #022b4b;
  }
  .register-arrow-box {
    width: 40px;
    height: 40px;
    border-radius: 25px;
    background-color: #11bdf7;
    margin-left: 242px;
    margin-top: -35px;
  }
  .registerContainer {
    border-radius: 70px;
    outline: none;
    border: 1px solid #fff;
    padding: 9px;
    text-align: center;
    height: 67px;
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
    height: 45px;
    text-align: center;
    font-size: 18px;
    color: white;
    background-color: #009ce7;
    border: none;
  }
}
</style>
