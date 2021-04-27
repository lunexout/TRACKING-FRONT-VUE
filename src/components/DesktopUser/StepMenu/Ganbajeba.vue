<template>
  <div class="addbalanace-modal animate__animated animate__fadeInDown">
    <!-- <div style='max-width: 500px; margin: 0 auto;'> -->
    <button
      @click="() => emitter.emit('closedeskganbajeba')"
      class="close-balance-modal"
    >
      X
    </button>

    <div class="balance-menu-cont">
      <h1 class="balance-header" style='font-size: 25px;'>განბაჟება</h1>

      <div
        style="
          display: flex;
          padding: 10px;
          border: 1px solid white;
          background-color: transparent;
          border-radius: 35px;
          justify-content: center;
          align-items: center;
          margin-top: 50px;
        "
      >
        <img
          src="./../../../assets/mobile/pdf.svg"
          style="width: 40px; height: 40px"
        />
        <!-- <i class="far fa-file-pdf" style="width: 40px; height: 40px; color: #fff;"></i> -->
        <input
          type="file"
          @change="FileInvoicePhoto($event)"
          name="file"
          id="file"
          class="inputfile"
        />
        <label for="file" style="margin-left: 10px">ინვოსის ატვირთვა (PDF):</label>
      </div>

      <h1 class="balance-header mt-5">პირადობის ან პასპორტის</h1>
      <div class="container">
        <div class="row">
          <div class="col-xl-4">
            <div style="position: relative">
              <img
                :src="firstPassport"
                style="
                  width: 100%;
                  height: 200px;
                  border: 1px solid white;
                  overflow: hidden;
                  border-radius: 20px;
                "
              />
              <input
                type="file"
                @change="FileFirstPhoto($event)"
                name="file"
                id="file1"
                class="inputfile"
              />
              <label
                for="file1"
                style="
                  position: absolute;
                  text-align: center;
                  opacity: 0.7;
                  left: 50%;
                  top: 50%;
                  transform: translate(-50%, -50%);
                  z-index: 999;
                "
              >
                ატვირთეთ პირადობის ან პასპორტის წინა მხარე
              </label>
            </div>
          </div>
          <div class="col-xl-4">
            <div style="position: relative">
              <img
                :src="secondPassport"
                style="
                  width: 100%;
                  height: 200px;
                  border: 1px solid white;
                  overflow: hidden;
                  border-radius: 20px;
                "
              />
              <input
                type="file"
                @change="FileSecondPhoto($event)"
                name="file"
                id="file2"
                class="inputfile"
              />
              <label
                for="file2"
                style="
                  position: absolute;
                  text-align: center;
                  opacity: 0.7;
                  left: 50%;
                  top: 50%;
                  transform: translate(-50%, -50%);
                  z-index: 999;
                "
              >
                ატვირთეთ პირადობის ან პასპორტის უკანა მხარე
              </label>
            </div>
          </div>

          <div class="col-xl-4">
                      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button accord-btn no-btn-big-width"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              მომსახურების საკომისიო სხვადასხვა ბანკის ბარათზე
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse border-accordion collapse show accord-box"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
            style="font-family: arrowFONT; font-weight: bold; border: none"
          >
            <div class="accordion-body border-accordion">
              <p class="mt-1 geo-font services-text">
                თიბისი, ლიბერთი, ვითიბი, ჰალიკი, ბაზის ბანკი, ტერა ბანკი
                <span style="color: #01a4ef">1.3%</span>
              </p>
              <p class="mt-3 geo-font services-text">
                საქართველოს ბანკი, ქართუ ბანკი, პროკრედიტ ბანკი
                <span style="color: #01a4ef">1.8%</span>
              </p>
            </div>
          </div>
        </div>
            </div>
        </div>
      </div>

      <div
        class="text-center balanceContainer mt-5"
        style="margin-left: -20px; margin: 0 auto"
      >
        <button class="balanceBtn" @click.prevent="login" @keyup.enter="login">
          გაგზავნა
          <div class="balance-arrow-box">
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
  </div>
</template>

<script>
export default {
  name: "Ganbajeba",
  data() {
    return {
      firstPassport: "",
      secondPassport: "",
    };
  },
  methods: {
    FileInvoicePhoto(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      let x = files[0];
      console.log(x);
    },
    FileFirstPhoto(e) {
      console.log(e.target.files);
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage1(files[0]);
    },

    FileSecondPhoto(e) {
      console.log(e.target.files);
      console.log("eldari");
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage2(files[0]);
    },
    createImage1(file) {
      // let image = new Image();

      let reader = new FileReader();
      //   var vm = this;

      reader.onload = (e) => {
        this.firstPassport = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    createImage2(file) {
      // let image = new Image();

      let reader = new FileReader();
      //   var vm = this;

      reader.onload = (e) => {
        this.secondPassport = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    // removeImage: function () {
    // this.firstPassport = '';
    // }
  },
};
</script>

<style scoped>
.styled-div {
  height: 51px;
  background-color: transparent;
  border: 1px solid white;
  padding: 5px;
  display: flex;
  border-radius: 40px;
  width: 100%;
}
.balance-menu-cont {
  position: absolute;
  left: 50%;
  top: 30px;
  height: auto;
  width: 1000px;
  transform: translate(-50%);
}
.balance-header {
  color: #fff;
  font-family: arrowFONT;
  font-size: 18px;
  font-weight: bold;
  text-align: left;
  margin-left: 30px;
}
.close-balance-modal {
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
.addbalanace-modal {
  position: absolute;
  z-index: 99998;
  top: 0;
  left: 0;
  width: 100%;
  height: 1200px;
  padding: 10px;
  overflow: hidden;
  background-color: #0396db;
}

.balance-arrow-box {
  width: 30px;
  height: 30px;
  border-radius: 25px;
  background-color: #11bdf7;
  margin-left: 205px;
  margin-top: -35px;
}
.balanceContainer {
  border-radius: 70px;
  outline: none;
  border: 1px solid #fff;
  padding: 9px;
  text-align: center;
  height: 67px;
  width: 270px;
  margin-top: -15px;
}
.balanceBtn {
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

/* accord */
.border-accordion {
  border-radius: 0px 0px 25px 25px !important;
}
.accord-container {
  position: absolute;
  left: 11.5%;
  top: 390px;
  max-width: 52%;
}
.accordion-button:not(.collapsed) {
  font-family: arrowFONT;
  font-weight: bold;
  color: #00a8f0;
  background-color: #fff;
  border: none;
  outline: none;
}
.accord-box {
  border: none;
  margin-top: -25px;
  padding-top: 10px;
  border-bottom-left-radius: 25px !important;
  border-bottom-right-radius: 25px !important;
  box-shadow: rgba(17, 17, 26, 0.25) 0px 0px 16px;
}
.accord-btn {
  font-family: arrowFONT;
  font-weight: bold;
  border-radius: 25px !important;
  color: #00a8f0;
  background-color: #fff;
  border: none;
  box-shadow: rgba(17, 17, 0, 0.1) 0px 0px 20px;
}
.panel-body {
  width: 700px;
  overflow: hidden;
}
.accordion-button::after {
  flex-shrink: 0;
  width: 30px;
  height: 30px;
  margin-left: auto;
  content: "";
  background-image: url("./../../../assets/mainpage/downarrow.svg");
  background-repeat: no-repeat;
  background-size: 40px;
  transition: transform 0.2s ease-in-out;
}
.accordion-body {
  max-height: 400px;
  background-color: white;
  margin-top: -5px;
  /* overflow-y: scroll; */
}
.services-text {
  font-size: 15px;
}

/* MOB PHOTO CHOOSE FILE */
.inputfile {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  width: 100%;
  z-index: -1;
}
.inputfile + label {
  font-size: 1.25em;
  font-weight: 700;
  color: white;
  /* background-color: black; */
  font-family: arrowFONT;
  display: inline-block;
}

.inputfile:focus + label,
.inputfile + label:hover {
  /* background-color: red; */
}
.inputfile + label {
  cursor: pointer; /* "hand" cursor */
}
</style>
