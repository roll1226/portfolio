<template>
  <div id="app">
    <Bg></Bg>
    <Nav></Nav>
    <router-view id="mainView"></router-view>
    <!-- <a href="#" id="return-top" v-scroll-to="'#nav'">Top</a> -->
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import Bg from '@/components/Bg.vue'

export default {
  components: {
    Nav,
    Bg
  }
}
</script>


<style lang="scss">
@font-face {
	font-family: 'font';
	src: url('../public/font_1_honokamarugo_1.1.ttf');
}

#app {
  font-family: 'font';
  font-weight: 100;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  text-align: center;
  letter-spacing: .3em;
  color: #2c3e50;
}

body::-webkit-scrollbar{
 display:none;
}

#mainView {
  position: relative;
  z-index: 1;
}
</style>
