<template>
  <div id="app">
    <Bg></Bg>
    <Nav></Nav>
    <router-view id="mainView"></router-view>
    <a href="#" id="return-top" v-scroll-to="'#nav'">Top</a>
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
  h1 {
    font-size: 7vw;
  }
}

body::-webkit-scrollbar{
 display:none;
}

#mainView {
  position: relative;
  z-index: 0;
}

#return-top {
    position: fixed;
    z-index: 1;
    background-color: #000;
    border-radius: 50%;
    bottom: 50px;
    color: #fff;
    font-size: 14px;
    height: 50px;
    line-height: 50px;
    outline: 0;
    right: 50px;
    text-align: center;
    width: 50px;
}
</style>
