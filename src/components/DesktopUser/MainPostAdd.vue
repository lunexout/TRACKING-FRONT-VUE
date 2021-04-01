<template>
  <div class="main-added-post mt-3">
    <div style="display: flex">
      <img class="added-post" src="./../../assets/conditions/p01.svg" />
      <h5 class="text-white mt-1 tracking-code">
        {{ code }}
      </h5>
    </div>
    <div>
      <button class="declareBtn">
        დეკლარირება
        <div class="declare-svg-box">
          <img
            style="width: 15px; height: 15x; margin-top: 5px"
            src="./../../assets/mainpage/right-arrow.svg"
            alt="Right arrow"
          />
        </div>
      </button>
    </div>
    <div>
      <button
        class="deleteDeclareBtn"
        @click="emitter.emit('deletePost', code)"
      >
        წაშლა
        <div class="declare-svg-box">
          <img
            style="width: 15px; height: 15x; margin-top: 5px"
            src="./../../assets/mainpage/right-arrow.svg"
            alt="Right arrow"
          />
        </div>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainPostAdd",
  props: ["code"],
};
</script>

<style scoped>
.added-post {
  width: 30px;
  height: 30px;
}
.main-added-post {
  background-color: none;
  height: 50px;
  border: 1px solid white;
  font-family: arrowFONT;
  font-size: 18px;
  padding: 7px;
  border-radius: 40px;
  display: flex;
  justify-content: space-between;
  padding-right: 3px;
}
.declareBtn {
  border-radius: 70px;
  outline: none;
  padding: 10px;

  width: 200px;
  font-family: arrowFONT;
  font-weight: bold;
  height: 41px;
  text-align: center;
  font-size: 14px;
  color: white;
  margin-top: -3px;
  background-color: #009ce7;
  border: none;
}
.declare-svg-box {
  width: 27px;
  height: 27px;
  border-radius: 25px;
  background-color: #11bdf7;
  margin-left: -2px;
  margin-top: -24px;
}
.deleteDeclareBtn {
  border-radius: 70px;
  outline: none;
  padding: 10px;
  width: 150px;
  font-family: arrowFONT;
  font-weight: bold;
  height: 41px;
  text-align: center;
  font-size: 14px;
  color: red;
  margin-top: -4px;
  background-color: #fff;
  border: none;
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
</style>