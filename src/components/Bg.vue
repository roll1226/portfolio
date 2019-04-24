<template>
  <div id="bg">
    <div class="bg_slanting1"></div>
    <div class="bg_slanting2"></div>
  </div>
</template>

<script>
export default {
  name: 'Bg'
}
</script>


<style lang="scss">
#bg {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  .bg_slanting1,
  .bg_slanting2 {
    position: fixed;
    width: 0;
    height: 0;
  }
  .bg_slanting1 {
    top: 0;
    left: 0;
    border-top: 9.5vh solid #0cf;
    border-right: 50vw solid transparent;
    border-bottom: 9.5vh solid transparent;
    border-left: 50vw solid #0cf;
  }
  .bg_slanting2 {
    bottom: 0;
    left: 0;
    border-top: 9.5vh solid transparent;
    border-right: 50vw solid #0cf;
    border-bottom: 9.5vh solid #0cf;
    border-left: 50vw solid transparent;
  }
}
</style>
