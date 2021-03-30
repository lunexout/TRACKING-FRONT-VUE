<template>
  <div class="menu-modal">
    <button @click="() => emitter.emit('closemobmenu')" class="close-mob-menu">
      X
    </button>
    <div class="container" style="max-width: 400px; min-width: 300px">
      <div
        style="display: flex; justify-content: space-between; margin-top: 80px"
      >
        <select v-model="$i18n.locale" class="lang-select">
          <option
            class="lang-item"
            v-for="(lang, i) in langs"
            :key="`Lang${i}`"
            :value="lang"
          >
            <div style="background-color: transparent" v-if="lang == 'geo'">
              ქა
            </div>
            <div style="background-color: transparent" v-else>
              {{ lang }}
            </div>
          </option>
        </select>
        <button style="" class="menu-log-reg-button"
         @click='() => emitter.emit("mobloginmodal")'>{{ $t("login") }}</button>
        <button style="" class="menu-log-reg-button"
         @click='emitter.emit("mobregisterrulemodal")'>
          {{ $t("register") }}
        </button>
      </div>
      <div style="display: block" class="mt-5">
        <button
          style="display: block"
          class="menu-buttons-selected"
          @click="() => emitter.emit('closemobmenu')"
        >
          <a href="#mainpage" style="text-decoration: none; color: #fff">მთავარი</a>
        </button>
        <button
          style="display: block"
          class="menu-buttons"
          @click="() => emitter.emit('closemobmenu')"
        >
          <a href="#services" style="text-decoration: none; color: #fff"
            >ჩვენი სერვისები</a
          >
        </button>
        <button
          style="display: block"
          class="menu-buttons"
          @click="() => emitter.emit('closemobmenu')"
        >
          <a href="#conditions" style="text-decoration: none; color: #fff"
            >პირობები</a
          >
        </button>
        <button
          style="display: block"
          class="menu-buttons"
          @click="() => emitter.emit('closemobmenu')"
        >
          <a href="#declare" style="text-decoration: none; color: #fff"
            >დეკლარირება და განბაჟება</a
          >
        </button>
        <button
          style="display: block"
          class="menu-buttons"
          @click="() => emitter.emit('closemobmenu')"
        >
          <a href="#howworks" style="text-decoration: none; color: #fff"
            >როგორ მუშაობს</a
          >
        </button>
        <button
          style="display: block"
          class="menu-buttons"
          @click="() => emitter.emit('closemobmenu')"
        >
          <a href="#sendmail" style="text-decoration: none; color: #fff"
            >კონტაქტი</a
          >
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowMobMenu",
  data() {
    return {
      langs: ["geo", "Tü"],
    };
  },
};
</script>

<style scoped>
.close-mob-menu {
  position: absolute;
  right: 10px;
  top: 10px;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 40px;
  font-weight: 200;
  color: white;
}
.lang-select {
  border: none;
  height: 35px !important;
  /* position: absolute; */
  z-index: 2;
  /* margin-left: -35px; */
  font-size: 20px;
  font-family: arrowFONT;
  /* margin-top: 8px;
  margin-bottom: 8px; */
  /* padding: 10px; */
  color: white;
  border: 1px solid white;
  /* border: none; */
  outline: none;
  background-color: transparent;
  border-radius: 30px;
  /* appearance: none; */
  width: 60px;
  /* padding: 10px; */
  /* -webkit-appearance: none;
  -moz-appearance: none;
  background: transparent;
  background-image: url("./../../../assets/mainpage/downarrow.svg");
  background-repeat: no-repeat; */
}
.lang-item:hover {
  color: white;
}
.lang-item {
  /* padding: 10px; */
  background-color: #029fd5;
  color: white;
}
.menu-log-reg-button {
  background-color: transparent;
  font-family: arrowFONT;
  font-size: 19px;
  color: #fff;
  border-radius: 30px;
  height: 35px;
  border: 1px solid #fff;
  padding-left: 15px;
  padding-right: 15px;
}
.menu-buttons-selected {
  width: 100%;
  border-radius: 40px;
  background-color: #2e2e2e;
  text-align: left;
  color: white;
  font-family: arrowFONT;
  font-size: 20px;
  font-weight: bold;
  padding-left: 20px;
  border: none;
  outline: none;
}
.menu-buttons {
  margin-top: 10px;
  color: white;
  font-family: arrowFONT;
  font-size: 20px;
  font-weight: bold;
  padding-left: 20px;
  border: none;
  background-color: transparent;
  outline: none;
}
.menu-modal {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0396db;
}
</style>
