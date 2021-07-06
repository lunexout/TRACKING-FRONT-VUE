<template>
  <div class="main-added-post mt-3">
    <div style="display: flex;">
      <img class="added-post" src="./../../../../assets/conditions/p01.svg" />
      <h5 class="text-white mt-1 tracking-code">
        {{ code }}
      </h5>
    </div>
<!-- 
    <div style='overflow-y: scroll; display: flex; padding: 10px; flex-direction: column; justify-content:center; height: 40px;'>
      <div style='margin-top: 60px;'>
        <h5 style='margin-left: 45px;'>200$</h5>
        <h5 class='post-desc'>აუდიო აპარატურის ნაწილი</h5>
      </div>
            <div>
        <h5 style='margin-left: 45px; '>200$</h5>
        <h5 class='post-desc'>აუდიო აპარატურის ნაწილი</h5>
      </div>
    </div> -->

    <div style="display: flex;" class='mt-2'>
    <div>
      <button class="declareBtn" @click='emitter.emit("openmobdeclare",code)'>
        დეკლარირება
        <div class="declare-svg-box">
          <img
            style="width: 25px; height: 25x; margin-right: 0px"
            src="./../../../../assets/mobile/declare.svg"
            alt="Right arrow"
          />
        </div>
      </button>
    </div>
    <div>
      <button
        class="deleteDeclareBtn"
        @click="emitter.emit('deletePost', parsel_id)"
      >
        წაშლა
        <div class="declare-svg-box">
          <img
            style="width: 25px; height: 25x; margin-top: 0px"
            src="./../../../../assets/mobile/delete.svg"
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
  name: "MobUserPost",
  props: ["code", "parsel_id"],
};
</script>

<style scoped>
.added-post {
  width: 30px;
  height: 30px;
}
.main-added-post {
  background-color: none;
  height: 150px;
  border: 1px solid white;
  font-family: arrowFONT;
  font-size: 18px;
  padding: 7px;
  border-radius: 10px;
  /* display: flex; */
  /* justify-content: space-between; */
  padding-right: 3px;
}
.declareBtn {
  border-radius: 70px;
  outline: none;
  padding-top: 6px;
  width: 150px;
  font-family: arrowFONT;
  font-weight: bold;
  height: 31px;
  padding-right: 0;
  text-align: center;
  font-size: 11px;
  color: white;
  margin-top: -3px;
  background-color: red;
  border: none;
  margin-left: 14px;
}
.declare-svg-box {
  width: 23px;
  height: 23px;
  /* border-radius: 25px; */
  /* background-color: #11bdf7; */
  margin-left: -2px;
  margin-top: -23px;
}
.deleteDeclareBtn {

  border-radius: 70px;
  outline: none;
  padding-top: 6px;
  padding-right: 0px;
  width: 90px;
  font-family: arrowFONT;
  font-weight: bold;
  height:31px;
  text-align: center;
  font-size: 11px;
  color: red;
  margin-top: -4px;
  margin-left: 5px;
  background-color: #fff;
  border: none;
}
.post-desc {
    font-size: 14px;;margin-left: 45px; margin-top: -10px;
}
.tracking-code {
  margin-left: 10px;
  width: 210px;
  height: 30px;
  border-radius: 20px;
  padding-left: 6px;
  padding-right: 6px;
  overflow-x: scroll;
  font-weight: bold;
}
::-webkit-scrollbar {
  width: 100%;
  height: 3px;
}

::-webkit-scrollbar-track {
  border-radius: 2px;
}

::-webkit-scrollbar-thumb {
  background: #00a8f0;
  border-radius: 30px;
}

::-webkit-scrollbar-thumb:hover {
  background: #00a8f0;
}

@media all and (min-width: 321px) {
.declareBtn {
    margin-left: 40px;
}
.post-desc {
    font-size: 16px;
}
}
</style>