<template>
  <div class='transaction-cont' >
    <button
      @click="() => emitter.emit('closedesktransaction')"
      class="close-transaction-modal"
    >
      X
    </button>
       <div style="display: flex; justify-content: center; margin-top: 130px;">
            <div class="transaction-menu-cont">
            <h1 class="transaction-header" style='font-size: 26px; 
            margin-top: -50px; margin-bottom: 20px;'>ტრანსზაქციები</h1>

                <div style='height: 81px; border: 1px solid white; border-radius: 10px;
                 width: 300px;background-color: transparent; padding: 15px;'>
                    <h1 class="transaction-header">
                                        თქვენ არცერთი ტრანზაქცია არ გაქვთ შესრულებული.
                                    </h1>
                </div>
            </div>  
        </div>
  </div>
</template>

<script>
export default {
  name: "Transactions",
};
</script>

<style scoped>
.transaction-cont {
  position: absolute;
  background-color: #027ec4;
  left: 0;
  top: 0;
  /* transform: translate(-50%, -10%); */
  height: 100%;
  width: 100%;
  z-index: 99999;
}
.transaction-menu-cont {

}
.transaction-header {
      color: #fff;
  font-family: arrowFONT;
  font-size: 18px;
  font-weight: bold;
  text-align: left;
}
.close-transaction-modal {
  position: absolute;
  right: 20px;
  top: 20px;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 40px;
  font-weight: 200;
  color: white;
}
</style>