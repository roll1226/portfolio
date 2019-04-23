<template>
    <div id="nav">
      <div class="straight" @click="nav_hamburger">
        <div class="straight1" v-bind:class="{ns1: nomalStraight, ms1: moveStraight}"></div>
        <div class="straight2" v-bind:class="{ns2: nomalStraight, ms2: moveStraight}"></div>
        <div class="straight3" v-bind:class="{ns3: nomalStraight, ms3: moveStraight}"></div>
      </div>

      <div class="msk" v-bind:class="{none: mskchang}" @click="nav_hamburger"></div>

      <div class="navmenu" v-bind:class="{navmenutrue: navmenutrue, navmenufales: navmenufales}">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      nomalStraight: true,
      moveStraight: false,
      none: false,
      navmenutrue: true,
      navmenufales: false,
      mskchang: true
    }
  },
  methods: {
    nav_hamburger: function () {
      this.nomalStraight = !this.nomalStraight
      this.moveStraight = !this.moveStraight
      this.none = !this.none
      this.navmenutrue = !this.navmenutrue
      this.navmenufales = !this.navmenufales
      this.mskchang = !this.mskchang
    }
  },
}
</script>

<style lang="scss">
@mixin nvanime($number, $esing) {
  animation: $number 800ms $esing 0s forwards;
}
#nav {
  .straight {
    position: fixed;
    z-index: 5;
    top: 2vw;
    right: 2vw;
    width: 100px;
    height: 80px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
  }
  .straight1,
  .straight2,
  .straight3 {
    width: 75px;
    height: 4px;
    background: #000;
  }
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
  .ns1,
  .ms1,
  .ns3,
  .ms3 {
    position: relative;
    transform-origin: center center;
  }
  @keyframes straight1 {
    0% {
      transform: translateY(675%) rotate(45deg);
    }
    50% {
      transform: translateY(675%) rotate(-20deg);
    }
    100% {
      transform: translateY(0%) rotate(0deg);
    }
  }
  @keyframes straight3 {
    0% {
      transform: translateY(-675%) rotate(135deg);
    }
    50% {
      transform: translateY(-675%) rotate(-30deg);
    }
    100% {
      transform: translateY(0%) rotate(0deg);
    }
  }
  @keyframes straight2 {
    0% {
      transform: translateY(0%) rotate(0deg);
    }
    50% {
      transform: translateY(675%) rotate(0deg);
    }
    100% {
      transform: translateY(675%) rotate(45deg);
    }
  }
  @keyframes straight4 {
    0% {
      transform: translateY(0%) rotate(0deg);
    }
    50% {
      transform: translateY(-675%) rotate(0deg);
    }
    100% {
      transform: translateY(-675%) rotate(135deg);
    }
  }
  @keyframes straight5 {
     from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes straight6 {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  .ns1,{
    @include nvanime(straight1, cubic-bezier(.35,.88,.61,1.5));
  }
  .ns3 {
    @include nvanime(straight3, cubic-bezier(.35,.88,.61,1.5));
  }
  .ms1,{
    @include nvanime(straight2, cubic-bezier(0,0,.47,-0.69));
  }
  .ms3 {
    @include nvanime(straight4, cubic-bezier(0,0,.47,-0.69));
  }
  .ns2 {
    opacity: 0;
    animation: straight5 0s linear 430ms forwards;
  }
  .ms2 {
    opacity: 1;
    animation: straight6 0s linear 400ms forwards;
  }
  .navmenu {
    position: absolute;
    z-index: 3;
    top: 0;
    right: 0;
    width: 225px;
    height: 100vh;
    background: #fff;
  }
  .msk {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    background: #000;
    opacity: .2;
    width: 100vw;
    height: 100vh;
  }
  .none {
    display: none;
  }
  @keyframes navfales {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0%);
    }
  }
  @keyframes navtrue {
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(100%);
    }
  }
  .navmenutrue {
    animation: navtrue 500ms linear 0s forwards;
    // right: -20%;
  }
  .navmenufales {
    animation: navfales 500ms linear 0s forwards;
    // right: 0%;
  }
}
</style>
