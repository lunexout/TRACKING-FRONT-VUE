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
         @click='emitter.emit("onLogout")'>
          გამოსვლა
        </button>
      </div>
      <div style="display: block" class="mt-5">
        <button
          style="display: block"
          class="menu-buttons"
          @click="() => {
          emitter.emit('closemobmenu');
          emitter.emit('opendashboard');  
          }"
        >
          <router-link to="/" style="text-decoration: none; color: #fff">მთავარი</router-link >
        </button>
        <button
          style="display: block"
          class="menu-buttons"
          @click="() => {
            emitter.emit('closemobmenu');
            emitter.emit('openmobquestions')
          }"
        >
          <a style="text-decoration: none; color: #fff"
            >ხშირად დასმული კითხვები</a
          >
        </button>
        <button
          style="display: block"
          class="menu-buttons"
          @click="() => {
            emitter.emit('closemobmenu');
            emitter.emit('openmobraces')
          }"
        >
          <a href="#conditions" style="text-decoration: none; color: #fff"
            >რეისები</a
          >
        </button>

        <button style="width: 100%;" class="menu-log-reg-button mt-4">
          (+ 995) 599 710 202
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MobMenu",
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
  z-index: 2;
  font-size: 20px;
  font-family: arrowFONT;
  color: white;
  border: 1px solid white;
  outline: none;
  background-color: transparent;
  border-radius: 30px;
  width: 60px;
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
