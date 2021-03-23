<template>
  <div class="container p-0 work-slide-calculate">
    <h1 class="work-header text-center">როგორ მუშაობს</h1>
    <div class="header-line"></div>
    <div class="center-text main-form" style="margin-top: 40px">
      <div style="background-color: white">
        <form>
          <h5
            class="text-center"
            style="
              font-size: 18px;
              font-weight: bold;
              color: black;
              font-family: arrowFONT;
              padding-top: 15px;
            "
          >
            ტრანსპორტირების<br />
            ღირებულების დათვლა:
          </h5>
          <h4
            class="text-center"
            style="
              font-size: 23px;
              font-weight: bold;
              color: #11bdf7;
              font-family: arrowFONT;
            "
          >
            წონის კალკულატორი
          </h4>

          <div class="row">
            <div class="col-xl-3 text-right">
              <label class="input-label">სიგრძე</label>
              <label class="input-label">სიგანე</label>
              <label class="input-label">სიმაღლე</label>
            </div>
            <div class="col-xl-9">
              <input
                v-model="sigr"
                @change='calc'
                class="input-box mt-3"
                type="number"
                placeholder="სიგრძე"
              /><br />
              <input
                v-model="siga"
                @change='calc'
                class="input-box mt-3"
                type="number"
                placeholder="სიგანე"
              /><br />
              <input
                v-model="sima"
                @change='calc'
                class="input-box mt-3"
                type="number"
                placeholder="სიმაღლე"
              />
              <!-- <button @click.prevent='calc'>calc</button>
                            <input :value='total'>{{answer}}/> -->
            </div>
          </div>
          <div class="mt-4 price-div">
            <h1 class="p-2 price-text">{{kg}}კგ</h1>
            <h1 class="p-2 price-text">{{price}}$</h1>
          </div>

          <!-- <input :value="answer" /> -->

          <div style="margin: 0 auto; max-width: 270px">
            <button

              class="registreBtn mb-4 mt-3"
            >
              რეგისტრაცია
            </button>
          </div>
        </form>
      </div>
    </div>
    <div style="display: flex; justify-content: center; margin-top: 70px">
      <div class="nav-indicator prevArrowInside">
        <p
          style="
            color: #000;
            font-weight: bold;
            font-size: 25px;
            margin-top: -2px;
          "
        >
          &#x3c;
        </p>
      </div>
      &nbsp;&nbsp;
      <div>
        <h5
          style="
            font-family: arrowFONT;
            font-weight: bolder;
            color: #000;
            font-size: 30px;
          "
        >
          {{ 2 }} /
          <span style="color: #00b0ef; font-size: 30px">{{ 2 }} </span>
        </h5>
      </div>
      &nbsp;&nbsp;
      <div class="nav-indicator nextArrowInside">
        <p
          style="
            color: #000;
            font-weight: bold;
            font-size: 25px;
            margin-top: -2px;
          "
        >
          &#x3e;
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkCalculate",
    data() {
    return {
      sigr: Number,
      siga: Number,
      sima: Number,
      answer: 0,
      kg: 0,
      price: 0,
    };
  },
    methods: {
      calc() {
        if(this.sigr != 0 && this.siga != 0 && this.sima != 0){
          this.kg =
          (parseInt(this.sigr) * parseInt(this.siga) * parseInt(this.sima)) /
          6000;

          this.price = this.kg * 4
        }
      },
    }
}
</script>

<style scoped>
.price-div {
  margin-left: 20px;
  display: flex;
  justify-content: space-between;
  width: 350px;
  height: 50px;
  border: 1px solid #029fd5;
}
.main-form {
  background-color: gray;
  padding: 5px;
  max-width: 400px;
  margin-top: 20px;
}
.header-line {
  margin: 0 auto;
  background-color: #00b0ef;
  height: 3px;
  width: 50px;
}
.work-header {
  font-size: 20px;
  font-family: arrowFONT;
  font-weight: bold;
  color: white;
  padding-top: 50px;
}
.price-text {
  font-size: 30px;
  font-family: arrowFONT;
  font-weight: bolder;
  color: #009ce7;
}
.input-label {
  margin-left: 20px;
  margin-top: 28px;
  font-size: 18px;
  font-family: arrowFONT;
  color: #009ce7;
  font-weight: bold;
}
.input-box {
  padding: 8px;
  outline: none;
  border: 1px solid #11bdf7;
  margin-left: 20px;
  width: 87%;
}
.registreBtn {
  text-align: center;
  border-radius: 70px;
  outline: none;
  padding: 10px;
  width: 280px;
  font-family: arrowFONT;
  font-weight: bold;
  height: 60px;
  text-align: center;
  font-size: 28px;
  color: white;
  background-color: #009ce7;
  border: none;
}
.center-text {
  margin: 0 auto;
  max-width: 400px;
}
.work-slide-calculate {
  background-size: cover;
  height: 720px;
  background-image: url("./../../../assets/images/image5.jpg");
}
::-webkit-input-placeholder {
  /* Chrome/Opera/Safari */
  color: transparent;
}
::-moz-placeholder {
  /* Firefox 19+ */
  color: transparent;
}
:-ms-input-placeholder {
  /* IE 10+ */
  color: transparent;
}
:-moz-placeholder {
  /* Firefox 18- */
  color: transparent;
}
@media all and (max-width: 480px) {
  .work-slide-calculate {
    height: 880px;
    margin-top: 70px;
  }
  .center-text {
    max-width: 350px;
  }
  .main-form {
    margin-top: 30px;
    max-width: 350px;
  }
  .price-div {
    width: 300px;
  }
  .input-label {
    display: none;
  }
  ::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: #00b0ef;
  }
  ::-moz-placeholder {
    /* Firefox 19+ */
    color: #00b0ef;
  }
  :-ms-input-placeholder {
    /* IE 10+ */
    color: #00b0ef;
  }
  :-moz-placeholder {
    /* Firefox 18- */
    color: #00b0ef;
  }
}
</style>