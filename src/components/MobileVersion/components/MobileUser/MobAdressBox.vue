<template>
      <div class="styled-div mt-2 p-3">
        <img src='../../../../assets/conditions/p01.svg' style='width: 60px; height: 60px;'/>
        <div style='display: flex; flex-direction: column;'>
            <h1 class="payment-header text-dark" style="padding: 10px; font-size: 15px">{{title}}</h1>
        <h1 class="payment-header1" style="padding: 10px;">{{desc}}</h1>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MobAdressBox',
    props: [
        'title',
        'desc'
    ]
}
</script>

<style scoped>
.styled-div {
  height: 100px;
  background-color: transparent;
  border: 1px solid white;
  padding: 5px;
  display: flex;
  border-radius: 20px;
  width: 100%;
}
.payment-header1 {
  color: #fff;
  font-family: arrowFONT;
  font-size: 18px;
  font-weight: bold;
  text-align: left;
  margin-top: -20px;
}
.payment-header {
  color: #fff;
  font-family: arrowFONT;
  font-size: 18px;
  font-weight: bold;
  text-align: left;
}
</style>