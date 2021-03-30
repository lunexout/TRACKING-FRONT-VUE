<template>
  <div
    class="col-xl-12 mt-3 py-2 px-3 cardreg"
    
  >
    {{cardHeader}}
    <p
      class="mt-4"
      style="color: white; font-family: arrowFONT; font-size: 15px"
    >
      {{ firstCondition }}
    </p>
    <p style="color: white; font-family: arrowFONT; font-size: 15px">
      {{ secondCondition }}
    </p>
  </div>
</template>

<script>
export default {
  name: "RegisterCards",
  props: ["cardHeader", "firstCondition", "secondCondition"],
};
</script>

<style scoped>
.cardreg {
        height: 190px;
      border-radius: 25px;
      background-color: #139fe3;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      font-family: arrowFONT;
      font-size: 19px;
      font-weight: bold;
}
@media all and (max-width: 1310px){
.cardreg {
  height: 210px;
}
}
</style>