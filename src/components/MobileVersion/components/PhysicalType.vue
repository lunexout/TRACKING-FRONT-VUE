<template>
  <div style="display: flex; justify-content: space-between; margin-top: 150px">
    <div class="active-box" style="margin-top: -150px">
      <h5 class="text-center physical-txt">ფიზიკური პირი</h5>
    </div>
    <div class="down-arrow-div" style="margin-top: -115px"></div>
    <button @click="() => emitter.emit('physical')" class="physical-div">
      <h5 class="text-center iuridiuli-txt">იურიდიული პირი</h5>
    </button>
  </div>
  <div style="margin-top: -100px">
    <input type="text" placeholder="სახელი(ქართულად)*" class="inputs" />
    <input type="text" placeholder="გვარი(ქართულად)*" class="inputs" />
    <input type="text" placeholder="სახელი(ლათინურად)*" class="inputs" />
    <input type="text" placeholder="გვარი(ლათინურად)*" class="inputs" />
    <input type="text" placeholder="დაბადების თარიღი" class="inputs" />

    <p class="sex">სქესი*</p>
    <input type="radio" id="male" name="gender" value="male" />
    <label class="male-togg" for="male">მდედრობით</label>
    <input type="radio" id="female" name="gender" value="female" />
    <label class="famale" for="female">მამრობითი</label><br />

    <input type="text" placeholder="ელ-ფოსტა*" class="inputs" />
    <input type="text" placeholder="მობილური ტელეფონი*" class="inputs" />
    <input type="password" placeholder="პაროლი*" class="inputs" />
    <input type="password" placeholder="პაროლი განმეორებით" class="inputs" />
    <input type="text" placeholder="მისამართი" class="inputs" />
    <input type="text" placeholder="პირადი ნომერი*" class="inputs" />
  </div>
</template>

<script>
export default {
  name: "PhysicalType",
};
</script>

<style scoped>
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
.iuridiuli-txt {
  color: #000;
  font-weight: bold;
  font-family: arrowFONT;
  z-index: 2;
  font-size: 12px;
}
.physical-div {
  width: 100%;
  padding: 14px;
  height: 45px;
  border: 1px solid #000;
  background-color: transparent;
  margin-top: -150px;
}
.physical-txt {
  color: white;
  font-weight: bold;
  font-size: 13px;
  font-family: arrowFONT;
  z-index: 2;
}
.down-arrow-div {
  margin-top: -20px;
  width: 20px;
  background-color: #0396db;
  height: 20px;
  position: absolute;
  margin-left: 60px;
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
  border: 1px solid #fff;
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