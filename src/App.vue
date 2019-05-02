<template>
  <div id="app">
    <Bg></Bg>
    <Nav></Nav>
    <transition name="mainfade">
      <router-view id="mainView"></router-view>
    </transition>
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
	src: url('../public/font_1_honokamarugo_1.1.woff') format('woff');
}

#app {
  font-family: 'font';
  font-weight: 100;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  letter-spacing: .3em;
  color: #2c3e50;
}

html,body{
  overflow: hidden
}

body::-webkit-scrollbar{
 display:none;
}

#mainView {
  position: relative;
  z-index: 1;
}

.mainfade-enter-active,
.mainfade-leave-active {
    position: absolute;
    transition: opacity .5s
 }

.mainfade-enter,
.mainfade-leave-active {
    opacity: 0
}
</style>
