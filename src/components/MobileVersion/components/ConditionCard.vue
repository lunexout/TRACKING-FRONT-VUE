<template>
  <div class="carousel-item">
    <img
      src="./../../../assets/images/image3.jpg"
      class="d-block w-100"
      style="height: 550px"
      alt="..."
    />
    <h1 class="centered text-white">sukaaa</h1>
  </div>
</template>

<script>
export default {
  name: "ConditionCard",
  data() {
    return {
      conditions: [{ id: 1, description: "" }],
    };
  },
};
</script>

<style scoped>
</style>