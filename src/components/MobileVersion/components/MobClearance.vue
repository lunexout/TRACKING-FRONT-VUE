<template>
  <div class="container" style="max-width: 900px">
    <div style="padding: 5px" class="mt-5">
      <h1
        class="text-center"
        style="font-size: 25px; font-family: arrowFONT; font-weight: bold"
      >
        დეკლარირება და განბაჟება
      </h1>
      <div
        style="
          width: 60px;
          height: 3px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          background-color: rgb(16, 189, 251);
        "
      ></div>
      <div class="accordion mt-3" id="accordionExample">
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
              რა უნდა ვიცოდეთ განბაჟებაზე?
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
                1. განსაბაჟებელია ამანათი(ები) როდესაც ერთ მაღაზიაში შეძენილი
                ნივთის რებულება, ერთეულის ან ჯამურად, აღემატება 300 ლარს.
              </p>
              <p class="mt-3 geo-font services-text">
                2. 300კგ-ზე მეტი წონის ამანათები ექვემდებარება განბაჟებას (ფასის
                მიუხედავად)
              </p>
              <p class="mt-3 geo-font services-text">
                3. 5-ზე მეტი ერთგვაროვანი საქონელი ექვემდებარება განბაჟებას
                (ფასის მიუხედავად)
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item mt-3">
          <h2 class="accordion-header" id="headingTwo">
            <button
              type="button"
              class="accordion-button accord-btn collapsed no-btn-big-width"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              განბაჟების ფორმულა:
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse border-accordion collapse accord-box"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body border-accordion">
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item mt-3">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button accord-btn collapsed no-btn-big-width"
              type="button"
              data-bs-toggle="collapse"
              style="color: red"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              აკრძალული ნივთების სია:
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse border-accordion collapse accord-box"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body border-accordion">
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MobClearance",
};
</script>

<style scoped>
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
  /* overflow-y: scroll; */
}
</style>