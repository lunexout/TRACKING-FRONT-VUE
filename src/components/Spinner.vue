<template>
  <div class="spinner-border text-primary spinner-main" role="status">
  <span class="visually-hidden">Loading...</span>
  </div>
</template>

<script>
export default {
  name: "Spinner",
};
</script>

<style scoped>
.spinner-main {
  position: absolute;
  top: 30%;
  font-size: 5%;
  left: 47.5%;
  /* transform: translate(-50%, 0); */
}
</style>